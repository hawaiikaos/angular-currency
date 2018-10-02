import { Pipe, PipeTransform } from '@angular/core';
const padding = "000000";

@Pipe({ name: 'currency'})

export class CurrencyPipe implements PipeTransform {
    private decimal: string;
    private separator: string;
    
    constructor(){
      this.decimal = '.';
      this.separator = ','; //TODO internationalisation, case per currency prefix?
    }
      
  transform(value: string, fractionSize: number = 0): string {
      //TODO better handling of rounding
      console.log('in pipe transform');
      fractionSize = 2;
      
      let [ wholeAmount, fractionalAmount = ""] = (parseFloat(value).toString() || "").toString().split(".");
      
      fractionalAmount = this.decimal + (fractionalAmount + padding).substring(0, fractionSize);
      console.log('fractionalAmout: ', fractionalAmount);
      wholeAmount = wholeAmount.replace(/\B(?=(\d{3})+(?!\d))/g, this.separator);
      if(isNaN(parseFloat(wholeAmount))) {
          wholeAmount = "0";
      }
      console.log('wholeAmount: ', wholeAmount);
      
      return wholeAmount + fractionalAmount;
  }
  
  //reverse of transform
  parse(value: string, fractionSize: number = 2): string {
      console.log('in pipe parse');
    let [ wholeAmount, fractionalAmount = "" ] = (value || "").split(this.decimal);
    console.log('wholeAmount: ', wholeAmount);
    console.log('fractionalAmount: ', fractionalAmount);
 
    wholeAmount = wholeAmount.replace(new RegExp(this.separator, "g"), "");
 
    if (parseInt(fractionalAmount, 10) > 0) {
        fractionalAmount = (fractionalAmount + padding).substring(0, fractionSize);
    } else {
        fractionalAmount = "00";
    }
    
    return wholeAmount + this.decimal + fractionalAmount;
  }

}
