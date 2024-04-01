import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment.development';

// if (environment.production) {
//   window.console.log = () => { }
// }

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
