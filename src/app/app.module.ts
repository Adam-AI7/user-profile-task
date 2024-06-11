import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule, HashLocationStrategy } from '@angular/common';
import {HttpClientModule}from'@angular/common/http';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { FormsModule } from '@angular/forms';
import { CustomComponentsModule } from './custom-components/custom.components.module';
import { RouterModule } from '@angular/router';
import { UserProfileDetailComponent } from './user-profiles/user-profile-detail.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,UserProfilesComponent,UserProfileDetailComponent,TruncatePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
    {
      path:'all-profiles',
      component:UserProfilesComponent,
      
    },
    {
      path:'all-profiles/:id',
      component:UserProfileDetailComponent,

    },
    {
      path:'',
      redirectTo:'all-profiles',
      pathMatch:'full'
    }
    ],{ useHash: true,}),
    FormsModule,
    HttpClientModule,
    CustomComponentsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
