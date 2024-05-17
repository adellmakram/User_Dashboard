import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private router: Router) {
    
  }
  searchById(id: string) {
    const parsedId = parseInt(id, 10);
    if (!isNaN(parsedId)) {
      this.router.navigate(['/user', parsedId]).then(() => {
        this.searchInput.nativeElement.value = '';
      });
      
    }
  }
  navigateToHome() {
    this.router.navigateByUrl('/');
  }
}