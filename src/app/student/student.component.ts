import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [
    { name: 'Ettore Esposito', hobby: 'Karate', gender: 'M' },
    { name: 'Giada Valinotto', hobby: 'Paddle', gender: 'F' },
    { name: 'Luca Dellavalle', hobby: 'Poligono', gender: 'M' },
    { name: 'Bianca Teleman', hobby: 'Karate', gender: 'F' },
    { name: 'Paolo Racca', hobby: 'Paddle', gender: 'M' },
    { name: 'Samuele De Toffol', hobby: 'Paddle', gender: 'M' },
    { name: 'Luna Martino', hobby: 'Poligono', gender: 'F' },
    { name: 'Matteo Cela', hobby: 'Karate', gender: 'M' },
    { name: 'Gabriele Leone', hobby: 'Palestra', gender: 'M' },
    { name: 'Martina Velardi', hobby: 'Karate', gender: 'F' },
    { name: 'Marta Baudracco', hobby: 'Paddle', gender: 'F' },
    { name: 'Paolo Giordano', hobby: 'Palestra', gender: 'M' },
  ]

  student: any = {};
  constructor() {
    this.randomStudent();
  }

  private randomStudent() {
    let num = Math.floor(Math.random() * this.studentList.length);
    this.student = this.studentList[num];
  }
  ngOnInit(): void {
  }

  onStudentClick() {
    this.randomStudent();
  }
}
