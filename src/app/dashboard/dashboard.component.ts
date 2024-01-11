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
  names: any = {
    name1: 'Swappy Kole',
    name2: 'ben hilfanhaus',
    name3: 'doug bolinger',
    name4: 'marnus labuschagne',
    name5: 'andi pheklukuwayo',
    name6: 'anrich Nortje',
  };
  images: any = {
    img1: './assets/sss.jpg',
    img2: './assets/images.jpg',
    img3: './assets/lll.jpg',
    img4: './assets/4pp.jpg',
    img5: './assets/Tiny+Avatar.png',
  };
  username: any = {
    user1: 'SwappyKole',
    user2: 'ben hilfanhaus',
    user3: 'dougbolinger',
    user4: 'marnuslabuschagne',
    user5: 'andipheklukuwayo',
    user6: 'anrichNortje',
  };
  public onReady(editor: any) {
    console.log('CKEditor5 Angular Component is ready to use!', editor);
  }
  public onChange({ editor }: ChangeEvent) {
    // console.log(data);
  }
  date = new Date();

  selectName(name: any, image: any, user: any) {
    this.selectedName = name;
    this.selectedImage = image;
    this.selectedUser = user;
  }
}
