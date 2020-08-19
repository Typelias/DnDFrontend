import { IcategoryItem } from '../Interfaces/icategory-item';

export class CategoryItem {
  name: string = "";
  description: string = "";
  amount: number = 0;
  showAmount: boolean = true;

  constructor(data?: IcategoryItem) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
