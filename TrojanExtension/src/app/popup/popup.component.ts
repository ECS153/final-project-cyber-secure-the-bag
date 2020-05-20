import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  copyEmoji(id) {
    console.log('clicked');

    var button = document.getElementById(id) as HTMLButtonElement;
    let unicode = button.textContent;

    const el = document.createElement('textarea');
    el.value = unicode;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
