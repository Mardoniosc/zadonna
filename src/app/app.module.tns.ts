import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { AboutComponent } from '@src/app/pages/about/about.component';
import { CategoryListComponent } from '@src/app/pages/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CategoryListComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
