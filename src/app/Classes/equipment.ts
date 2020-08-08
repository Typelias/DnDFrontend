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
    delete this.equipmentList[index];
  }

  public edditEquipment(newItem: CategoryItem, index: number) {
    this.equipmentList[index] = newItem;
  }

  constructor(data?: Iequipment) {
    Object.assign(this, data);
    this.currency = new Currency(data.currency);
  }

}
