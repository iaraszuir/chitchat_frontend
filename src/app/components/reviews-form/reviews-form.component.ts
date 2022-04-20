import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/Services/reviews.service';

@Component({
  selector: 'app-reviews-form',
  templateUrl: './reviews-form.component.html',
  styleUrls: ['./reviews-form.component.css']
})
export class ReviewsFormComponent implements OnInit {

  constructor(private reviewsService: ReviewsService) { }

  ngOnInit(): void {
  }


  async onSubmit(form: any) {

    const response = await this.reviewsService.createReview(form.value)
    console.log(response);
  }
}
