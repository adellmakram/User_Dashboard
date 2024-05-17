import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PageEvent } from '@angular/material/paginator'; 
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit { 
  users: any[] = [];
  totalUsers = 0;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loadUsers(1);
  }

  loadUsers(page: number) {
    this.userService.getUsers(page).subscribe((response: any) => { 
      this.users = response.data;
      this.totalUsers = response.total;
    });
  }

  navigateToUser(id: number) {
    this.router.navigate(['/user', id]);
  }

  onPageChange(event: PageEvent) {
    this.loadUsers(event.pageIndex + 1);
  }
}
