import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  //Declaring variables.
  private username: string;
  private client_id = '68e8aba51f0253c4c640';
  private client_secret = '147641ffdf6c47defa5f9b6935668f67819845d3';

  constructor(private _http: Http) {
    console.log("Github Service Ready!");
    this.username = 'elanza';

  }

  // Getting info from Github API.

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }
}
