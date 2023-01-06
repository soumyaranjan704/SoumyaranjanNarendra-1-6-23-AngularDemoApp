import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  public carrerGetData :any[]=[];

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.getDataFromApi();
  }
  getDataFromApi() {
    let url = environment.getPostJob;
    this.utilityService.getDataToService(url).subscribe(response => {
      this.carrerGetData = response;
      console.log('response from api is', response);
    }, error => {
      console.log('error is', error);
    });


  }
}
