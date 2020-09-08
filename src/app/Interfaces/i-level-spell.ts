import { ISpell } from './ISpell';

export interface ILevelSpell {
    spells: Array<ISpell>;
    spellSlotTotal: number;
    spellSlotExpended: number;
}
