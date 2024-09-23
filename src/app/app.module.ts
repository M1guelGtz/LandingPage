import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Home/nav/nav.component';
import { BodyComponent } from './Home/body/body.component';
import { AlbumsComponent } from './Home/albums/albums.component';
import { FooterComponent } from './Home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    AlbumsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
