import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'hospital';
  username='Vicky';
  password='Vicky_123';
  hidetxt!: boolean;
  displayStyle="none";
user:string='Niranjan';
  validate() {
    alert("the button was clicked");
    if((this.username=='Vicky') && (this.password=='Vicky_123')) {
      alert("success");
      window.open('/newpage');
      this.hidetxt=true;
      
    }
    
  }
openPopup() {
  this.displayStyle="block";
}
closePopUp() {
  this.displayStyle="none";
}
 
}


