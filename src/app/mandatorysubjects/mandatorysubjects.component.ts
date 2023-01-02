import { Component } from '@angular/core';
import { RestService } from 'src/rest.service';
import { Subjects } from 'src/subjects';

@Component({
  selector: 'app-mandatorysubjects',
  templateUrl: './mandatorysubjects.component.html',
  styleUrls: ['./mandatorysubjects.component.css']
})
export class MandatorysubjectsComponent {
subjects:Subjects[]=[];
name:any;
page:number = 1;
constructor(public service :RestService){

}
ngOnInit():void{
  this.service.getSubjects().subscribe((response)=>{
    this.subjects=response;
  })
}
Search(){
  if(this.name == ''){
    this.ngOnInit();
  }else{
    this.subjects = this.subjects.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}
key:string ='id';
reverse:boolean = false;
sort(key:string){
this.key =key;
this.reverse=!this.reverse;
}
}
