import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ag-prueba-front';
  
  @ViewChild('menu') menu: MenuComponent | undefined;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.menu?.getLogged();
      
      // Medición KR: r% (Page Load Time)
      setTimeout(() => {
        const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (nav) {
          const loadTime = nav.loadEventEnd - nav.startTime;
          console.log(`Métrica KR (r%): Carga de página en ${loadTime.toFixed(2)}ms`);
        }
      }, 0);
    });
  }
}


