import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-btn',
  template: ` <button
    id="theme-btn"
    type="button"
    title="Toggle Color Mode"
    aria-pressed="false"
  ></button>`,
  styleUrls: ['./theme-btn.component.css'],
})
export class ThemeBtnComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
