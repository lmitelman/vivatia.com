import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Vivatia';

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    let navLogo = document.getElementById('logo-white');
    // navLogo.style.display = 'none';
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    // let element1 = document.querySelector('.dropdown-content');

    if (window.pageYOffset > element.clientHeight) {
      // cambia el color de fondo del navbar
      element.classList.add('white');
      element.classList.remove('transparent');

      //cambia el color de fondo del dropdown
      let dropdown = document.getElementsByClassName('dropdown-content');
      for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].classList.remove('transparent');
        dropdown[i].classList.add('white');
        dropdown[i].classList.add('white-hover');
      }

      //muestra o oculta el logo de vivatia
      let navLogo1 = document.getElementById('logo-transparent');
      navLogo1.style.display = 'none';
      let navLogo2 = document.getElementById('logo-white');
      navLogo2.style.display = '';

      //cambia el color de los titulos del navbar
      let navTitles = document.getElementsByClassName('fontNavBar');
      for (let i = 0; i < navTitles.length; i++) {
        navTitles[i].classList.remove('text-white');
        navTitles[i].classList.add('text-dark');
      }

    } else {
      // cambia el color de fondo del navbar
      element.classList.add('transparent');
      element.classList.remove('white');

      //cambia el color de fondo del dropdown
      let dropdown = document.getElementsByClassName('dropdown-content');
      for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].classList.remove('white');
        dropdown[i].classList.remove('white-hover');
        dropdown[i].classList.add('transparent');
      }

      //muestra o oculta el logo de vivatia
      let navLogo3 = document.getElementById('logo-white');
      navLogo3.style.display = 'none';
      let navLogo4 = document.getElementById('logo-transparent');
      navLogo4.style.display = '';

      //cambia el color de los titulos del navbar
      let navTitles = document.getElementsByClassName('fontNavBar');
      for (let i = 0; i < navTitles.length; i++) {
        navTitles[i].classList.add('text-white');
        navTitles[i].classList.remove('text-dark');
      }
    }
  }

  openDialog(){
    this.dialog.open(DialogContactComponent);
  }
}
