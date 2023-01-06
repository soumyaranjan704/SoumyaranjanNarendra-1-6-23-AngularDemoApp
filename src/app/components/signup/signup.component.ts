import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupForm } from 'src/app/form-data-advance';
import { UtilityService } from 'src/app/services/utility.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpDetails = new SignupForm();

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
  }
  signUpNewRecord(form: NgForm) {
    let url = environment.signUpBaseUrl;
    let requestModel = form.value;
    console.log(form.value);
    let contactRef =  document.getElementById("signUpForm")  as HTMLFormElement;
    contactRef.reset();
    this.utilityService.postDataToService(url, requestModel).subscribe(data => {
    
      console.log("Success");
    }, error => {
      console.log("Error");
    });
  
  }
}
