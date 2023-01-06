import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactUsForm } from 'src/app/form-data-advance';
import { UtilityService } from 'src/app/services/utility.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactUsDetails = new ContactUsForm();

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
  }

  contactNewRecord(form: NgForm) {
    let url = environment.contactUsBaseUrl;
    let requestModel = form.value;
    console.log(form.value);
    let contactRef =  document.getElementById("contactUsForm")  as HTMLFormElement;
    //contactRef.reset();
    this.utilityService.postDataToService(url, requestModel).subscribe(data => {
    
      console.log("Success");
    }, error => {
      console.log("Error");
    });
  
  }

}
