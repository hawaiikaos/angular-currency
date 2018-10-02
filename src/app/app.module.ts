import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
