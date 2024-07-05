import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule, RouterModule],
  template: `
    <main>
      <header>
      <nav class="navbar">
      <img class="brand-logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJOd7icjWfc7ClRVyOmWryLwFnBFexJ7DNw&s" width ="250" height="60" alt="logo" aria-hiddden="true">
      </nav>
      </header>
      <section class="content">
         
      <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'housingProject';
}
