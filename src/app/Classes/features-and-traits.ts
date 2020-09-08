import { Category } from './category';
import { CategoryItem } from './category-item';
import { IFeaturesAndTraits } from '../Interfaces/i-features-and-traits';

export class FeaturesAndTraits {
  categories: Array<Category>;

  addCategory(category: Category) {
    this.categories.push(category);
  }

  editCategory(index: number, newCategory: Category) {
    this.categories[index] = newCategory;
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

  constructor(data?: IFeaturesAndTraits) {
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
