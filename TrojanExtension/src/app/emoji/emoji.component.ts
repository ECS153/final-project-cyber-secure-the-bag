import { Component, OnInit } from '@angular/core';

import { emojis } from './emoji';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})

export class EmojiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emojis = emojis;

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
