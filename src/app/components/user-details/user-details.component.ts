import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addToCache } from '../../Reducers/cache.actions';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getUserDetails(id);
    });
  }

  getUserDetails(id: number) {
    this.userService.getUserById(id).subscribe(response => {
      this.user = response.data;
      this.store.dispatch(addToCache({ key: `user_${id}`, value: this.user }));
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
