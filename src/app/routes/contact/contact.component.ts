import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.sass']
})

export class ContactComponent implements OnInit {

	validName = true;
	validEmail = true;
	validMessage = true;
	name = '';
	email = '';
	message = '';

	constructor() { }

	ngOnInit() {
	}

	validateName(val) {
		this.name = val;
		this.validName = val.length > 1;
		return val.length > 1;
	}

	validateEmail(val) {
		this.email = val;
		let re = new RegExp('[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?', 'g');
		this.validEmail = re.test(val);
		return re.test(val);
	}

	validateMessage(val) {
		this.message = val;
		this.validMessage = val.trim().length > 5;
		return val.trim().length > 5;
	}

	checkError(input) {
		if (input === "name") {
			return {'error': !this.validName}
		} else if (input === "email") {
			return {'error': !this.validEmail}
		} else if (input === "message") {
			return {'error': !this.validMessage}
		}
	}

	checkErrorMsg(input) {
		if (input === "name") {
			return {'message': true, 'error': !this.validName}
		} else if (input === "email") {
			return {'message': true, 'error': !this.validEmail}
		} else if (input === "message") {
			return {'message': true, 'error': !this.validMessage}
		}
	}

	submitForm() {
		//Validate all the fields
		var f1 = this.validateName(this.name);
		var f2 = this.validateEmail(this.email);
		var f3 = this.validateMessage(this.message);

		var params = 'name=' + this.name + '&' + 'email=' + this.email + '&' + 'message=' + this.message;

		if (f1 && f2 && f3) {
			//Add submit functionality here
		}
	}

}
