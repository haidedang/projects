import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
/**
 * User Component wird über <app-user> tag referenziert und template wird mit Logik geladen
 */
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age: number;
  email: string;
  adress: Adress;
  hobbies:string[];
  posts: Post[];

  constructor(private dataService:DataService) { }

  /**
   * Objekt wird bei ng serve initialisiert und erstellt praktisch eine Objektinstanz
   * Methoden die darin definiert werden, können vom HTML Template aufgerufen werden
   */

  ngOnInit() {
    this.name = 'John Doe';
    this.age= 30;
    this.adress= {
      street: '',
      city:'bistin',
      state:''
    }
    this.hobbies = ['write Code', 'watch movies', 'Listen to music']
    this.dataService.getPosts().subscribe((posts) =>{
    this.posts = posts;     } )
  }

  onClick(){
    this.name = "Face";
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteEntry(hobby){
    for(let i= 0; i< this.hobbies.length;i++){
      if (hobby == this.hobbies[i]) {
          this.hobbies.splice(i,1);
      }
    }

  }

  example(x){
    console.log(x);
  }

}

/**
 *  interface ist überall verfügbar, noch nicht klar wie andere Files darauf zugreifen
 */

interface Adress{
  street: string,
  city: string,
  state: string
}

interface Post{
  id: number,
  title: string,
  body: string,
  breakuserId:number
}
