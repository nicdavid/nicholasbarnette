import { Component, OnInit, time } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
	navigationOpen = false
	display = false

	constructor() { }

	ngOnInit() {
	}

	toggleNavigation() {
		this.navigationOpen = !this.navigationOpen;
		if (this.display) {
			setTimeout(() => {
				this.display = false;
			}, 500);
		} else {
			this.display = true;
		}
		
	}

	calculateClasses() {
		return {
			'navContainer': true,
			'opened': this.navigationOpen,
			'closed': !this.navigationOpen,
			'display': this.display
		}
	}

	testClick(event) {
		if (event.target.id === "navContainer") {
			this.toggleNavigation();
		}
	}

}
