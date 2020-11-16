import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component'; 
import { ProdhomeComponent } from './productos/prodhome/prodhome.component';
import { ProddetalleComponent } from './productos/proddetalle/proddetalle.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { ProdsimilaresComponent } from './productos/prodsimilares/prodsimilares.component';
import { CompraBotonComponent } from './compra/compra-boton/compra-boton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdgrillaComponent } from './productos/prodgrilla/prodgrilla.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent, 
    ProdhomeComponent, ProddetalleComponent, ProdsimilaresComponent, CompraBotonComponent, ProdgrillaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgxGalleryModule,
    MatTabsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }, 
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
