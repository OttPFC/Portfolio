import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('rotatingText') rotatingText!: ElementRef;

  
  
  adjectives = [
    { name: 'JavaScript', logo: '/assets/img/logo-javascript.svg' },
    { name: 'Html', logo: '/assets/img/html-1.svg' },
    { name: 'Angular', logo: '/assets/img/angular-icon.svg' },
    { name: 'Spring Boot', logo: '/assets/img/spring-3.svg' },
    { name: 'CSS', logo: '/assets/img/css-3.svg' },
    { name: 'Java', logo: '/assets/img/Java_Logo.svg' },
    { name: 'PostgreSQL', logo: '/assets/img/postgresql.svg' },
    { name: 'TypeScript', logo: '/assets/img/typescript.svg' }
  ];
  adjectives2 = [
    { name: 'Java', logo: '/assets/img/Java_Logo.svg' },
    { name: 'CSS', logo: '/assets/img/css-3.svg' },
    { name: 'PostgreSQL', logo: '/assets/img/postgresql.svg' },
    { name: 'JavaScript', logo: '/assets/img/logo-javascript.svg' },
    { name: 'TypeScript', logo: '/assets/img/typescript.svg' },
    { name: 'Spring Boot', logo: '/assets/img/spring-3.svg' },
    { name: 'Html', logo: '/assets/img/html-1.svg' },
    { name: 'Angular', logo: '/assets/img/angular-icon.svg' },    
  ]
  adjectives3 = [
    { name: 'PostgreSQL', logo: '/assets/img/postgresql.svg' },
    { name: 'TypeScript', logo: '/assets/img/typescript.svg' },
    { name: 'Spring Boot', logo: '/assets/img/spring-3.svg' },
    { name: 'JavaScript', logo: '/assets/img/logo-javascript.svg' },
    { name: 'Angular', logo: '/assets/img/angular-icon.svg' },
    { name: 'Html', logo: '/assets/img/html-1.svg' },
    { name: 'Java', logo: '/assets/img/Java_Logo.svg' },
    { name: 'CSS', logo: '/assets/img/css-3.svg' },
  ]

  currentIndex = 0;
  currentAdjective = this.adjectives[this.currentIndex];
  currentAdjective2 = this.adjectives2[this.currentIndex];
  currentAdjective3 = this.adjectives3[this.currentIndex];
  observer!: IntersectionObserver;
  intervalId: any;
  showButton = false;
  
  ngOnInit(): void {
    this.startRotation();
  }

  startRotation(){
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.adjectives.length;
      this.currentAdjective = this.adjectives[this.currentIndex];
    }, 2000); 
    
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.adjectives2.length;
      this.currentAdjective2 = this.adjectives2[this.currentIndex];
    }, 3000);
    
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.adjectives3.length;
      this.currentAdjective3 = this.adjectives3[this.currentIndex];
    }, 1000);
  }
  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.getElementById("topButton");
    const des = document.getElementById("des");
    if (window.scrollY > 1300 ) {  
      button!.style.display = "block";
      des!.style.opacity = "1";
    } else {
      button!.style.display = "none";
      des!.style.opacity = "0";
    }
  }
  
  topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
