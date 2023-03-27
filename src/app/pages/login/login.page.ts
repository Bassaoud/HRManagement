import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
isLoggedIn!: boolean;
loginForm!: FormGroup;

constructor(
  private formBuilder: FormBuilder,
  private authService: AuthService, 
  private router: Router,
  private toastController: ToastController
) {}

ngOnInit() {
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}
  login() {
    if (this.loginForm.valid) {
      this.authService.login();
      this.router.navigate(['/employees']);
    } else {
      //this.presentToast();
    }  
  }
  
/**
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
 */
  
}
