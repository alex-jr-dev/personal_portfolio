import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FullPageComponent } from './components/full-page/full-page.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TopBarLinksComponent } from './components/top-bar/top-bar-links/top-bar-links.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FullPageComponent,
    TopBarLinksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
