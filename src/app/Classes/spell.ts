import { ISpell } from '../Interfaces/ISpell';

export class Spell {
    name: string;
    description: string;
    dice: string;
    damageType: string;
    spellRange: string;
    component: string;
    duration: string;
    castingTime: string;
    concentration: boolean;
    conditions: string;
    level: string;

    constructor(data?: ISpell) {
        if (data) {
            Object.assign(this, data);
        }

    }
}
