import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public Editor = ClassicEditor;
  selectedUser = 'userName';
  selectedName = 'chelsea healey';
  selectedImage = './assets/sss.jpg';
  selectedMail = 'King@gmail.com';
  users = [
    {
      name: 'Swappy Kole',
      profileImg: './assets/sss.jpg',
      username: 'swappyKole',
      email: 'swappykole@gmail.com',
    },
    {
      name: 'ben hilfanhaus',
      profileImg: './assets/images.jpg',
      username: 'benhilfanhaus',
      email: 'benhilfanhaus@gmail.com',
    },
    {
      name: 'doug bolinger',
      profileImg: './assets/lll.jpg',
      username: 'dougbolinger',
      email: 'dougbolinger@gmail.com',
    },
    {
      name: 'marnus labuschagne',
      profileImg: './assets/4pp.jpg',
      username: 'marnuslabuschagne',
      email: 'marnuslabuschagne@gmail.com',
    },
    {
      name: 'andi pheklukuwayo',
      profileImg: './assets/Tiny+Avatar.png',
      username: 'andipheklukuwayo',
      email: 'andipheklukuwayo@gmail.com',
    },
    {
      name: 'anrich Nortje',
      profileImg: './assets/images.jpg',
      username: 'anrichNortje',
      email: 'anrichNortje@gmail.com',
    },
  ];

  public onReady(editor: any) {
    console.log('CKEditor5 Angular Component is ready to use!', editor);
  }
  public onChange({ editor }: ChangeEvent) {
    // console.log(data);
  }
  date = new Date();

  SelectUser(user: any) {
    this.selectedName = user.name;
    this.selectedImage = user.profileImg;
    this.selectedUser = user.username;
    this.selectedMail = user.email;
  }
}
