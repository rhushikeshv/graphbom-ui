
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TreeNode} from 'primeng/api';
import {BaseURL} from "../../BaseURL";


@Injectable()
export class EBOMService {

  constructor(private http: HttpClient) {}

  loadBOM(name: string) {
    console.log('Loding bom');
    return this.http.get<any>(BaseURL.url +'/bom/services/partservice/loadbom?type=Part' + '&name=' + name + '&rev=1')
      .toPromise()
      .then(res => res.data as TreeNode[]);

  }
}
