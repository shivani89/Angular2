import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  links:Array<String>;

  constructor() { 

    this.links=["home","about","signup","login"];
  }

  ngOnInit() {
  }
  
}



