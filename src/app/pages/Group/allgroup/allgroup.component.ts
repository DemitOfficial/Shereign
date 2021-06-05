import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Admin } from 'src/app/core/models/Admin';
import { Article } from 'src/app/core/models/article';
import { Group } from 'src/app/core/models/Group';

@Component({
  selector: 'app-allgroup',
  templateUrl: './allgroup.component.html',
  styleUrls: ['./allgroup.component.scss']
})
export class AllgroupComponent implements OnInit {

  
  
  key:string='rowid';
  reverse:boolean=false;

  p:number=1;
  // Table data
  data:any[]=[];
  url:any;
  filePath:String
GroupData:Group[]=[];
  public selected: any;
  description:any;
productid:string;
loggedinuser:Admin={}as Admin;
dataid:string;
  selectedValue =5;
  editGroupdata:FormGroup
  term: string;
  datadetail:string;
  color:any

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
      this.GroupData=next.map(x=>{
        return {
          fid:x.payload.doc.id,
          ...x.payload.doc.data()}
      })
      console.log(this.GroupData)
   this.GroupData.reverse();
   this.spinner.hide()

    },error=>{
      console.log(error);
      this.spinner.hide()
    }
    )
  
    this.editGroupdata = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      id: [''],
      image: [''],
      coverimage: [''],
      color: ['']
   
    });
  }
  Delete(fid:any){
    debugger
    this.spinner.show()
    this.firestore.doc('Groups/'+fid).delete();
    this.spinner.hide()
   
  }
  Sort(key){
    debugger;
    this.key=key;
    this.reverse=!this.reverse;
  }
  getdata(){
    return this.firestore.collection('Groups').snapshotChanges();
  }
  adminmodal(content){
    this.modalService.open(content)
  }
  editmodal(content,id:string){
    var data= this.GroupData.filter(x=>x.fid==id);
    this.dataid=id;
  this.description=data[0].description;
    this.editGroupdata.get('title').patchValue(data[0].title);
    this.editGroupdata.get('description').patchValue(data[0].description);
    this.editGroupdata.get('image').patchValue(data[0].image);
    this.editGroupdata.get('coverimage').patchValue(data[0].coverimage);
    this.editGroupdata.get('color').patchValue(data[0].color);

    this.modalService.open(content);

  }
  updatedata(){
    this.spinner.show()
    debugger
    console.log(this.editGroupdata.value)
    this.firestore.doc('Groups/'+this.dataid).update(this.editGroupdata.value)
    this.editGroupdata.reset();
    this.modalService.dismissAll();
    this.spinner.hide()
  }
  fileupdate(content,id:string){
    this.dataid=id;
    this.modalService.open(content)
   
  }
 async updateimage(){
  this.spinner.show()
    var url=await this.uploadImage();
    var data= this.GroupData.filter(x=>x.fid==this.dataid);
  
    this.editGroupdata.get('title').patchValue(data[0].title);
    this.editGroupdata.get('description').patchValue(data[0].description);
    this.editGroupdata.get('image').patchValue(data[0].image);
    this.editGroupdata.get('coverimage').patchValue(data[0].coverimage);
    this.editGroupdata.get('color').patchValue(data[0].color);
    this.editGroupdata.get('image').patchValue(this.url);
    this.firestore.doc('Groups/'+this.dataid).update(this.editGroupdata.value)
    this.editGroupdata.reset();
    this.modalService.dismissAll();
    this.spinner.hide()
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
