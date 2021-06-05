import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-CreateMotherData',
  templateUrl: './CreateMotherData.component.html',
  styleUrls: ['./CreateMotherData.component.scss']
})
export class CreateMotherDataComponent implements OnInit {

  url:any;
  filePath:String
  motherweekdata:FormGroup;

  
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
    private modalService:NgbModal,private spinner:NgxSpinnerService  ) { }


  ngOnInit() {
    this.motherweekdata = this.formBuilder.group({
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
    debugger
    this.spinner.show()
    var url=await this.uploadImage();
    debugger;
    this.motherweekdata.get('image').patchValue(this.url);
    var id=this.motherweekdata.get('id').value;
    this.afs.collection("WeekMotherData").doc(id).set(this.motherweekdata.value);

    this.motherweekdata.reset();
    this.modalService.dismissAll();
    this.spinner.hide();


  }
}
