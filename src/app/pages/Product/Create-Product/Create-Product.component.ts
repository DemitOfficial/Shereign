import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-Create-Product',
  templateUrl: './Create-Product.component.html',
  styleUrls: ['./Create-Product.component.scss']
})
export class CreateProductComponent implements OnInit {
url:any;
  filePath:String
  Createproduct:FormGroup;
  breadCrumbItems: Array<{}>;
  
  message: string;

  constructor(
    private afStorage: AngularFireStorage,
    private formBuilder: FormBuilder,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router, private spinner :NgxSpinnerService ) { }

  upload(event) {    
    this.filePath = event.target.files[0]
  }
  async uploadImage(){
    console.log(this.filePath)
    var imagevar='/images'+Math.random()+this.filePath;
   var snap= await this.afStorage.upload(imagevar, this.filePath);
    return this.getUrl(snap);
      
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Profuct' }, { label: 'Add Product', active: true }];
    this.message = "<div class='mb-3'><i class=\"display-4 text-muted uil uil-cloud-upload\"></i></div>Drop files here or click to upload.";
    this.Createproduct = this.formBuilder.group({
      Title: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Price: ['', [Validators.required]],
      ImageUrl: [''],
      ProductCode: ['', [Validators.required]],
      url: ['', [Validators.required]],
    });
  }
  private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
    debugger
    const url = await snap.ref.getDownloadURL();
    this.url = url;  //store the URL
    console.log(this.url);
  }
  async Submitproduct(){
    this.spinner.show();
    debugger
    var url=await this.uploadImage();
    debugger;
    this.Createproduct.get('ImageUrl').patchValue(this.url);
    this.afs.collection("Products").add(this.Createproduct.value);

    this.Createproduct.reset();
this.spinner.hide()
    // this.router.navigate(['/product/all-product'])
  }
}
