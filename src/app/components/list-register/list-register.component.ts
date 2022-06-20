import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.scss']
})
export class ListRegisterComponent implements OnInit {

  registers!: Register[];

  constructor(
    public registerService:RegisterService
  ) { }

  ngOnInit(): void {
    this.registers = this.registerService.getRegister();

  }

}
