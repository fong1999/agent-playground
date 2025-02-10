import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { ChatComponent } from './components/widgets/chat/chat.component';
import { CalendarComponent } from './components/widgets/calendar/calendar.component';
import { OrgChartComponent } from './components/widgets/org-chart/org-chart.component';
import { WeatherComponent } from './components/widgets/weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    ChatComponent,   // ✅ Directly list standalone components
    CalendarComponent,
    OrgChartComponent,
    WeatherComponent
  ]
})
export class AppComponent {
  // constructor(private msalService: MsalService) {
  //   const account = this.msalService.instance.getActiveAccount();
  //   if (!account) {
  //     this.msalService.loginRedirect();  // ✅ Redirect to login if not signed in
  //   }
  // }
}
