import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-order1',
  templateUrl: './create-order1.component.html',
  styleUrls: ['./create-order1.component.scss']
})
export class CreateOrder1Component implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let userId = this.route.snapshot.params['userId'];
    console.log('User id is: ' + userId);
  }

}
