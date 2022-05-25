import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { userObj } from '../interface/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userObj:userObj
  uuidValue:string="";
  constructor(private router:Router) {
    this.userObj=new userObj()

  }

  ngOnInit(): void {
  }


  gid(){
    return '_' +Math.random().toString(36).substring(2,9)
  }
  // getNewUserId(){

  //   const oldRecords=localStorage.getItem('userList');
  //   if(oldRecords!==null){
  //     const userList=JSON.parse(oldRecords);
  //     return userList.length+1
  //   }else{
  //     return 1
  //   }
  // }
  saveUser(){

    const latestId=this.gid();
    console.log(latestId)
    this.userObj.userId=latestId;
    console.log(latestId)
    const oldRecords=localStorage.getItem('userList');
    if(oldRecords!==null){
       const userList=JSON.parse(oldRecords);
       userList.push(this.userObj);
       localStorage.setItem('userList',JSON.stringify(userList))
    }else{
      const userArr=[];
      userArr.push(this.userObj)
      localStorage.setItem('userList',JSON.stringify(userArr))
      location.reload()
    }
    // this.router.navigateByUrl('/list')
  }
  onSubmit(){
    location.reload()
    alert("added !");
    this.userObj.userName="";
    this.userObj.userAdd="";
    this.userObj.userEmail="";
    this.userObj.userPass="";


  }
}
