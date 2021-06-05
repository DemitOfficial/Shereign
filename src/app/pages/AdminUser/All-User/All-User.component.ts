import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Admin } from 'src/app/core/models/Admin';

@Component({
  selector: 'app-All-User',
  templateUrl: './All-User.component.html',
  styleUrls: ['./All-User.component.scss']
})
export class AllUserComponent implements OnInit {
  AdminData:Admin[]=[];
  singleAdmin:Admin={} as Admin;
  
  key:string='rowid';
  reverse:boolean=false;
  breadCrumbItems: Array<{}>;
  p:number=1;
  // Table data
  data:any[]=[];
  url:any;
  filePath:String

  public selected: any;


loggedinuser:Admin={}as Admin;
 
  selectedValue =5;

  term: string;

  public isCollapsed = true;
  constructor(private modalService:NgbModal,private firestore:AngularFirestore,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    debugger
    this.data.push(5,10,25,50,100);
    this.spinner.show()
    this.getusers().subscribe((next:any)=>{
     debugger
     this.AdminData=next.map(x=>{
       return {
         id:x.payload.doc.id,
         ...x.payload.doc.data()}
     })
     console.log(this.AdminData)
     this.spinner.hide()
     //localStorage.setItem('userdata',JSON.stringify(this.userdata))
  
   },error=>{
     console.log(error);
   }
   )
  }
  getusers(){
    return this.firestore.collection('Admin').snapshotChanges();
  }
  UpdateAdminuser(){
    this.spinner.show()
    var data=this.singleAdmin
delete data.id;
this.firestore.doc('Admin/'+this.singleAdmin.id).update(data);
this.spinner.hide()
  }
  deleteAdmin(id:any){
    this.spinner.show()
    this.firestore.doc('Admin/'+id).delete();
    this.spinner.hide()
  }
  Sort(key){
    debugger;
    this.key=key;
    this.reverse=!this.reverse;
  }
  adminmodal(content){
    this.modalService.open(content)
  }
}
