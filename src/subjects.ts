export class Subjects{
    id!:String;
    name!:String;
    duration!:number;
    constructor(id:string,name:string,duration:number){
       this.id=id;
       this.name=name;
       this.duration = duration; 
    }
}