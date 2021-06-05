import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

import { Observable } from 'rxjs';
import { Admin } from 'src/app/core/models/Admin';
import { Table } from './advanced.model';


@Component({
  selector: 'app-Allproducts',
  templateUrl: './Allproducts.component.html',
  styleUrls: ['./Allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {

  key:string='rowid';
  reverse:boolean=false;
  breadCrumbItems: Array<{}>;
  p:number=1;
  // Table data
  data:any[]=[];
  url:any;
  filePath:String
  tableData: Table[];
  public selected: any;
  description:any;
productid:string;
loggedinuser:Admin={}as Admin;
  userdata:Table[]=[];
  selectedValue =5;

  term: string;

  public isCollapsed = true;
  formBuilder: any;

  // constructor(){

  // }
  constructor(private firestore:AngularFirestore,private modalService:NgbModal,
    private afStorage: AngularFireStorage,private spinner:NgxSpinnerService) {
   
  }
  
  Updateproduct:FormGroup=new FormGroup({
    Title: new FormControl(''),
    Description: new FormControl(''),
    Price:new FormControl(''),
    ImageUrl: new FormControl(''),
    ProductCode: new FormControl(''),
    id: new FormControl(''),
  

 });

  ngOnInit() {
    this.data.push(5,10,25,50,100);
this.loggedinuser=JSON.parse(localStorage.getItem('AdminData')) as Admin;
    this.breadCrumbItems = [{ label: 'Tables' }, { label: 'Datatables', active: true }];
    
    this.fetchproduct();
    
  }
  windowreload(){
    window.location.reload()
  }

  /**
   * fetches the table value
   */
   Sort(key){
    debugger;
    this.key=key;
    this.reverse=!this.reverse;
  }

  
  fetchproduct(){
    this.spinner.show();
    localStorage.removeItem('Productdata');
    this.getProduct().subscribe((next:any)=>{
      debugger
      this.userdata=next.map(x=>{
        return {
          id:x.payload.doc.id,
          ...x.payload.doc.data()}
      })
      console.log(this.userdata)
      localStorage.setItem('Productdata',JSON.stringify(this.userdata))
      this.spinner.hide()
   
    },error=>{
      console.log(error);
      this.spinner.hide()
    }
    )
  }
  getProduct(){
    return this.firestore.collection('Products').snapshotChanges();
  }
  Delete(id:any){
    this.spinner.show();
    debugger
    this.firestore.doc('Products/'+id).delete();
    this.spinner.hide();
   
  }
  scrollModal(scrollDataModal: any,id:string) {
    debugger;
   
   var data=this.userdata.filter(x=>x.id==id);
  this.description=data[0].Description;
  this.productid=data[0].id;
  this.Updateproduct.get('Title').patchValue(data[0].Title);
  this.Updateproduct.get('id').patchValue(data[0].id);
  this.Updateproduct.get('ProductCode').patchValue(data[0].ProductCode);
  this.Updateproduct.get('Price').patchValue(data[0].Price);
  this.Updateproduct.get('ImageUrl').patchValue(data[0].ImageUrl);

 // this.getimage=this.imagebaseurl+data[0].companies.profileImagePath

   this.modalService.open(scrollDataModal, { scrollable: true });
 }
 updateproduct(){
   debugger
var dataaa=this.Updateproduct.value;
delete dataaa.id;
this.spinner.show();
this.firestore.doc('Products/'+this.productid).update(dataaa);
this.modalService.dismissAll();
this.Updateproduct.reset();
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
fileupdate(scrollDataModal: any,id:string){
  this.productid=id;
  this.modalService.open(scrollDataModal, { scrollable: true });
}
async updateimage(){
  debugger
  this.spinner.show();
  var url=await this.uploadImage();
  var data=this.userdata.filter(x=>x.id==this.productid);
debugger
  this.Updateproduct.get('Title').patchValue(data[0].Title);
  this.Updateproduct.get('id').patchValue(data[0].id);
  this.Updateproduct.get('ProductCode').patchValue(data[0].ProductCode);
  this.Updateproduct.get('Price').patchValue(data[0].Price);
  this.Updateproduct.get('ImageUrl').patchValue(this.url);
  this.Updateproduct.get('Description').patchValue(data[0].Description);

   var datsa=this.Updateproduct.value;
   delete datsa.id;
   this.firestore.doc('Products/'+this.productid).update(datsa);
this.modalService.dismissAll();
this.Updateproduct.reset();
this.filePath="";
this.spinner.hide();


}
}
