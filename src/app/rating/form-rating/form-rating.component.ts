import { RatingService } from './../../service/rating.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-rating',
  templateUrl: './form-rating.component.html',
  styleUrls: ['./form-rating.component.css']
})
export class FormRatingComponent implements OnInit {
@Input()id: string;
idd;
  constructor(private ratingService: RatingService,
    private route: ActivatedRoute) {
    this.idd = this.route.snapshot.paramMap.getAll('id');
   }

  ngOnInit() {
  }
  form = new FormGroup({
    value: new FormControl(''
    )})
  saveRating(){
    this.ratingService.createRating(this.id,this.form.value)
    .subscribe(resp=>{
      console.log(resp)
      console.log(this.idd)
    })
  }
}
