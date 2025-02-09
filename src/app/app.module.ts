import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { MSALInstanceFactory } from './auth/msal.config';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


