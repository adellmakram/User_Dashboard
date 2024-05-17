import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PageEvent } from '@angular/material/paginator'; 
import { Store } from '@ngrx/store';
import { addToCache } from '../../Reducers/cache.actions';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit { 
  users: any[] = [];
  totalUsers = 0;
  isLoading: boolean = false;

  constructor(
    private userService: UserService, 
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    this.loadUsers(1);
  }

  loadUsers(page: number) {
    this.isLoading = true;
  
    setTimeout(() => {
      this.userService.getUsers(page).subscribe((response: any) => { 
        this.users = response.data;
        this.totalUsers = response.total;
        this.users.forEach(user => {
          this.store.dispatch(addToCache({ key: `user_${user.id}`, value: user }));
        });
        this.isLoading = false;
      });
    }, 1000);
  }

  navigateToUser(id: number) {
    this.router.navigate(['/user', id]);
  }

  onPageChange(event: PageEvent) {
    this.loadUsers(event.pageIndex + 1);
  }
}
