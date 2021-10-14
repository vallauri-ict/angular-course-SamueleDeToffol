import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [
    { name: 'Ettore Esposito', hobby: 'Karate', gender: 'M', isPro: false },
    { name: 'Giada Valinotto', hobby: 'Paddle', gender: 'F', isPro: true },
    { name: 'Luca Dellavalle', hobby: 'Poligono', gender: 'M', isPro: true },
    { name: 'Bianca Teleman', hobby: 'Karate', gender: 'F', isPro: true },
    { name: 'Paolo Racca', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Samuele De Toffol', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Luna Martino', hobby: 'Poligono', gender: 'F', isPro: true },
    { name: 'Matteo Cela', hobby: 'Karate', gender: 'M', isPro: true },
    { name: 'Gabriele Leone', hobby: 'Palestra', gender: 'M', isPro: false },
    { name: 'Martina Velardi', hobby: 'Karate', gender: 'F', isPro: false },
    { name: 'Marta Baudracco', hobby: 'Paddle', gender: 'F', isPro: false },
    { name: 'Paolo Giordano', hobby: 'Palestra', gender: 'M', isPro: true },
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
