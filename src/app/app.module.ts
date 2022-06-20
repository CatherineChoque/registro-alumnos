import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { ListRegisterComponent } from './components/list-register/list-register.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterService} from './services/register.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormRegisterComponent,
    ListRegisterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
