import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private mobile: boolean = false;
  public isMobileLayout = false;
  // private web : boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    window.onload = () => this.isMobileLayout = window.innerWidth <= 991;
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;   
  }
  
}


//poner logica para ver de que el sidenav se cierre cuando picas en una opcion del menu
//que ademas haga scroll to the top cuando picas en una opcion
