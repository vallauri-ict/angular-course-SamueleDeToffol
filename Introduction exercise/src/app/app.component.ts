import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '5 INF B 2021/22';

  studentList = [
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
}
