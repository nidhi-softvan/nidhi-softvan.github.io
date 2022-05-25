import { Component, OnInit } from '@angular/core';


import {userObj} from 'src/app/interface/user'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userList:userObj[];

  constructor() {
    this.userList=[]

  }

  ngOnInit(): void {
    var records=localStorage.getItem('userList');
    console.log(records)
    console.log(typeof(records))


    if(records !==null){
    const listlen=records.length


      this.userList=JSON.parse(records)
      const val=Object.values(records)
      console.log(Object.keys(this.userList))



    }

  }


  delete(id:any){

    console.log(id)
    const oldRecords=localStorage.getItem('userList');
    console.log(oldRecords)
    if(oldRecords!==null){

       const userList=JSON.parse(oldRecords);
       console.log(userList)
      //
      for(let i=0;i<userList.length;i++){
        if(userList[i].userId==id){
          console.log(userList[i].id)
           userList.splice(i,1)
        }
      }
      //

      //  delete userList[id-1]

      // userList.splice(userList.find((a:any)=>a.userId==id),1)



      localStorage.setItem('userList',JSON.stringify(userList))
      localStorage.key(id)




       location.reload()

    // }

  }

}


}
