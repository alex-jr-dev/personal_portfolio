import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar-links',
  templateUrl: './top-bar-links.component.html',
  styleUrls: ['./top-bar-links.component.scss']
})
export class TopBarLinksComponent implements OnInit {
  @Input() links: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
