import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { Router } from '@angular/router'; // Import Router
import { UserService } from 'src/app/services/user.service'; // Import UserService

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
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.userService.getUserById(id).subscribe(response => {
      this.user = response.data;
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
