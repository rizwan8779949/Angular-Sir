import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-dk',
  templateUrl: './dk.component.html',
  styleUrls: ['./dk.component.css']
})
export class DkComponent {

 /* @Input()
  all:number;
  @Input()
  it:number;
  @Input()
  cs:number;
  @Input()
  bpo:number;*/
  selectedRadioButtonValue: string='all';
  @Output()
  countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();
  
onRadioButtonSelectionChanged()
{
  this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);

}

}
