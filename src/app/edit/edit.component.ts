import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSerializer } from '@angular/router';
import { userObj } from '../interface/user';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent implements OnInit {

  userObj:userObj = new userObj()
  userName: any;
  userId:any
  constructor(private route:ActivatedRoute,private router:Router) {

    // this.route.queryParams.subscribe((id)=>{

    //   console.log(id)
    // })
  }

  ngOnInit(): void {

    this.userName = this.route.snapshot.params['userName'];
    this.userId=this.route.snapshot.params['userId']
    console.log(this.userId)
    console.log(this.userName);

    const oldRecords=localStorage.getItem('userList');
    if(oldRecords!==null){
      const userList=JSON.parse(oldRecords);
      console.log(oldRecords)
      const currentUser=userList.find((m:any)=>m.userId==this.userId && m.userName==this.userName)

      if(currentUser!==undefined){
        this.userObj = currentUser
        console.log(currentUser);

      }
    }
  }


  editUser(){
    console.log('editing..')
    const oldRecords=localStorage.getItem('userList');
    if(oldRecords!==null){
       const userList=JSON.parse(oldRecords);
      //
      for(let i=0;i<userList.length;i++){
        if(userList[i].userId==this.userObj.userId){
          console.log(userList[i].userId)
          console.log(this.userObj.userId)
          console.log(this.userObj.userName)
          console.log(this.userObj.userEmail)

           userList[i]=this.userObj
        }
      }
      //
      //  userList.splice(userList.find((a:any)=> a.userName==this.userName),1)
      //  userList.push(this.userObj)
       localStorage.setItem('userList',JSON.stringify(userList))

}

    this.router.navigateByUrl('/list')

    
  }



}
