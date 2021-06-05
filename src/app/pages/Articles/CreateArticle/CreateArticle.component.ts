import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-CreateArticle',
  templateUrl: './CreateArticle.component.html',
  styleUrls: ['./CreateArticle.component.scss']
})
export class CreateArticleComponent implements OnInit {


  url:any;
  filePath:String
  CreateArticledata:FormGroup;
id:any;
  
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
    private modalService:NgbModal,
    private spinner:NgxSpinnerService  ) { }


  ngOnInit() {
    this.CreateArticledata = this.formBuilder.group({
    
      title: ['', [Validators.required]],
      id: [''],
      link: ['']
   
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
    this.spinner.show();
    var url=await this.uploadImage();
    debugger;
    this.CreateArticledata.get('link').patchValue(this.url);
    this.id=this.CreateArticledata.get('id').value;
    var data= this.CreateArticledata.value
    delete data.id;
    this.afs.collection("Articles").doc(this.id).set(data);

    this.CreateArticledata.reset();
    this.modalService.dismissAll();
    this.spinner.hide();


  }
}
