import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Admin } from 'src/app/core/models/Admin';
import { Article } from 'src/app/core/models/article';


@Component({
  selector: 'app-CreateBabyData',
  templateUrl: './CreateBabyData.component.html',
  styleUrls: ['./CreateBabyData.component.scss']
})
export class CreateBabyDataComponent implements OnInit {
  url:any;
  filePath:String
  babyweekdata:FormGroup;

  
  message: string;
  upload(event) {    
    this.filePath = event.target.files[0]
  }
  async uploadImage(){
    console.log(this.filePath)
    var imagevar='/images'+Math.random()+this.filePath;
   var snap= await this.afStorage.upload(imagevar, this.filePath);
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
    this.babyweekdata = this.formBuilder.group({
      detail: ['', [Validators.required]],
      heading: ['', [Validators.required]],
      id: [''],
      image: ['']
   
    });
  }
  private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
    debugger
    const url = await snap.ref.getDownloadURL();
    this.url = url;  //store the URL
    console.log(this.url);
  }
  async Submitdata(){
    this.spinner.show();
    debugger
    var url=await this.uploadImage();
    debugger;
    this.babyweekdata.get('image').patchValue(this.url);
    var id=this.babyweekdata.get('id').value;
    this.afs.collection("WeekBabyData").doc(id).set(this.babyweekdata.value);

    this.babyweekdata.reset();
    this.modalService.dismissAll();
    this.spinner.hide()


  }
}
