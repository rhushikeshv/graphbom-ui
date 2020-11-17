import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Part} from "./part";
import {BaseURL} from "../../BaseURL";

@Injectable()
export class PartService {
  constructor(private http: HttpClient) {}

  getParts() {
    return this.http.get<any>(BaseURL.url + '/bom/services/partservice/findparts')
      .toPromise()
      .then(res => res)
      .then(data => data);
  }
  updatePart(part:Part){
   console.log(part);
    return this.http.put<any>(BaseURL.url +'/bom/services/partservice/updatepart',part).toPromise().then(res=>res).then(data=>data);
  }
  createPart(part:Part){
    console.log(part);
    return this.http.post<any>(BaseURL.url +'/bom/services/partservice/createpart',part).toPromise().then(res=>res).then(data=>data);
  }
}



