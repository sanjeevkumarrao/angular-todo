import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { List } from '../utils/list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  lists$: List[] = [];
  
  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getLists();
  }

  getLists() {
    this.listService.getLists(50)
      .subscribe(lists => {
        console.log(lists);
        
        this.lists$ = lists
      }); 
  }

}
