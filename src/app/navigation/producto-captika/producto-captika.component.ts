import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-captika',
  templateUrl: './producto-captika.component.html',
  styleUrls: ['./producto-captika.component.scss']
})
export class ProductoCaptikaComponent implements OnInit {

  public play: boolean = false;
  constructor(
  ) { }

  ngOnInit() {
    
    // this.playVideoOnScroll(); 
    
  }

  // playVideoOnScroll() {
  //   window.onscroll = function () {
  //     let dv = document.getElementById('myVideoBox');
      
  //     if ((window.scrollY < (dv.offsetTop + dv.offsetHeight)) && ((window.scrollY + window.outerHeight) > dv.offsetTop)) {
  //       this.play = true;        
  //   }
  // }

  // }


}
