import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'FAQ', component: FaqComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
