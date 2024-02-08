import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {
  selectValue : string | null | undefined;

  onConfirm() {
    console.log(this.selectValue);
  }
}
