import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task';

  select: any;
  myFunction() {
    let element = document.body;
    element.classList.toggle('dark');
    console.log('button clicked', element);

    // this.select = document.getElementById('abhi');
    // this.select.innerText = 'change to white';
    // this.select.style.backgroundColor = 'white';
    // this.select.style.color = 'black';
    // console.log(this.select);
  }
}
