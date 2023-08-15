import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.scss']
})
export class AppDetailComponent implements OnInit {
  @Input() item = "";
  @Output() newItemEvent = new EventEmitter<string>();
  isVisible: boolean = true;
  friendslist = [
    {
      name: 'Salman',
      age: 25
    },
    {
      name: 'Ishfaq',
      age: 45
    },
    {
      name: 'Junaid',
      age: 36
    },
    {
      name: 'Talha',
      age: 65
    },
    {
      name: 'Hammad',
      age: 12
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  hideShowList() {
    if (this.isVisible) {
      this.isVisible = false;
    }
    else {
      this.isVisible = true;
    }
  }
  addNewItem(item: string): void {
    this.newItemEvent.emit(item);
  }

}
