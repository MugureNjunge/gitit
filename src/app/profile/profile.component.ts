import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl : './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  profile = { 
    login: '',
    company: '',
    location: '',
    avatar_url: '',
    public_repos: '',
    public_gist: '',
    followers: '',
    following: '',
    email: '',
    bio: '',
    created_at: '',
  };
    repos: any;
    username: any;
  static username: any;


  constructor(private service: ProfileService) {
    this.service.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile ; profile;
    });
    this.service.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this;this.repos ; repos;
    });

  }

  findProfile() {
    this.service.updateProfile(ProfileComponent.username);
    this.service.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this; this.profile 
      
    });

    this.service.getProfileRepos().subscribe(repos => {
      console.log(repos);
     this; this.repos 
    });
  }

  ngOnInit(): void {

  }
  

}
