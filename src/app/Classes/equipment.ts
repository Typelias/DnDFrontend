import { CategoryItem } from './category-item';
import { Currency } from './currency';
import { Iequipment } from '../Interfaces/iequipment';

export class Equipment {
  public equipmentList: Array<CategoryItem> = [];
  public currency: Currency = new Currency();

  public addEquipment(item: CategoryItem): void {
    this.equipmentList.push(item);
  }

  public removeEquipment(index: number): void {
    this.equipmentList.splice(index, 1);
  }

  public edditEquipment(newItem: CategoryItem, index: number) {
    this.equipmentList[index] = newItem;
  }

  public increaseAmount(index: number) {
    this.equipmentList[index].amount += 1;
  }

  public decreaseAmount(index: number) {
    this.equipmentList[index].amount -= 1;
    if (this.equipmentList[index].amount <= 0) {
      this.removeEquipment(index);
    }
  }

  constructor(data?: Iequipment) {
    if (data) {
      Object.assign(this, data);
      this.currency = new Currency(data.currency);
    }
    this.currency = new Currency();

  }

}
