import {Component, Input, OnInit} from '@angular/core';
import {IProfile} from '../../core/interfaces';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss']
})

export class UserInfoCardComponent implements OnInit {

  @Input() userProfile: IProfile;

  isLike = false;
  likes: number;
  following: number;
  followersNumber: number;
  isFollowing = false;

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.likes = this.userProfile.user.likes;
    this.followersNumber = this.userProfile.user.followers;
    this.following = this.userProfile.user.following;

  }

  likeProfile() {
    this.isLike = !this.isLike;
    this.isLike ? this.likes++ : this.likes--;
  }

  followProfile() {
    this.isFollowing = !this.isFollowing;
    this.isFollowing ? this.followersNumber++ : this.followersNumber--;
  }

  getLocation() {
    alert('App location: ' + window.location);
  }

}
