import { CategoryItem } from './category-item';
import { ICategory } from '../Interfaces/ICategory';

export class Category {
  name: string = '';
  items: Array<CategoryItem>;

  addItem(item: CategoryItem) {
    this.items.push(item);
  }

  edditItem(newItem: CategoryItem, index: number) {
    this.items[index] = newItem;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  public increaseAmount(index: number) {
    this.items[index].amount += 1;
  }

  public decreaseAmount(index: number) {
    if (this.items[index].amount === 0) {
      return;
    }
    this.items[index].amount -= 1;
  }

  constructor(data?: ICategory) {
    if (data) {
      Object.assign(this, data);
      this.items = [];
      data.items.forEach(item => {
        const temp = new CategoryItem(item);
        this.items.push(temp);
      });
    } else {
      this.items = [];
    }

  }

}
