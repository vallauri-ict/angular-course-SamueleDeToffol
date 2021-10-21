import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '5 INF B 2021/22';

  hobbies = ['Karate', 'Paddle', 'Volley', 'Tennis', 'Soccer'];

  @ViewChild('txtName') txtName!: ElementRef

  constructor() {
    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * this.studentRepository.length);
      let tempStudent = this.studentRepository[num];
      this.studentList.push(tempStudent);
      this.studentRepository.splice(num, 1);
    }
  }


  studentRepository = [
    { name: 'Ettore Esposito', hobby: 'Karate', gender: 'M', isPro: false },
    { name: 'Giada Valinotto', hobby: 'Paddle', gender: 'F', isPro: false },
    { name: 'Luca Dellavalle', hobby: 'Poligono', gender: 'M', isPro: false },
    { name: 'Bianca Teleman', hobby: 'Karate', gender: 'F', isPro: false },
    { name: 'Paolo Racca', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Samuele De Toffol', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Luna Martino', hobby: 'Poligono', gender: 'F', isPro: false },
    { name: 'Matteo Cela', hobby: 'Karate', gender: 'M', isPro: false },
    { name: 'Gabriele Leone', hobby: 'Palestra', gender: 'M', isPro: false },
    { name: 'Martina Velardi', hobby: 'Karate', gender: 'F', isPro: false },
    { name: 'Marta Baudracco', hobby: 'Paddle', gender: 'F', isPro: false },
    { name: 'Paolo Giordano', hobby: 'Palestra', gender: 'M', isPro: false },
  ]

  studentList: any[] = [];

  studentName: string = "";
  studentGender: string = "F";
  studentHobby: string = "";

  onAddStudent() {
    let newStudent = { name: this.studentName, hobby: this.studentHobby, gender: this.studentGender, isPro: false };
    this.studentRepository.push(newStudent);
    this.studentName = "";
    this.txtName.nativeElement.focus();
  }
}
