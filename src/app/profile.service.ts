import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '456f09e8291362709026';
  private clientsecret = '2cae424789d31807d5c4974e20461bb9ee091f00';


  constructor(private HttpClient: HttpClient) {
    console.log('service is now ready');
    this.username = 'MugureNjunge';
  }

  getProfileInfo() {
    interface ApiResponse {
      login: string;
    }
    
    return this.HttpClient.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
     .pipe(map(response => console.log(response)));
  }

  getProfileRepos() {
    
    return this.HttpClient.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      .pipe(map(response => console.log(response)));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
