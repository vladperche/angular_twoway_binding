import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {
  selectValue : string | null | undefined;

  constructor(
    private snackBar : MatSnackBar
  ) 
  {
  }

  ngOnInit(): void 
  {
  }

  onConfirm() 
  {
    this.snackBar.open(`Selected value: ${this.selectValue}`);
  }

  onClear(){
    this.selectValue = null;
  }
}
