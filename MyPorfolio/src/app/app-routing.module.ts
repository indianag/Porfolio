import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { SkillsComponent } from './page/skills/skills.component';
import { PorfolioComponent } from './page/porfolio/porfolio.component';
import { ContactComponent } from './page/contact/contact.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  // {path: 'about', component: AboutComponent},
  // {path: 'skills', component: SkillsComponent},
  // {path: 'porfolio', component: PorfolioComponent},
  // {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
