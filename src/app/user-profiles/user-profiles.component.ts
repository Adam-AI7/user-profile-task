import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserProfilesService } from '../services/user-profiles.service';
import { Router } from '@angular/router';
import { UserProfile, searchInput } from '../models/api-models';
import { Observable, Subject, debounce, debounceTime, distinctUntilChanged, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-user-profiles',
  template: `
    <div class="flex-box fb-center-center fb-column">
      <div>
        <div class="container">
          <div class="search">
            <div class="row">
              <div class="col-md-4">
                <div class="search-1">
                  <i class="bx bx-search-alt"></i>
                  <input  #searchBox (keydown.enter)="onSearch()"  [(ngModel)]="search.value" type="text" placeholder="Search Value" />
                </div>
              </div>
              <div class="col-md-4">
                <div>
                  <div class="search-2">
                    <i class="bx bxs-map"></i>
                    <select [(ngModel)]="search.field" class="form-select" placeholder="Search Field">
  <option selected>Search Feild</option>
  <option *ngFor="let column of searchColums" [value]="column">{{column|uppercase}}</option>
</select>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
              <button (click)="onSearch(btn.innerText)" #btn class="btn btn-info">{{(search.isFilter)?'Clear':'Search'}}</button>
              </div>
            </div>
          </div>
        </div>
        <!-- <input type="text" placeholder="Search" [(ngModel)]="search" (input)="onSearch()"> -->
      </div>
      <div style="height: 80vh;" *ngIf="userProfiles$ | async as allProfiles; else loading">
        <app-table-view
          [source]="allProfiles"
          (rowClick)="onRowClick($event)"
          [search]="search"
        ></app-table-view>
      </div>
      <ng-template #loading> data fetching... </ng-template>
    </div>
  `,
  styles: [
    `
      body {
        background-image: linear-gradient(to right top, #d91b23, #124feb);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .search {
        background-color: #fff;
        padding: 4px;
        border-radius: 5px;
      }

      .search-1 {
        position: relative;
        width: 100%;
      }

      .search-1 input {
        height: 45px;
        border: none;
        width: 100%;
        padding-left: 34px;
        padding-right: 10px;
        border-right: 2px solid #eee;
      }

      .search-1 input:focus {
        border-color: none;
        box-shadow: none;
        outline: none;
      }

      .search-1 i {
        position: absolute;
        top: 12px;
        left: 5px;
        font-size: 24px;
        color: #eee;
      }

      ::placeholder {
        color: #eee;
        opacity: 1;
      }

      .search-2 {
        position: relative;
        width: 100%;
      }

      .search-2 input {
        height: 45px;
        border: none;
        width: 100%;
        padding-left: 18px;
        padding-right: 100px;
      }

      .search-2 input:focus {
        border-color: none;
        box-shadow: none;
        outline: none;
      }

      .search-2 i {
        position: absolute;
        top: 12px;
        left: -10px;
        font-size: 24px;
        color: #eee;
      }

      .search-2 button {
        position: absolute;
        right: 1px;
        top: 0px;
        border: none;
        height: 45px;
        background-color: red;
        color: #fff;
        width: 90px;
        border-radius: 4px;
      }

      @media (max-width: 800px) {
        .search-1 input {
          border-right: none;
          border-bottom: 1px solid #eee;
        }

        .search-2 i {
          left: 4px;
        }

        .search-2 input {
          padding-left: 34px;
        }

        .search-2 button {
          height: 37px;
          top: 5px;
        }
      }
    `,
  ],
})
export class UserProfilesComponent implements OnInit,AfterViewInit,OnDestroy {
  @ViewChild('searchBox')searchBox!:ElementRef;
  userProfiles$ = this.userProfilesService.getUserProfiles();
  searchColums=[
    "username",
    "location",
    "email",
    "gender",
    "education",
    "work",
    "verifiedStatus"
];
searchFilterSubject$=new Subject<string>()
  constructor(
    private userProfilesService: UserProfilesService,
    private router: Router
  ) {}
  search: searchInput={
    field:'username',
    value:'',
    isFilter:false,
  };
  ngOnInit(): void {
    // this.userProfilesService.getUserProfiles().subscribe();
    this.searchFilterSubject$.pipe(debounceTime(500),map((eve:string)=>this.search.value),distinctUntilChanged(),tap(ev=>console.log('ev',ev))).subscribe(()=>{
      this.search.isFilter=!(this.search.value=='')
      
      this.search ={
        ...this.search,
      }
      // this.transform()
    // if(this.search.isFilter==false){
    //   this.search.value=''
    // }
    })
  }
  onSearch(filter='') {
  if (filter==='Clear')this.search.value='';
this.searchFilterSubject$.next(this.search.value);
  }
  onRowClick(data: UserProfile) {
    this.router.navigate(['all-profiles', data.userId]);
  }
  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {
    this.searchFilterSubject$.unsubscribe()
  }
}
