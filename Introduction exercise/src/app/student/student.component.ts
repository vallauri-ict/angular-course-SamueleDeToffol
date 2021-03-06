import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: any = {};

  constructor() {
  }

  private randomStudentPro() {
    let num = Math.floor(Math.random() * 2);
    if (num == 1) {
      this.student.isPro = true;
    }
  }
  ngOnInit(): void {
    this.randomStudentPro();
  }


  onStudentClick() {
    this.student.isPro = !this.student.isPro;
  }
}
