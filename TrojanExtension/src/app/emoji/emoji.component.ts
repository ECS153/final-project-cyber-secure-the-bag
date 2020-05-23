import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Key } from 'ts-keycode-enum';

import { emojis } from './emoji';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})

export class EmojiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  emojis = emojis;
  lastSearchedEmoji = '';

  copyEmoji(id : string) {
    if (id == "searchedEmoji") {
      id = this.lastSearchedEmoji;
    }
    var button = document.getElementById(id) as HTMLButtonElement;
    let unicode = button.textContent;

    const el = document.createElement('textarea');
    el.value = unicode;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  searchEmoji() {
    var searchEmoji = document.getElementById('searchedEmoji') as HTMLButtonElement;
    var searchTextbox = document.getElementById('searchTextbox') as HTMLInputElement;
    var searchQuery = searchTextbox.value.toLowerCase();

    var foundEmoji = false;
    emojis.forEach(emoji => {
      if (!foundEmoji && searchQuery == emoji.name.toLowerCase()) {
        foundEmoji = true;
        searchEmoji.style.visibility = "visible";
        searchEmoji.disabled = false;
        searchEmoji.textContent = emoji.icon;
        this.lastSearchedEmoji = emoji.name;
      }
    })

    if (!foundEmoji) {
      searchEmoji.textContent = "";
      searchEmoji.disabled = true;
      searchEmoji.style.visibility = "hidden";
    };
    
    searchTextbox.value = null;
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.which === Key.Enter) {
      this.searchEmoji();
    }
  }

}
