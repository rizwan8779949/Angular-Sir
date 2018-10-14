import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emd:any;
  selectedEmployeeCountRadioButton:string='all';
  constructor(){
    this.emd=[
      {id:"84516",name:"vikas",city:"Delhi",dept:"it",dob:"10/07/1997"},
    {id:"44646",name:"rohit",city:"Mumbai",dept:"cs",dob:"04/09/1999"},
    {id:"4648",name:"mohan",city:"Surat",dept:"bpo",dob:"09/19/1956"},
    {id:"78496",name:"raju",city:"Raipur",dept:"it",dob:"08/06/1986"},
    {id:"4646",name:"rajeev",city:"Alipur",dept:"cs",dob:"04/09/1974"},
    {id:"6466",name:"rahim",city:"Noida",dept:"bpo",dob:"03/01/1946"},
    {id:"8748",name:"vivek",city:"Rohini",dept:"back",dob:"04/09/1915"},
    {id:"9876",name:"harender",city:"Sainik",dept:"cs",dob:"10/02/1941"},
    {id:"6546",name:"narender",city:"Pune",dept:"it",dob:"08/08/1942"},
    {id:"7845",name:"prashant",city:"Ramgarh",dept:"bpo",dob:"12/06/1959"},
    {id:"3132",name:"Rohan",city:"Laxman",dept:"cs",dob:"12/09/1952"},
    {id:"7436",name:"Jaspreet",city:"Bharat",dept:"it",dob:"10/12/1950"},
    {id:"4698",name:"rohan",city:"ajmer",dept:"bpo",dob:"02/02/1947"},
    {id:"3659",name:"golu",city:"manali",dept:"it",dob:"04/04/1948"},
    {id:"4987",name:"goku",city:"meerut",dept:"cs",dob:"09/09/1943"},
    {id:"1659",name:"roshan",city:"kanpur",dept:"bpo",dob:"09/08/1949"},
    {id:"3698",name:"lalit",city:"lucknow",dept:"it",dob:"08/12/1969"},
    {id:"1648",name:"rehman",city:"khurja",dept:"cs",dob:"06/10/1948"},
    {id:"1985",name:"harpreet",city:"chapra",dept:"bpo",dob:"02/08/1957"},
    {id:"1489",name:"kumarsing",city:"kannauj",dept:"it",dob:"01/07/1959"}
  ];  }
  onEmployeeSelectedRadioButtonChanged(selectedRadioButtonValue:string):void{
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
  filter:any;
  list:any;
  d:string;
  ge:any;
  public s():void {
    this.filter=[];
    for(let i=0;i<this.emd.length;i++)
    {
      let obj=this.emd[i];
      if(!this.d||obj.city.toLowerCase().indexOf(this.d.toLowerCase())!=-1)
      {
        this.filter.push(obj);
      }
    }
  }
  
  /*total():number{
    return this.emd.length;
  }
  findIt():number{
   return this.emd.filter(e=>e.dept === 'it').length;
 }
 foundCs():number{
   return this.emd.filter(e=>e.dept === 'cs').length;
 }
searchBpo():number{
  return this.emd.filter(e=>e.dept === 'bpo').length;
 }*/
}

