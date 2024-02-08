# AngularTwowayAttribute

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

# Porpouse of this project

The main porpouse of this project is to show how to create a reusable component with a TwoWai binding attribute to receive and/or send some value to the parent component.

# Create a shareable component

First, generate the component, typing this on terminal:
```
ng generate component shared/components/MaterialTypeSelector
```

## Create the attribute to communicate with the parent component

In the file `material-type-selector.component.ts` add the following:

```
export class MaterialTypeSelectorComponent {

  @Input()
  value : string | null | undefined;
  
  @Output()
  valueChange = new EventEmitter<string>();

  onValueChage(event:MatSelectChange){
    this.valueChange.emit(event.value);
  }
}
```

## Create the visual of the component

In the file `material-type-selector-component.html` make the visual of your component, for example:

```
<mat-form-field>
    <mat-label>Tipo de material</mat-label>
    <mat-select (selectionChange)="onValueChage($event)">
        <mat-option value="HAWA">Matéria Prima</mat-option>
        <mat-option value="WIP">Semi-Acabado</mat-option>
        <mat-option value="PROD">Produção própria</mat-option>
        <mat-option value="SELL">Revenda</mat-option>
    </mat-select>
</mat-form-field>
```

## Create another page to use the new component

Generate the page component, to reuse the previous component, typing this on terminal:
```
ng generate component crud
```

## Create the attribute of the page

In the file `crud.component.ts` create the attribute to set/get the value from the child component:

```
export class CrudComponent {
  selectValue : string | null | undefined;

  onConfirm() {
    console.log(this.selectValue);
  }
}
```

## Create the visual of the parent component

In the file `crud.component.html` create the visual of the new parent's page:

```
<p>crud works!</p>

<material-type-selector [(value)]="selectValue"></material-type-selector>
<button mat-raised-button (click)="onConfirm()">Confirm</button>

<p>The selected value will be show on the console</p>
```

# Build and Run

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
