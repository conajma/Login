import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    username: new FormControl(""),
    pwd: new FormControl(""),

  });


  registerSubmitted(){
    console.log(this.registerForm.value);
  }
}
