import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from  "@angular/common/http";

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.sass']
})

export class ContactComponent implements OnInit {

	contactForm: FormGroup;
	nameFirstError = true;
	emailFirstError = true;
	messageFirstError = true;

	private submitURL = 'http://127.0.0.1:5000/contact/submit';

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};


	constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

	ngOnInit() {
		this.contactForm = this.formBuilder.group({
			nameInput: ['', [Validators.required, Validators.minLength(2)]],
			emailInput: ['', [Validators.required, Validators.email]],
			messageInput: ['', [Validators.required, Validators.minLength(5)]]
		});
	}

	setError(input) {
		if (input === "name") {
			this.nameFirstError = false;
		} else if (input === "email") {
			this.emailFirstError = false;
		} else if (input === "message") {
			this.messageFirstError = false;
		}
	}

	checkError(input) {
		var data = this.contactForm.value;
		if (input === "name") {
			return {'error': this.contactForm.controls['nameInput'].invalid && !this.nameFirstError}
		} else if (input === "email") {
			return {'error': this.contactForm.controls['emailInput'].invalid && !this.emailFirstError}
		} else if (input === "message") {
			return {'error': this.contactForm.controls['messageInput'].invalid && !this.messageFirstError}
		}
	}

	checkErrorMsg(input) {
		var data = this.contactForm.value;
		if (input === "name") {
			return {'message': true, 'error': this.contactForm.controls['nameInput'].invalid && !this.nameFirstError}
		} else if (input === "email") {
			return {'message': true, 'error': this.contactForm.controls['emailInput'].invalid && !this.emailFirstError}
		} else if (input === "message") {
			return {'message': true, 'error': this.contactForm.controls['messageInput'].invalid && !this.messageFirstError}
		}
	}

	submitForm() {
		this.nameFirstError = false;
		this.emailFirstError = false;
		this.messageFirstError = false;

		if (!this.contactForm.invalid) {
			this.http.post(this.submitURL, JSON.stringify(this.contactForm.value), this.httpOptions)
				.subscribe(
				    res => {
				    	console.log(res);
				    },
				    (err: HttpErrorResponse) => {
					    console.log(err);
				    }
				);

			this.contactForm.reset();
			this.nameFirstError = true;
			this.emailFirstError = true;
			this.messageFirstError = true;
		}
	}

}
