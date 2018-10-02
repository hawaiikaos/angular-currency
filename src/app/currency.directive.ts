import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import { CurrencyPipe } from './currency.pipe';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective implements OnInit {

constructor(private elementRef:ElementRef, private formatcurrencypipe:CurrencyPipe) { }
  
    ngOnInit(){
        console.log('in onInit directive');
        console.log('this: ', this);
        console.log('value: ', this.elementRef.nativeElement.value);
        this.elementRef.nativeElement.value = this.formatcurrencypipe.transform(this.elementRef.nativeElement.value);
    }
  
    @HostListener("focus",["$event.target.value","$event"]) onFocus(value,event) {
        this.elementRef.nativeElement.value = this.formatcurrencypipe.parse(value);
        if(event.which == 9)
        {
            return false;
        }
        this.elementRef.nativeElement.select();
    }

    @HostListener("blur", ["$event.target.value"]) onBlur(value) {
        this.elementRef.nativeElement.value = this.formatcurrencypipe.transform(value);
    }

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        let e = <KeyboardEvent> event;
        console.log('e.keyCode: ', e.keyCode, e.ctrlKey, e.metaKey);
        //delete, backspace, tab, escape, enter, decimal, period
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1
        || (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) //CTRL + A
        || (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) //CTRL + C
        || (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) //CTRL + V
        || (e.keyCode === 88 && (e.ctrlKey || e.metaKey))) {  //CTRL + X
            //do nothing
            return;
        }

        // Check for number
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            console.log('ensure number');
            e.preventDefault();
        }
    }
}