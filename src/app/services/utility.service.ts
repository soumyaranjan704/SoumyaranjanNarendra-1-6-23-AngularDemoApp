import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http:HttpClient, public router: Router) { }


  postDataToService(url: string, data: any): Observable<any> {
  
  
    var serviceData = this.http.post(url, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
    return serviceData;
  }

// navigateSelectPages(navigatePath) {
//   return this.router.navigate([navigatePath]);
// }

getDataToService(url: string): Observable<any> {
  // let headers1 = this.appendHeaders(null);
  // let headers = { headers: headers1 }

  return this.http
    .get(url)
    .pipe(
      catchError((err) => {
        return throwError(err);
      }),
      finalize(() => { }))
}


}
