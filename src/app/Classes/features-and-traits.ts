import { Category } from './category';
import { CategoryItem } from './category-item';
import { IfeaturesAndTraits } from '../Interfaces/ifeatures-and-traits';

export class FeaturesAndTraits {
  categories: Array<Category> = [];

  addCategory(category: Category) {
    this.categories.push(category);
  }

  removeCategory(category: Category) {
    delete this.categories[this.categories.indexOf(category)];
  }

  addToCategory(category: Category, item: CategoryItem) {
    this.categories[this.categories.indexOf(category)].addItem(item);
  }

  removeFromCategory(category: Category, item: CategoryItem) {
    this.categories[this.categories.indexOf(category)].removeItem(item);
  }

  constructor(data?: IfeaturesAndTraits) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
