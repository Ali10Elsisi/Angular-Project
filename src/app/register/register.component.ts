import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myreactiveFrom: FormGroup

  constructor() { this.myreactiveFrom = new FormGroup({
    name :new FormControl("",[Validators.required,Validators.maxLength(20)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    username:new FormControl("",[Validators.required]),
    password:  new FormControl("", [Validators.required] ),
    conformpassword:new FormControl("",[Validators.required])
  
  }) 
                      
}
  regsSubmit(){
    if(this.myreactiveFrom.controls['password'].value !== this.myreactiveFrom.controls['conformpassword'].value){
       
      alert("your password not correct")
      
    } else{
      alert("your password correct")

    }
    //console.log(this.myreactiveFrom)
  }

  ngOnInit(): void {
  }
  

  
}
