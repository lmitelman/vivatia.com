import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-productos',
	templateUrl: './productos.component.html',
	styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

	captika: String = 'assets/captika-bw.png';
	thuban: String = 'assets/thuban-bw.png';
	public innerWidth: any;

	constructor() { }

	ngOnInit() {
		this.innerWidth = window.innerWidth
	}

	isMobile() {
		if (this.innerWidth < 850) {
			return true;
		}
	}

	changeImageIcon(type, mode) {
		if(type == 'captika'){
			if(mode == 'in'){
				this.captika = 'assets/captika-color.png';
			} else {
				this.captika = 'assets/captika-bw.png';
			}
		} else {
			if(mode == 'in'){
				this.thuban = 'assets/thuban-color.png';
			} else {
				this.thuban = 'assets/thuban-bw.png';
			}
		}
	}
}
