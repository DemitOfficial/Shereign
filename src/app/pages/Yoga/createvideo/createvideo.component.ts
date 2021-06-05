import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-createvideo',
  templateUrl: './createvideo.component.html',
  styleUrls: ['./createvideo.component.scss']
})
export class CreatevideoComponent implements OnInit {
  createVideo:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public afs: AngularFirestore,
    private modalService:NgbModal ,
    private spinner:NgxSpinnerService 
  ) { }

  ngOnInit() {
    this.createVideo = this.formBuilder.group({
      name: ['', [Validators.required]],
      key: ['', [Validators.required]],
      details: [''],
      
   
    });
  }

  async Submitdata(){
    this.spinner.show()
debugger;
   


    var video_id = this.createVideo.value.key.split('v=')[1];
   if(video_id==null){
    var videoid = this.createVideo.value.key.split('.be/')[1];
    this.createVideo.get("key").patchValue(videoid);
   }
   else{
    this.createVideo.get("key").patchValue(video_id);
   }
  
    this.afs.collection("YogaVideos").add(this.createVideo.value);

    this.createVideo.reset();
    this.modalService.dismissAll();
    this.spinner.hide()


  }
}
