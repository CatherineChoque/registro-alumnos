import { Injectable } from '@angular/core';
import { Register} from '../models/register'
 
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registers!: Register[];

  constructor() { 
     this.registers = [];
  }

  getRegister(){
    if(localStorage.getItem('Registros') == null){
      return this.registers;
    } else {
      this.registers = JSON.parse(localStorage.getItem('Registros') || '{}');
      return this.registers;
    }
  }

  addRegister(register: Register){
    this.registers.push(register);
    let registers: Register[] = [];
    if(localStorage.getItem('Registros') === null ){
      registers.push(register);
      localStorage.setItem('Registros', JSON.stringify(registers));
    }else {
      registers = JSON.parse(localStorage.getItem('Registros') || '{}');
      registers.push(register);
      localStorage.setItem('Registros', JSON.stringify(registers));
    }
  }

  deleteRegister(register: Register){
    for(let i = 0; i < this.registers.length; i++){
      if(register == this.registers[i]){
        this.registers.splice(i,1);
        localStorage.setItem('Registros', JSON.stringify(this.registers));
      }
    }
  }

  editRegister(register: Register){
    for(let i = 0; i < this.registers.length; i++){
      if(register == this.registers[i]){
        this.registers.push(register);
        localStorage.setItem('Registros', JSON.stringify(this.registers));
      }
    }
  }
  
}
