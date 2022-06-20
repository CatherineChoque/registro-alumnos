import { Component, OnInit, Input, Output } from '@angular/core';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() register!: Register;
  //@Output() registerSelec = new EventEmitter<Register[]>();

  constructor( 
    public registerService:RegisterService
  ) { }

  ngOnInit(): void {
  }

  deleteRegister(register: Register){
    if(confirm('¿Estas seguro de eliminarlo?')){
      this.registerService.deleteRegister(register);
    }
  }

  editarRegister(){
    //this.registerSelec.emit(register);
  }
}
