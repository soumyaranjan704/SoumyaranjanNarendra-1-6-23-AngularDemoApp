import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'EducationSite';
  public newsLetterGetData:any[]=[];
    
  constructor(private utilityService: UtilityService,public authService: AuthService,
    public router: Router,) { 
    
  }
  ngOnInit(): void {

    this.getNewsDataFromApi();
 
  }

  logout () {
    this.authService.isLoggedIn = false;
    this.router.navigateByUrl('');
  }

  getNewsDataFromApi(){
    let url=environment.getNewsLetter;
    this.utilityService.getDataToService(url).subscribe(response =>{
     this.newsLetterGetData=response;
    }, error=>{
      console.log('error is',error)
    });
     
  }
}
