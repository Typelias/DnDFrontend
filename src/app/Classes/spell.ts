import { Ispell } from '../Interfaces/ispell';

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

    constructor(data?: Ispell) {
        if (data) {
            Object.assign(this, data)
        }

    }
}
