import { IcategoryItem } from "./icategory-item";
import { Icurrency } from "./icurrency";

export interface Iequipment {
    equipmentList: Array<IcategoryItem>;
    currency: Icurrency;
}

