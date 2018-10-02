import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CurrencyPipe } from './currency.pipe';
import { CurrencyDirective } from './currency.directive';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyPipe,
    CurrencyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
