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

    ngOnInit(): void {
    }

    // copyEmoji(id) {
    //     console.log('clicked');
    //     var button = document.getElementById(id) as HTMLButtonElement;
    //     let unicode = button.textContent;

    //     const el = document.createElement('textarea');
    //     el.value = unicode;
    //     document.body.appendChild(el);
    //     el.select();
    //     document.execCommand('copy');
    //     document.body.removeChild(el);
    // }

    openTab(cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
    }
}
