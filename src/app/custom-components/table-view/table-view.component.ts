import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { UserProfile, searchInput } from '../../models/api-models';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
 styles:[
  ``
 ]
})
export class TableViewComponent implements OnChanges {
  @Input('source')tableSource:UserProfile[]=[];
  @Input('search')search!:searchInput;
  @Output('rowClick')rowClick=new EventEmitter<UserProfile>();

  // @Input('source')tableSource:UserProfile[]=[];
  selectProfile(profile:UserProfile){
console.log(profile.username,'profile id');
this.rowClick.emit(profile);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // if(this.search.isFilter){
      
    // }
    
  }
}
