import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Admin } from 'src/app/core/models/Admin';
import { Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-MotherData',
  templateUrl: './MotherData.component.html',
  styleUrls: ['./MotherData.component.scss']
})
export class MotherDataComponent implements OnInit {

  
  key:string='rowid';
  reverse:boolean=false;

  p:number=1;
  // Table data
  data:any[]=[];
  url:any;
  filePath:String
motherdata:Article[]=[];
  public selected: any;
  description:any;
productid:string;
loggedinuser:Admin={}as Admin;
dataid:string;
  selectedValue =5;
  editmotherweekdata:FormGroup
  term: string;
  datadetail:string;

  public isCollapsed = true;
  constructor(private firestore:AngularFirestore,private modalService:NgbModal,
    private afStorage: AngularFireStorage,    private formBuilder: FormBuilder,private spinner:NgxSpinnerService) {
   
  }

  ngOnInit() {
    this.data.push(5,10,25,50,100);
this.loggedinuser=JSON.parse(localStorage.getItem('AdminData')) as Admin;
  this.spinner.show();
    this.getdata().subscribe((next:any)=>{
      debugger
      this.motherdata=next.map(x=>{
        return {
          id:x.payload.doc.id,
          ...x.payload.doc.data()}
      })
      console.log(this.motherdata)
   this.motherdata.reverse();
   this.spinner.hide();
    },error=>{
      console.log(error);
      this.spinner.hide();
    }
    )
  
    this.editmotherweekdata = this.formBuilder.group({
      detail: ['', [Validators.required]],
      heading: ['', [Validators.required]],
      
      image: ['']
   
    });
  }
  Delete(id:any){
    debugger
    this.spinner.show()
    this.firestore.doc('WeekMotherData/'+id).delete();
    this.spinner.hide()
   
  }
  Sort(key){
    debugger;
    this.key=key;
    this.reverse=!this.reverse;
  }
  getdata(){
    return this.firestore.collection('WeekMotherData').snapshotChanges();
  }
  adminmodal(content){
    this.modalService.open(content)
  }
  editmodal(content,id:string){
    var data= this.motherdata.filter(x=>x.id==id);
    this.dataid=id;
    this.datadetail=data[0].detail;
    this.editmotherweekdata.get('detail').patchValue(data[0].detail);
    this.editmotherweekdata.get('heading').patchValue(data[0].heading);
    this.editmotherweekdata.get('image').patchValue(data[0].image);
    this.modalService.open(content);

  }
  updatedata(){
    this.spinner.show()
    this.firestore.doc('WeekMotherData/'+this.dataid).update(this.editmotherweekdata.value)
    this.editmotherweekdata.reset();
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
    var data= this.motherdata.filter(x=>x.id==this.dataid);
    
    this.datadetail=data[0].detail;
    this.editmotherweekdata.get('detail').patchValue(data[0].detail);
    this.editmotherweekdata.get('heading').patchValue(data[0].heading);
    this.editmotherweekdata.get('image').patchValue(this.url);
    this.firestore.doc('WeekMotherData/'+this.dataid).update(this.editmotherweekdata.value)
    this.editmotherweekdata.reset();
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
