import { Component, OnChanges } from '@angular/core';
import { GoodReadService, Book } from './good-read.service';



@Component({
  selector: 'good-read',
  templateUrl: './good-read.component.html',
  styleUrls: ['./good-read.component.less']
})
export class GoodReadComponent {
  title = 'goodReadsApp';
  public bookList: Book[] = [];
  public searchResult: Book[] = [];
  public searchItem: string;
  public selectedIndex = 1;
  constructor(private goodReadService: GoodReadService) {
    this.bookList = this.goodReadService.bookList;
    this.searchResult = this.bookList;
  }

  public search(): void {
    if (!this.bookList || !this.searchItem) {
      this.searchResult = [];
    }
    const searchText = this.searchItem.toLowerCase();
    this.searchResult = this.bookList.filter(item => {
      return item.name.toLowerCase().includes(searchText);
    });
  }

  public get getPages(): number[] {

    const pages: number[] = [];
    for (let i = 0; i < (this.searchResult.length) / 5; i++) {
      pages.push(i + 1);
    }
    return pages;

  }

  public get getBooks(): Book[] {
    const previousIndex = this.selectedIndex - 1;
    return this.searchResult.slice((previousIndex * 5 + previousIndex), (this.selectedIndex * 5 + previousIndex));
  }

  public changeIndex(index: number) {
    this.selectedIndex = index;
  }



}
