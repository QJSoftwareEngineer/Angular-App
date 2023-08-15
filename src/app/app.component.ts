import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular-App';
  isUnchanged: boolean;
  isEvent: boolean;
  actionName: string;
  isSpecial: boolean;
  currentStyles: any;
  username: string;
  showMe: boolean;
  isActive: boolean;
  currentItem = 'Television';
  /**
   *
   */
  constructor() {
    this.isUnchanged = true;
    this.isEvent = false;
    this.actionName = "Attribute Binding";
    this.isSpecial = false;
    this.username = "Qasim Jalal";
    this.showMe = false;
    this.isActive = false;

  }

  onClick() {
    this.isEvent = true;
    this.isSpecial = true;
    this.currentStyles = {
      'font-style': this.isSpecial ? 'italic' : 'normal',
      'font-weight': this.isSpecial ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    }
  }
  clearForm() {
    this.username = "";
  }
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
