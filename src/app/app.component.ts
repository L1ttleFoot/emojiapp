import { rendererTypeName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'emojiapp';
  
  tabIndex = 'Все' ;

  condition1=true;
  condition2=false;
  condition3=false;

  ChangePage(text){
    this.tabIndex = text;
    document.getElementById("TITLE").innerHTML = text;

    if(text=='Все'){

      this.condition1=true;
      this.condition2=false;
      this.condition3=false;

    }

    else if(text=='Любимые'){

      this.condition1=false;
      this.condition2=true;
      this.condition3=false;

    }

    else if (text=='Удаленные'){

      this.condition1=false;
      this.condition2=false;
      this.condition3=true;

    }
  }
}