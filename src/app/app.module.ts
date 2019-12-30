//Modules 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

//PrimeNG
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';


//Components
import { AppComponent } from './app.component';
import { Oef2PageComponent } from './oef2-page/oef2-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InputToCountdownDirective } from './oef2/jeroenl2/input-to-countdown.directive';
import { Oef1PageComponent } from './oef1-page/oef1-page.component';
import { Oef1Module } from './oef1/oef1.module';
import { Oef2Module } from './oef2/oef2.module';
import { Oef3Module } from './oef3/oef3.module';
import { Oef3PageComponent } from './oef3-page/oef3-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'Home',
        component: HomePageComponent
      },
      {
        path: 'oef1',
        component: Oef1PageComponent
      },
      {
        path: 'oef2',
        component: Oef2PageComponent
      },
      {
        path: 'oef3',
        component: Oef3PageComponent
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "Home"
      },
      {
        path: "*",
        redirectTo: "Home"
      }],
      {
        useHash: true
      }),
    //PrimeNG modules
    PanelModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
    AccordionModule,
    Oef1Module,
    Oef2Module,
    Oef3Module
  ],
  providers: [InputToCountdownDirective],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
