import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators  } from '@angular/forms';
import { NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

  validateForm!: FormGroup;

  listOfData: any = [
    {
      key: 'A',
      name: 'A'
    },
    {
      key: 'B',
      name: 'B'
    },
    {
      key: 'C',
      name: 'C'
    },
    {
      key: 'D',
      name: 'D'
    },
    {
      key: 'E',
      name: 'E'
    },
    {
      key: 'F',
      name: 'F'
    },
    {
      key: 'G',
      name: 'G'
    },
    {
      key: 'H',
      name: 'H'
    },
    {
      key: 'I',
      name: 'I'
    }
  ];

  submitForm(): void {
    console.log("validando campos de departamentos")
    console.log(this.validateForm.value);
  }
  constructor(private _fb: FormBuilder,
    private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
    this.validateForm = this._fb.group({
      name: ['', [Validators.required]],
      clave: ['', [Validators.required]],
      turnos: this._fb.array([]),
      // comment: ['', [Validators.required]]
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
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }

}
