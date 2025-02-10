import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

// ✅ Import Standalone Components (No need for `provideComponent`)
import { ChatComponent } from './app/components/widgets/chat/chat.component';
import { CalendarComponent } from './app/components/widgets/calendar/calendar.component';
import { OrgChartComponent } from './app/components/widgets/org-chart/org-chart.component';
import { WeatherComponent } from './app/components/widgets/weather/weather.component';

bootstrapApplication(AppComponent);
