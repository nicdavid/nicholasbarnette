import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { HomeComponent } from './routes/home/home.component';
import { ProjectsComponent } from './routes/projects/projects.component';
import { ContactComponent } from './routes/contact/contact.component';
import { CoinlyComponent } from './routes/coinly/coinly.component';
import { VinciComponent } from './routes/vinci/vinci.component';
import { SurinComponent } from './routes/surin/surin.component';
import { Page404Component } from './routes/page404/page404.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'coinly',
    component: CoinlyComponent
  },
  {
    path: 'surin',
    component: SurinComponent
  },
  {
    path: 'vinci',
    component: VinciComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    CoinlyComponent,
    VinciComponent,
    SurinComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
