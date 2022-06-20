import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public formRegister!: FormGroup;

  constructor( 
    private formBuilder:FormBuilder,
    public registerService:RegisterService
    ) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      lastName:['', [
        Validators.required
      ]],
      dateOfBirth:['', [
        Validators.required
      ]],
      dni:['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(11)
      ]],
      phoneNumber:['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(11)
      ]],
      hide:[true]
    })
  }

  addRegister(){
    //console.log(this.formRegister.value)
    this.registerService.addRegister(this.formRegister.value);
    console.log(this.registerService.getRegister());
    this.formRegister.reset();
  }

  editRegister(register: Register){
    this.formRegister.patchValue({
      name: register.name,
      lastName: register.lastName,
      dateOfBirth: register.dateOfBirth,
      dni: register.dni,
      phoneNumber: register.phoneNumber
    })
  }

  saveEditRegister(){
    //this.registerService.editRegister(register);
  }

}
