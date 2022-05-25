import { Component, OnInit } from '@angular/core';
// import { NzDrawerModule } from 'ng-zorro-antd/drawer';

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators  } from '@angular/forms';
import { NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  validateForm!: FormGroup;

  listOfData: any = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  submitForm(): void {
    console.log(this.validateForm.value);
  }
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this._fb.group({
      // datePicker: [null],
      // datePickerTime: [null],
      // monthPicker: [null],
      // rangePicker: [[]],
      // rangePickerTime: [[]],
      // timePicker: [null]
      name: ['', [Validators.required], [this.userNameAsyncValidator]],
      clave: ['', [Validators.required, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      comment: ['', [Validators.required]]
    });

  }
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }



  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  validateConfirmPassword(): void {
    // setTimeout(() => this.validateForm.controls.controls.updateValueAndValidity);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        console.log("valida name ")
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    }
    // } else if (control.value !== this.validateForm.controls.password.value) {
    //   return { confirm: true, error: true };
    // }
    return {};
  };

}
