import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let page: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(SigninComponent);
    
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement; // It's a container of all HTML data from signin.component.html

    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
describe('given form', ()=>{
    it('when email is empty, then recover password buttun should be disabled', () => {
      setEmail('');

      expect(getElementButton('[test-id="recover-password-button"]').disabled).toBeTruthy();
    })

    it('when email is invalid, then recover password buttun should be disabled', () => {
      setEmail('invalidEmail');
      
      expect(getElementButton('[test-id="recover-password-button"]').disabled).toBeTruthy();
    })

    it('when email is valid, then recover password buttun should be enabled', () => {
      setEmail('valid@email.com');
      
      expect(getElementButton('[test-id="recover-password-button"]').disabled).toBeFalsy();
    })



    it('when email is empty, then login button should be disabled', () => {
      setEmail('');
      setPassword('anyPassword');
      
      expect(getElementButton('[test-id="login-button"]').disabled).toBeTruthy();
    })
    
    it('when email is invalid, then login button should be disabled', () => {
      setEmail('invalid');
      setPassword('anyPassword');
      
      expect(getElementButton('[test-id="login-button"]').disabled).toBeTruthy();
    })
    
    it('when password is empty, then login button should be disabled', () => {
      setEmail('valid@email.com');
      setPassword('');
      
      expect(getElementButton('[test-id="login-button"]').disabled).toBeTruthy();
    })

    it('when password is NOT empty, then login button should be enabled', () => {
      setEmail('valid@email.com'); 
      setPassword('anyPassword');
      
      expect(getElementButton('[test-id="login-button"]').disabled).toBeFalsy();
    })

})

function setEmail(value:string){
  component.form.get('email')?.setValue(value);
  fixture.detectChanges();
}

function setPassword(value:string){
  component.form.get('password')?.setValue(value);
  fixture.detectChanges();
}

function getElementButton(testId:string){
  return page.querySelector(testId);
}

});
