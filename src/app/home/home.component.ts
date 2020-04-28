import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventData } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame";
import { isIOS } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'project-name';

  constructor(private page: Page) {

    this.page.on(Page.loadedEvent, event => {
      if (isIOS) {
        let navigationBar = Frame.topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.Black;
      }
    })

  }

  ngOnInit() {
  }
}
