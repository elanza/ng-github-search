import { Component, OnInit } from '@angular/core';
//Import Service Github
import {GithubService} from '../../services/github.service'

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
  //Declaring  variables
  user: any[];
  repos:any[];

  //Infos User
  txtTitleInfos: string = "User infos";
  txtViewProfile: string = "View Profile";
  txtPublicRepositories: string = "Public Repositories";
  txtPublicGists: string = "Public Gists";
  txtFollowers: string = "Followers";
  txtFollowing: string = "Following";
  txtTitleBio: string = "Bio";

  //General
  txtUser: string = "User";
  txtLocation: string = "Location";
  txtType: string = "Type";
  txtMemberSince: string = "Member Since";

  //Infos User > Panel info
  txtTitlePanelInfo: string = "Panel info";


  //Infos User Repos
  txtTitleRepos: string= "User Repos";


  //Importing GithubService in to constructor
  constructor( private _githubService: GithubService) {

    console.log("Profile Component Ready!");

    //Implement user
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    })

    //Implement repos
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })


  }

  ngOnInit() {
  }

}
