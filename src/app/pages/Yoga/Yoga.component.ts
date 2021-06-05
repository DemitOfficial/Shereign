import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Admin } from 'src/app/core/models/Admin';
import { Videodata } from 'src/app/core/models/videodata';

@Component({
  selector: 'app-Yoga',
  templateUrl: './Yoga.component.html',
  styleUrls: ['./Yoga.component.scss']
})
export class YogaComponent implements OnInit {

 
  
  
  key:string='rowid';
  reverse:boolean=false;

  p:number=1;
  // Table data
  data:any[]=[];
  url:any;
  filePath:String
yoga:Videodata[]=[];
  public selected: any;
  description:any;
productid:string;
loggedinuser:Admin={}as Admin;
dataid:string;
  selectedValue =5;
  editVideo:FormGroup
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
      this.yoga=next.map(x=>{
        return {
          id:x.payload.doc.id,
          ...x.payload.doc.data()}
      })
      console.log(this.yoga)
   this.yoga.reverse();
   this.spinner.hide()

    },error=>{
      console.log(error);
      this.spinner.hide()
    }
    )
  
    this.editVideo = this.formBuilder.group({
      name: ['', [Validators.required]],
      key: ['', [Validators.required]],
      details: [''],
      
   
    });
  }
  Delete(id:any){
    debugger
    this.spinner.show()
    this.firestore.doc('YogaVideos/'+id).delete();
    this.spinner.hide()
   
  }
  Sort(key){
    debugger;
    this.key=key;
    this.reverse=!this.reverse;
  }
  getdata(){
    return this.firestore.collection('YogaVideos').snapshotChanges();
  }
  adminmodal(content){
    this.modalService.open(content)
  }
  editmodal(content,id:string){
    var data= this.yoga.filter(x=>x.id==id);
    this.dataid=id;
  this.description=data[0].details;
    this.editVideo.get('name').patchValue(data[0].name);
    this.editVideo.get('key').patchValue(data[0].key);
    this.editVideo.get('details').patchValue(data[0].details);
 

    this.modalService.open(content);

  }
  updatedata(){
    this.spinner.show()
    debugger
    console.log(this.editVideo.value)
    var video_id = this.editVideo.value.key.split('v=')[1];
    if(video_id==null){
     var videoid = this.editVideo.value.key.split('.be/')[1];
     if(videoid!=null){
      this.editVideo.get("key").patchValue(videoid);
     }

    }
    else{
     this.editVideo.get("key").patchValue(video_id);
    }
    this.firestore.doc('YogaVideos/'+this.dataid).update(this.editVideo.value)
    this.editVideo.reset();
    this.modalService.dismissAll();
    this.spinner.hide()
  }



 


}
