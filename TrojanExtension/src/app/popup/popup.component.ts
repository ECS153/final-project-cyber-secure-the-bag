import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Key } from 'ts-keycode-enum';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  copyEmoji(id : string) {
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

  searchEmoji() {
    var searchEmoji = document.getElementById('searchedEmoji') as HTMLButtonElement;
    searchEmoji.style.visibility = "visible";
    
    var searchTextbox = document.getElementById('searchTextbox') as HTMLInputElement;
    var searchQuery = searchTextbox.value;

    if (searchQuery == 'smile')
      searchEmoji.textContent = "😀";
    else if (searchQuery == 'wink')
      searchEmoji.textContent = "😉";
    else {
      searchEmoji.textContent = "";
      searchEmoji.style.visibility = "hidden";
    }    
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.which === Key.Enter) {
      this.searchEmoji();
    }
  }
}
