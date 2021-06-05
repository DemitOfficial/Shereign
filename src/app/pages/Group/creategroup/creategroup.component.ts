import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.scss']
})
export class CreategroupComponent implements OnInit {

 
  profileimageurl:any;
  coverimageurl:any;
  profilefilePath:String=""
coverfilePath:String=""
  createGroup:FormGroup;
color:any;
  
  message: string;
  uploadprofile(event) {    
    this.profilefilePath = event.target.files[0]
  }
  uploadcover(event) {   
    debugger 
    this.coverfilePath = event.target.files[0]
  }
  async uploadImage(file:any){
 
    var imagevar='/images'+Math.random()+file;
   var snap= await this.afStorage.upload(imagevar, file);
    return this.getUrl(snap);
      
  }
  constructor(
    private afStorage: AngularFireStorage,
    private formBuilder: FormBuilder,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    private modalService:NgbModal ,
    private spinner:NgxSpinnerService ) { }


  ngOnInit() {
    this.createGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      id: [''],
      image: [''],
      coverimage: [''],
      color: ['']
   
    });
  }
  private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
    debugger
    const url = await snap.ref.getDownloadURL();
    this.profileimageurl = url;  //store the URL
    console.log(this.profileimageurl);
  }
  async Submitdata(){
    this.spinner.show()
    this.createGroup.get('color').patchValue(this.color)
    console.log(this.createGroup.value)
    if(this.profilefilePath!=""){
      await this.uploadImage(this.profilefilePath);
      this.createGroup.get('image').patchValue(this.profileimageurl);
    }
    if(this.coverfilePath!=""){
      await this.uploadImage(this.coverfilePath);
      this.createGroup.get('coverimage').patchValue(this.profileimageurl);
    }
   
    console.log(this.createGroup.value)


 
    this.afs.collection("Groups").add(this.createGroup.value);

    this.createGroup.reset();
    this.modalService.dismissAll();
    this.spinner.hide()


  }

}
