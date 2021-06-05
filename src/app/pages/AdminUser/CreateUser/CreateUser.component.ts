import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/core/models/Admin';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-CreateUser',
  templateUrl: './CreateUser.component.html',
  styleUrls: ['./CreateUser.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    private modalService:NgbModal,
    private spinner:NgxSpinnerService
    ) { }

  ngOnInit() {
  
  }
  createuserform:FormGroup=new FormGroup({
   
    Email:  new FormControl(''),
    Password:new FormControl(''),
    Name: new FormControl(''),
    CanEdit: new FormControl(false),
    CanDelete:new FormControl(false),
    Role:new FormControl(''),

 });
onSubmit(){
  debugger;
  console.log(this.createuserform.value)
 this.createuserform.get('Role').patchValue('SubAdmin');
 if(this.createuserform.get('CanDelete').value==null){
  this.createuserform.get('CanDelete').patchValue(false);
 }
 if(this.createuserform.get('CanEdit').value==null){
  this.createuserform.get('CanEdit').patchValue(false);
 }
  this.SignUp(this.createuserform.value.Email,this.createuserform.value.Password);

}
 // Sign up with email/password
 SignUp(email, password) {
   debugger
   this.spinner.show();
  return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      /* Call the SendVerificaitonMail() function when new user sign 
      up and returns promise */
     debugger
      this.SetUserData(result.user);
      this.createuserform.reset();
      this.modalService.dismissAll();
      this.spinner.hide();
    }).catch((error) => {
      window.alert(error.message)
    })
}
SetUserData(user) {
  debugger
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Admin/${user.uid}`);
  debugger;
  const userData: Admin = {
    id: user.uid,
    Email: this.createuserform.value.Email.toLowerCase( ),
    Name: this.createuserform.value.Name,
    Password: this.createuserform.value.Password,
    CanEdit:this.createuserform.value.CanEdit,
    CanDelete:this.createuserform.value.CanDelete,
    Role:this.createuserform.value.Role
  }
  return userRef.set(userData, {
    merge: true
  })
}

}
