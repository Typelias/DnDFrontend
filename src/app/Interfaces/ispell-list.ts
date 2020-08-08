import { IlevelSpell } from "./ilevel-spell";
import { Icantrips } from "./icantrips";

export interface IspellList {
    cantrips: Icantrips
    lvl1Spells: IlevelSpell;
    lvl2Spells: IlevelSpell;
    lvl3Spells: IlevelSpell;
    lvl4Spells: IlevelSpell;
    lvl5Spells: IlevelSpell;
    lvl6Spells: IlevelSpell;
    lvl7Spells: IlevelSpell;
    lvl8Spells: IlevelSpell;
    lvl9Spells: IlevelSpell;
}
