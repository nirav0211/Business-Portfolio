import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'aboutme', component:AboutmeComponent }, 
  { path:'contactme', component:ContactmeComponent},
  { path:'projects',component:ProjectsComponent},
  { path:'services', component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
