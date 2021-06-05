import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Admin } from 'src/app/core/models/Admin';
import { Article } from 'src/app/core/models/article';
import { Articledat } from 'src/app/core/models/Articledat';

@Component({
  selector: 'app-AllArticle',
  templateUrl: './AllArticle.component.html',
  styleUrls: ['./AllArticle.component.scss']
})
export class AllArticleComponent implements OnInit {

  
  key:string='rowid';
  reverse:boolean=false;

  p:number=1;
  // Table data
  data:any[]=[];
  url:any;
  filePath:String
articledata:Articledat[]=[];
  public selected: any;
  description:any;
productid:string;
loggedinuser:Admin={}as Admin;
dataid:string;
  selectedValue =5;
  editarticle:FormGroup
  term: string;
  datadetail:string;

  public isCollapsed = true;
  constructor(private firestore:AngularFirestore,private modalService:NgbModal,
    private afStorage: AngularFireStorage,    private formBuilder: FormBuilder,private spinner:NgxSpinnerService) {
   
  }

  ngOnInit() {
    this.data.push(5,10,25,50,100);
this.loggedinuser=JSON.parse(localStorage.getItem('AdminData')) as Admin;
  this.spinner.show()
    this.getdata().subscribe((next:any)=>{
      debugger
      this.articledata=next.map(x=>{
        return {
          id:x.payload.doc.id,
          ...x.payload.doc.data()}
      })
      console.log(this.articledata)
   this.articledata.reverse();
   this.spinner.hide()

    },error=>{
      console.log(error);
    }
    )
  
    this.editarticle = this.formBuilder.group({
   
      title: ['', [Validators.required]],
      
      link: ['']
   
    });
  }
  Delete(id:any){
    debugger
    this.spinner.show();
    this.firestore.doc('Articles/'+id).delete();
    this.spinner.hide();
   
  }
  Sort(key){
    debugger;
    this.key=key;
    this.reverse=!this.reverse;
  }
  getdata(){
    return this.firestore.collection('Articles').snapshotChanges();
  }
  adminmodal(content){
    this.modalService.open(content)
  }
  editmodal(editarticlemodal,id:string){
    debugger
    var data= this.articledata.filter(x=>x.id==id);
    this.dataid=id;
   
    this.editarticle.get('title').patchValue(data[0].title);
    this.editarticle.get('link').patchValue(data[0].link);
    
    this.modalService.open(editarticlemodal);

  }
  updatedata(){
    this.spinner.show();
    this.firestore.doc('Articles/'+this.dataid).update(this.editarticle.value)
    this.editarticle.reset();
    this.modalService.dismissAll();
    this.spinner.hide();
  }
  fileupdate(content,id:string){
    this.dataid=id;
    this.modalService.open(content)
   
  }
 async updateimage(){
  this.spinner.show();
    var url=await this.uploadImage();
    var data= this.articledata.filter(x=>x.id==this.dataid);

    this.editarticle.get('title').patchValue(data[0].title);
    
    this.editarticle.get('link').patchValue(this.url);
    this.firestore.doc('Articles/'+this.dataid).update(this.editarticle.value)
    this.editarticle.reset();
    this.modalService.dismissAll();
    this.spinner.hide();
  }


  upload(event) {    
    this.filePath = event.target.files[0]
  }
  async uploadImage(){
    console.log(this.filePath)
    var imagevar='/images'+Math.random()+this.filePath;
   var snap= await this.afStorage.upload(imagevar, this.filePath);
    return this.getUrl(snap);
      
  }
  private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
    debugger
    const url = await snap.ref.getDownloadURL();
    this.url = url;  //store the URL
    console.log(this.url);
  }
}
