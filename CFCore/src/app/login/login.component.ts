import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Add this import

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  errorMessage: string = '';

  ngOnInit() {
    console.log('LoginComponent initialized');
  }

  onSubmit() {
    console.log('Login submitted', this.username, this.password);
    // TODO: Implement login logic
    // If login fails, set error message
    // this.errorMessage = 'Invalid username or password';
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    console.log('Password visibility toggled', this.showPassword);
  }
}