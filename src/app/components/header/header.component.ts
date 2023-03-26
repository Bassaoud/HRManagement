import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input()
  title!: string;
  dropdown = false;

  @ViewChild('productbtn', { read: ElementRef })
  productbtn!: ElementRef;
  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit() { 
    this.isLoggedIn =    this.authService.isLoggedIn;

  }

  hideDropdown(event: { clientX: any; clientY: any; }) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect = this.productbtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top+2;
    const leftBoundary = rect.left+2;
    const rightBoundary = rect.right-2;

    if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {
      this.dropdown = false;
    }
  }


  login() {
    // code pour la connexion de l'utilisateur
    this.authService.isLoggedIn = true;
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout() {
    // code pour la déconnexion de l'utilisateur
    this.authService.isLoggedIn = false;
    this.isLoggedIn = this.authService.isLoggedIn;

  }

}
