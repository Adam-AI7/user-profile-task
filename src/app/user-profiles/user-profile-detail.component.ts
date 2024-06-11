import{Component, OnInit}from'@angular/core'
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../models/api-models';
import { UserProfilesService } from '../services/user-profiles.service';
// type userDetail={
//     name:string,
//     mail:string,
//     coverPic:string
// }
@Component({
    selector:'app-user-profile-detail',
    templateUrl:'./user-profile-detail.component.html',
    styles:[`
        .feild-card{
            display:flex;
            flex-direction:column;
        }
        .form-group input{
            border:none;
        }
        .card{
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        }
        .card-content{
           
            padding:8px;
        }
        .userTag{
            background-color:#15395a;
            color:white;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
            padding: 10px;
    margin-top: 10px;
    margin-left: 5px;
    border-radius: 5px;
        }
        
        `
       
    ]
})
export class UserProfileDetailComponent  implements OnInit{
    userProfile!:UserProfile;
    userDetail=['languages','hobbies','homepage','birthDate']
    constructor(private aRoute:ActivatedRoute,private userService:UserProfilesService){

    } 
    ngOnInit(): void {
        this.aRoute.paramMap.subscribe((data)=>{
            console.log(data.get('id'),'iddddd')
            let id = data.get('id');
         if(typeof id =='string')
        this.userService.getUserProfileUsingId(+(id)).subscribe(profile=>{
      this.userProfile=profile;
    
        })
        })
    }

}