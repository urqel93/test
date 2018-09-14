import {Component, Input, OnInit} from '@angular/core';
import {IComment} from '../../core/interfaces';

@Component({
  selector: 'app-comments-card',
  templateUrl: './comments-card.component.html',
  styleUrls: ['comments-card.component.scss']
})

export class CommentsCardComponent implements OnInit {
  showComments = true;
  comment: IComment = {
    user: {
      name: 'Calvin Mayers',
      avatar: 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png'
    },
    text: '',
    date: null
  };

  @Input() comments: IComment[] = [];

  ngOnInit() {
    this.filterCommentsDate();
  }

  filterCommentsDate() {
    if (this.comments.length > 0) {
      this.comments.sort((a, b) => {
        return +new Date(a.date) - +new Date(b.date);
      });
    }
  }

  toggle() {
    this.showComments = !this.showComments;
  }


  onSubmit(form: any) {
    const data = {
      user: {
        name: 'Calvin Mayers',
        avatar: 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png'
      },
      text: form.value.comment,
      date: new Date()
    };
    this.comments.push(data);
    form.reset();
  }


}
