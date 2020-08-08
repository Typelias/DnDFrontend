import { Ispell } from "./ispell";

export interface IlevelSpell {
    spells: Array<Ispell>;
    spellSlotTotal: number;
    spellSlotExpended: number;
}
