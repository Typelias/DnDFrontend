import {CategoryItem} from './category-item';

export class Category {
  name: string;
  items: Array<CategoryItem>;

  addItem(item: CategoryItem) {
    this.items.push(item);
  }

  removeItem(item: CategoryItem) {
    delete this.items[this.items.indexOf(item)];
  }

}
