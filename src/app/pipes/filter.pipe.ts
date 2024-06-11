import { Pipe,PipeTransform } from "@angular/core";
import { UserProfile, searchInput } from "../models/api-models";

@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{
  transform(userProfiles: any[],search:searchInput) {
    if (!search.isFilter)return userProfiles;
      return userProfiles.filter(profiles=>{

        if(typeof search.field =='boolean'){
          return  profiles[search.field]===search.value
        }else return (profiles[search.field] +'').toLowerCase().includes(search.value.toLowerCase());
    })
  }
}