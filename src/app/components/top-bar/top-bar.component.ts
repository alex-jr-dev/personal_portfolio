import { Component, OnInit } from '@angular/core';
import { CONTACT_LABEL, LINKS, NAME } from 'src/app/constants';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  name = NAME;
  contactMe = CONTACT_LABEL;
  links = LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
