import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items = ['News', 'Contacts', 'Company'];
  public index: number = -1;
  public currentItem: string = 'Please select...';
  public focusedItem!: string;
  public isOpened: boolean = false;

  public open() {
    this.isOpened = !this.isOpened;
  }

  public selectItem(item: string): void {
    this.currentItem = item;
  }

  public selectIndex(step: number) {
    if (!this.isOpened) {
      return;
    }
    this.index += step;
    if (this.index < 0 || this.index >= this.items.length) {
      this.index = this.index < 0 ? this.items.length - 1 : 0;
    }
    this.focusedItem = this.items[this.index];
  }

  public selectItemEnter(): void {
    this.currentItem = this.focusedItem;
  }
}


