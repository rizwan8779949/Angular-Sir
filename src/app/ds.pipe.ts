import { Pipe } from '@angular/core';

@Pipe({
  name: 'ds'
})
export class DsPipe {
  transform( id: any): any
   {
    for ( let i=0;i<id.length;i++)
    {
    
    if(id[i]>id[i+1])
    {
    let b=id[i+1];
    id[i+1]=id[i];
    id[i]=b;
    }
    }
    for (let i=0;i<id.length;i++){
    return id[i];
    
    }   
  }
}
