import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryItem } from 'src/app/Classes/category-item';

@Component({
  selector: 'app-category-item-view',
  templateUrl: './category-item-view.component.html',
  styleUrls: ['./category-item-view.component.scss']
})
export class CategoryItemViewComponent implements OnInit {

  @Input()
  item: CategoryItem;

  @Output()
  onEdit: EventEmitter<any> = new EventEmitter();
  @Output()
  onDecrease: EventEmitter<any> = new EventEmitter();
  @Output()
  onIncrease: EventEmitter<any> = new EventEmitter();
  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
