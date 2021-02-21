import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './components/main/app.component';
import { EmisionComponent } from './components/emision/emision.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    EmisionComponent,
    NavMenuComponent,    
    ConsultaComponent, WelcomeComponent    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserModule,    
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full'},
      { path: 'welcome', component: WelcomeComponent },
      { path: 'emision', component: EmisionComponent },
      { path: 'consulta', component: ConsultaComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]//Se necesita incluir para poder ver sus productos
})
export class AppModule { }
