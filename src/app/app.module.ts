import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

// NgRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { counterReducer } from './components/counter/counter.reducer';

import { AppComponent } from './app.component';
import { SonComponent } from './components/counter/son/son.component';
import { GrandchildComponent } from './components/counter/grandchild/grandchild.component';

@NgModule({
  declarations: [AppComponent, SonComponent, GrandchildComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
