import { ICategoryItem } from './i-category-item';
import { ICurrency } from './ICurrency';

export interface IEquipment {
    equipmentList: Array<ICategoryItem>;
    currency: ICurrency;
}

