import { Component, OnInit } from '@angular/core';
import { SearchService } from './app.search.service';
import { Prezi } from './prezi';

@Component({
  selector: 'app-prezis',
  templateUrl: './prezi-list.component.html',
  styleUrls: ['./prezi-list.component.css']
})
export class PreziListComponent {
  sortedPrezis: string[];
  prezis: Map<string, Prezi> = new Map<string, Prezi>()
  errorMessage: string;
  p: number = 1;

  constructor(private _searchService: SearchService) {
  }

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    if (value && value.length) {
      this.performFilter(value);
    } else {
      this.prezis = new Map<string, Prezi>();
      this.sortedPrezis = [];
    }
  }

  sortPrezis(): void {
    this.sortedPrezis.sort((a: string, b: string): number => {
      return Date.parse(this.prezis[b].createdAt) - Date.parse(this.prezis[a].createdAt)
    })
  }

  performFilter(filterBy: string): void {
    filterBy = filterBy.toLocaleLowerCase();
    this._searchService.getResults(filterBy).subscribe(results => {
      this.prezis = results;
      this.sortedPrezis = Object.keys(results);
    },
      error => this.errorMessage = <any>error,
      () => this.sortPrezis());
  }
}
