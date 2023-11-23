import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service'; // Import your AuthService here

@NgModule({
  declarations: [
    AppComponent,
    // Add other components here
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule here
  ],
  providers: [AuthService], // Add your services here
  bootstrap: [AppComponent],
})
export class AppModule { }
