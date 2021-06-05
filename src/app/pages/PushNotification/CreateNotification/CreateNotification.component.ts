import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { AngularFireMessaging } from '@angular/fire/messaging';
@Component({
  selector: 'app-CreateNotification',
  templateUrl: './CreateNotification.component.html',
  styleUrls: ['./CreateNotification.component.scss']
})

export class CreateNotificationComponent implements OnInit {

  _token:string="DemitTalha";
  uniquemessageid;
  title:string="";
  text:string="";
  type:string="Notification";
  senderid:string="";
  senderimage:string="";
  constructor(private http: HttpClient,private angularFirebaseMessaging: AngularFireMessaging) { }

   ngOnInit() {
    //this.requestPerm('demitofficial@gmail.com')

  }
   sendPushMessage() {
    this.createuniqueid()
    if (this._token == null) {
      console.log('Unable to send FCM message, no token exists.');
      return;
    }
const body=  this.constructFCMPayload(
  
    '/topics/'+this._token
)
    console.log(this._token);
    try {
 
var headers_object = new HttpHeaders({
  'Content-Type': 'application/json; charset=UTF-8',
  
   'Authorization': 'key=AAAAJGLsGqo:APA91bGJ6iXUrd5AfVq9zXH6i7PDQ_JW9KpLBhRyk4PQUInUHafTpq2jm9HzwtTBSKqg19Eop3qiJbRUYOj1txusAVE3z51PGbt32T5lVuFYAQzNPSEcPeMFVKs7l-HQHRpXsDmTeHvZ',
   
});
var header = {
  headers: new HttpHeaders()
    .set('Authorization',  'key=AAAAJGLsGqo:APA91bGJ6iXUrd5AfVq9zXH6i7PDQ_JW9KpLBhRyk4PQUInUHafTpq2jm9HzwtTBSKqg19Eop3qiJbRUYOj1txusAVE3z51PGbt32T5lVuFYAQzNPSEcPeMFVKs7l-HQHRpXsDmTeHvZ'),
    body:body
}
      const httpOptions = {
        headers: headers_object,

      };
      debugger
      
     return  this.http.post('https://fcm.googleapis.com/fcm/send',body,httpOptions)
  

    } catch (e) {
      console.log(e);
    }
  }

  /// The API endpoint here accepts a raw FCM payload for demonstration purposes.
   constructFCMPayload(token:string) {
    debugger;
  
console.log(this.uniquemessageid)
    return JSON.stringify({
      'to': token,
      'data': {
        'via': 'She Reign',
        'count': this.uniquemessageid,
        'title': this.title,
        'body': this.text,
        'type' : this.type,
        'senderid' : this.senderid,
        'senderimage' : this.senderimage
      },
      'notification': {
        'title': this.title,
        'body': this.text,
      },
    }) ;
  }
  createuniqueid(){
    var number1= Math.floor(Math.random() * (9999999999999 - 10000 + 1) + 10000);
    debugger;

 var txt=Math.random().toString(36).substring(2, 15) +
       Math.random().toString(36).substring(2, 15)
       var data=number1+this.text;
       this.uniquemessageid = data.split('').sort(function(){return 0.5-Math.random()}).join('');
  }
  send(){
    debugger;
    console.log(this.title+this.text)
    this.sendPushMessage().subscribe((next:any)=>{
      debugger;
      this.title="";
      this.text="";
console.log(next)
    })
  }
  requestPerm(userName){
    debugger
    this.angularFirebaseMessaging.requestToken.subscribe((token:any)=>{
        console.log(token);
        this._token=token;
        localStorage.setItem('token',token)
    },
    (err)=>
    {
        console.error("No Permission "+ err);
    })
}
}

