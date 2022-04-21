import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from 'src/app/Services/reviews.service';

@Component({
  selector: 'app-reviews-form',
  templateUrl: './reviews-form.component.html',
  styleUrls: ['./reviews-form.component.css']
})
export class ReviewsFormComponent implements OnInit {

  eventId: number;
  @Output() reviewCreated: EventEmitter<boolean>;

  constructor(private reviewsService: ReviewsService, private activatedRoute: ActivatedRoute) {
    this.reviewCreated = new EventEmitter();

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params['pEventId']
    })
  }


  async onSubmit(form: any) {
    form.value.events_id = this.eventId;
    const response = await this.reviewsService.createReview(form.value)
    this.reviewCreated.emit(true);
  }
}
