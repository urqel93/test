import {Component, OnInit} from '@angular/core';
import {DataService} from '../../core/data.service';
import {IProfile} from '../../core/interfaces';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})

export class ProfileCardComponent implements OnInit {
  userProfile: IProfile;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getProfileData();
  }

  getProfileData() {
    this.dataService.getData().subscribe(data => {
      this.userProfile = data.profile;
    });

  }


}
