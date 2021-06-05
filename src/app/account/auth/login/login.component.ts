import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Admin } from 'src/app/core/models/Admin';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;
  AdminData:Admin[];

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService,   public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth,public ngZone: NgZone ) { }

  ngOnInit() {
    document.body.setAttribute('class', 'authentication-bg');

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngAfterViewInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
   SignIn( ) {
    return this.afAuth.signInWithEmailAndPassword(this.f.email.value, this.f.password.value)
      .then((result) => {
        this.ngZone.run(() => {
       this.onSubmit();
        });
      
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  onSubmit() {
    this.submitted = true;
    var email=this.f.email.value;
    this.authenticationService.login(email.toLowerCase( )).subscribe((next:any)=>{
      debugger
      this.AdminData=next.map(x=>{
        return {
          id:x.payload.doc.id,
          ...x.payload.doc.data()}
      })
      if(this.AdminData.length>0){
        if(this.AdminData[0].Password==this.f.password.value){
          this.router.navigate(["/"]);
        }
    
    
      }
      else
      {
        alert("Wrong Email Address Or Password")
      }
    
      localStorage.setItem('AdminData',JSON.stringify(this.AdminData[0]))
      console.log(this.AdminData)
    },error=>{
      console.log(error);
      alert("Something went wrong")
    }
    )
    // .then((res: any) => {
    //   document.body.removeAttribute('class');
    //   this.router.navigate(['/dashboard']);
    // })
    //   .catch(error => {
    //     this.error = error ? error : '';
    //   });
    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // } else {
    //   if (environment.defaultauth === 'firebase') {
    //     this.authenticationService.login(this.f.email.value, this.f.password.value).then((res: any) => {
    //       document.body.removeAttribute('class');
    //       this.router.navigate(['/dashboard']);
    //     })
    //       .catch(error => {
    //         this.error = error ? error : '';
    //       });
    //   } else {
    //     this.authFackservice.login(this.f.email.value, this.f.password.value)
    //       .pipe(first())
    //       .subscribe(
    //         data => {
    //           this.router.navigate(['/dashboard']);
    //         },
    //         error => {
    //           this.error = error ? error : '';
    //         });
    //   }
    //}
  }
}
