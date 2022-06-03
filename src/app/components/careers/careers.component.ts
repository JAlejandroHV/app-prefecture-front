import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators  } from '@angular/forms';
import { NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  validateForm!: FormGroup;

  listOfData: any = [
    {
      key: '110600',
      name: 'INGENIERIA ELECTRICA'
    },
    {
      key: '110200',
      name: 'INGENIERIA ELECTRONICA'
    },
    {
      key: '110700',
      name: 'INGENIERIA EN INFORMATICA'
    },
    {
      key: '110300',
      name: 'INGENIERIA EN GESTION EMPRESARIAL'
    },
    {
      key: '110500',
      name: 'INGENIERIA EN SISTEMAS COMPUTACIONALES'
    },
    {
      key: '110100',
      name: 'INGENIERIA INDUSTRIAL'
    },
    {
      key: '110100',
      name: 'INGENIERIA MECATRONICA'
    },
    {
      key: '110100',
      name: 'INGENIERIA EN ADMINISTRACION'
    },
    {
      key: '110100',
      name: 'INGENIERIA EN TURISMO'
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
