// // app.module.ts
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { AppComponent } from './app.component';
// import { ProductComponent } from './product/product.component';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [AppComponent, ProductComponent],
//   imports: [BrowserModule, HttpClientModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent, ProductComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}







