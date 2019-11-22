import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateParserFormatter,NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
 
import { PickerModel } from '../../models/picker.model';

/// implementado el filtro formateador de fechas
import { NgbDateCustomParserFormatter } from './dateformat.component';
import { I18n, CustomDatepickerI18n } from './dateidioma.component';

@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html',
  providers: [ /// implementado el filtro formateador de fechas
      I18n, 
      {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n},
      {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
     ] // define custom NgbDatepickerI18n provider
})
export class DatepickerPopupComponent implements OnInit {
  
  pickerModel:PickerModel;
  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
    this.pickerModel = new PickerModel();
    // this.picker.day = 19;
    // this.picker.month = 11;
    // this.picker.year = 2019;

    this.pickerModel = this.calendar.getToday();
    // console.log(this.model)
 
  }

}



 