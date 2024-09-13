import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  adjectives2 = ['Full Stack Developer', 'BackEnd Developer','FrontEnd Developer', 'Java Developer'];
  currentIndex = 0;
  currentAdjective2 = this.adjectives2[this.currentIndex];

  adjectives = [
    { name: 'JavaScript', logo: '/assets/img/js2_logo.png' },
    { name: 'Angular', logo: '/assets/img/angular_logo.png' },
    { name: 'Java', logo: '/assets/img/java_image.png' },
    { name: 'Spring Boot', logo: '/assets/img/spring2_logo.png' },
    { name: 'PostgreSQL', logo: '/assets/img/postgres_logo2.png' }
  ];


  currentAdjective = this.adjectives[this.currentIndex];

  ngOnInit(): void {
    this.startTextRotation();
    this.startTextRotation2();
  }

  startTextRotation() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.adjectives.length;
      this.currentAdjective = this.adjectives[this.currentIndex];
    }, 2000); // Cambia ogni 2 secondi
  }

  startTextRotation2() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.adjectives2.length;
      this.currentAdjective2 = this.adjectives2[this.currentIndex];
    }, 3000);
  }
}
