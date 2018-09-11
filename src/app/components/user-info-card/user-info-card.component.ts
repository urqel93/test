import {Component} from '@angular/core';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss']
})

export class UserInfoCardComponent {

  isLike = false;
  likes = 125;
  followersNumber = 350;
  isFollowing = false;

  likeProfile() {
    this.isLike = !this.isLike;
    this.isLike ? this.likes++ : this.likes--;
  }

  followProfile() {
    this.isFollowing = !this.isFollowing;
    this.isFollowing ? this.followersNumber++ : this.followersNumber--;
  }

}
