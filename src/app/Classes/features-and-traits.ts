import { Category } from './category';
import { CategoryItem } from './category-item';
import { IfeaturesAndTraits } from '../Interfaces/ifeatures-and-traits';

export class FeaturesAndTraits {
  categories: Array<Category>;

  addCategory(category: Category) {
    this.categories.push(category);
  }

  editCategory(index: number, newCatagory: Category) {
    this.categories[index] = newCatagory;
  }

  removeCategory(catIndex: number) {
    this.categories.splice(catIndex, 1);
  }

  addToCategory(catIndex: number, item: CategoryItem) {
    this.categories[catIndex].addItem(item);
  }

  editItemInCat(catIndex: number, itemIndex: number, newItem: CategoryItem) {
    this.categories[catIndex].edditItem(newItem, itemIndex);
  }

  removeFromCategory(catIndex: number, itemIndex: number) {
    this.categories[catIndex].removeItem(itemIndex);
  }

  constructor(data?: IfeaturesAndTraits) {
    if (data) {
      Object.assign(this, data);
      this.categories = [];
      data.categories.forEach(cat => {
        const temp = new Category(cat);
        this.categories.push(temp);
      });
    } else {
      this.categories = [];
    }

  }

}
