import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isCollapsed = false;
  adjectives = ['Full Stack Developer', 'BackEnd Developer','FrontEnd Developer', 'Java Developer'];
  currentIndex = 0;
  currentAdjective = this.adjectives[this.currentIndex];

  ngOnInit(): void {
    this.startTextRotation();
  }

  startTextRotation() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.adjectives.length;
      this.currentAdjective = this.adjectives[this.currentIndex];
    }, 3000);
  }
}

