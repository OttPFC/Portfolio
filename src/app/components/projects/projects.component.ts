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
    number6: 0
  };

  ngOnInit() {
    this.animateCounter('number1', 6, 3000);
    this.animateCounter('number2', 80, 1700);
    this.animateCounter('number3', 81, 3100);
    this.animateCounter('number4', 16, 3450);
    this.animateCounter('number5', 47, 3300);
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
