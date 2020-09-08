import { ICategoryItem } from '../Interfaces/i-category-item';

export class CategoryItem {
  name: string = '';
  description: string = '';
  amount: number = 0;
  showAmount: boolean = true;

  constructor(data?: ICategoryItem) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
