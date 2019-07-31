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

	constructor() { }

	ngOnInit() {
	}

	validateName(val) {
		this.validName = val.length > 1;
		return val.length > 1;
	}

	validateEmail(val) {
		let re = new RegExp('[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?', 'g');
		this.validEmail = re.test(val);
		console.log(val);
		console.log(re.test(val));
		return re.test(val);
	}

	validateMessage(val) {
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
		var f1 = this.validateName(document.getElementById('name').value);
		var f2 = this.validateEmail(document.getElementById('email').value);
		var f3 = this.validateMessage(document.getElementById('message').value);

		var params = 'name=' + document.getElementById('name').value + '&' + 'email=' + document.getElementById('email').value + '&' + 'message=' + document.getElementById('message').value;

		console.log(params);

		if (f1 && f2 && f3) {
			//Add submit functionality here
		}
	}

}
