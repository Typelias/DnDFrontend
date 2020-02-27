import {CategoryItem} from './category-item';
import {Currency} from './currency';

export class Equipment {
  equipmentList: Array<CategoryItem> = [];
  currency = new Currency();

  addEquipment(item: CategoryItem) {
    this.equipmentList.push(item);
  }

  removeEquipment(item: CategoryItem) {
    delete this.equipmentList[this.equipmentList.indexOf(item)];
  }
}
