import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShouhinListComponent } from './shouhin-list/shouhin-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

const routes: Routes = [ // 更新
  { path: 'product-list', component: ProductListComponent },
  { path: 'shouhin-list', component: ShouhinListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShouhinListComponent,
    ProductAlertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }