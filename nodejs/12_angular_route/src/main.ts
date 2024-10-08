import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, 
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routes)
    ]
  }).catch((err) => console.error(err));
