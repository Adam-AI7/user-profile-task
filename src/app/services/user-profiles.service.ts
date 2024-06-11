import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { UserProfile } from "../models/api-models";
import { environment } from "../../environments/environment.development";

@Injectable({
    providedIn:"root"
})
export class UserProfilesService{
    constructor(private http:HttpClient){

    }
    getUserProfiles():Observable<UserProfile[]>{
      return this.http.get<UserProfile[]>(`${environment.api}social-profiles`).pipe(
        catchError(this.handleError),
        tap(res=>console.log('usersgot',res)),
      )
    }
    getUserProfileUsingId(id:number):Observable<any>{
      return this.http.get<any>(`${environment.api}social-profiles/${id}`).pipe(
          catchError(this.handleError),
          tap(res=>console.log(id,'usergot by id',res)),
      )
    }
    private handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Client-side or network error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // Backend error
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
        }
        return throwError(errorMessage);
      }
}