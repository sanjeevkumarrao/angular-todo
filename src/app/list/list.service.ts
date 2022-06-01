import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { DataService } from '../utils/data.service';
import { List } from '../utils/list';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private data: DataService
  ) { }

  private listsUrl = 'api/lists';

  getLists(limit: number): Observable<List[]> {
    return this.data
      .getAll<any[]>(this.listsUrl)
      .pipe(map(ret => ret.slice(0, limit)));
  }
}
