import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { Server } from "../interfaces/server";

@Injectable()
export class ServerService {
  server: Server;
  private serversUrl = "http://localhost:3000/my_servers";

  constructor(private http: Http) { }

  getServers(): Observable<Server[]> {
    return this.http.get(this.serversUrl)
                    .map((response: Response) => {
                      return <Server[]>response.json();
                    })
                    .catch(this.handleError);
  }

  getServer(id:number){
    return this.http.get(this.serversUrl + "/" + id);
  }

  createServer(server){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(server.value);

    return this.http.post(this.serversUrl, JSON.stringify(server.value), options).map((response: Response) => response.json());
  }

  updateServer(id:number, server){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(server.value);

    return this.http.put(this.serversUrl+ "/" + id, JSON.stringify(server.value), options).map((response: Response) => response.json());
  }

  deleteServer(id:number){
    return this.http.delete(this.serversUrl + "/" + id);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
