Task:

1. Write a function that gets the data from
 //* https://dummyapi.online/api/social-profiles
 
  and list the name, location, email, gender, education, work , verified status in table view.

2. Add an input box to search and filter the list based on the typed text values

3. If we click the row, call the respective user api to get and bind in the respective fields https://dummyapi.online/api/social-profiles/${id} NOTE : It should be in separate component




<div class="container" style="height: 85vh;">
    <div>
        <button class="btn btn-success">
            Back
        </button>
    </div>
    <!-- card -->
         <div class="card" style="width: 60%;" *ngIf="userProfile;else noDetail">
            <!-- header -->
    <div class="header flex-box fb-between">
             <!-- pic -->
    <div>
        <img style="height: 200px;width: 200px;" [src]="userProfile.profilePic" alt="profile pic">
    </div>
         <!-- pic -->
    <div>
      <h3>{{userProfile.fullName}}</h3>
      <div>{{userProfile.email}}</div>
    </div>
    <div>
    
    </div>
    </div>
    <div class="card-content">
      <div style="height: 200px;" class="row">
        <!-- <div class="card border-secondary mb-3" style="max-width:40%;">
            <div class="card-header">Hobbies :</div>
            <div class="card-body text-secondary">
              <p class="card-text">{{userProfile.hobbies | truncate}}</p>
            </div>
          </div> -->
       <div class="feild-card col-6">
    Hobbies : {{userProfile.hobbies | truncate}}
       </div>
       <div class="feild-card" style="width: 40%;height: 40%;margin:2%">
        Languages :{{userProfile.languages | truncate}}
       </div>
       <div class="feild-card" style="width: 40%;height: 40%;margin:2%">
        Status :{{userProfile.statusMessage | truncate}}
       </div>
       <div class="feild-card" style="width: 40%;height: 40%;margin:2%">
        Relationship :{{userProfile.relationshipStatus | truncate}}
       </div>
      </div>
    </div>
    <div class="card-footer">
   <span>   {{userProfile.followersCount}}-{{userProfile.followingCount}} </span>
   <span>last active:{{userProfile.lastActive}}</span>
    </div>

         </div>
    
        <ng-template #noDetail>
            This User Has No Detail
        </ng-template>
    
        </div>