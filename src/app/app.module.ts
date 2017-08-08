import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

<<<<<<< HEAD
import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
=======
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
>>>>>>> bfa92f1fe801b7a3d0c2e3c4eca42f5c3d9f3d7d
})
export class AppModule {
}