import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  
  myInput = new FormControl('');
  
  dynamicUpdate() {
      console.log('in dynamicUpdate');
      this.myInput.patchValue(100.99999, {emitEvent: true});
  }
}

