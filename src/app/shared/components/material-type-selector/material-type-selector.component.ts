import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'material-type-selector',
  templateUrl: './material-type-selector.component.html',
  styleUrl: './material-type-selector.component.scss'
})
export class MaterialTypeSelectorComponent {

  @Input()
  value : string | null | undefined;
  
  @Output()
  valueChange = new EventEmitter<string>();

  onSelectValue(event:MatSelectChange){
    this.valueChange.emit(event.value);
  }
}
