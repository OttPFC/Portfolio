import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  counters: Record<string, number> = {
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
    number5: 0,
    number6: 0,
    number7: 0,
    number8: 0,
    number9: 0,
    number10: 0,
    number11: 0,
    number12: 0
  };

  ngOnInit() {
    this.animateCounter('number1', 6, 3000);
    this.animateCounter('number2', 10, 1700);
    this.animateCounter('number3', 80, 3100);
    this.animateCounter('number4', 10, 3450);
    this.animateCounter('number5', 47, 3300);
    this.animateCounter('number6', 5, 3000);
    this.animateCounter('number7', 10, 1700);
    this.animateCounter('number8', 80, 3100);
    this.animateCounter('number9', 10, 3450);
    this.animateCounter('number10', 32, 3300);
    this.animateCounter('number11', 47, 3300);
    this.animateCounter('number12', 47, 3300);
  }


  animateCounter(prop: string, end: number, duration: number) {
    const start = 0;
    const increment = Math.ceil(end / (duration / 100));
    let current = start;

    const interval = setInterval(() => {
      current += increment;
      if (current > end) {
        current = end;
        clearInterval(interval);
      }
      this.counters[prop] = current;
    }, 100);
  }
}
