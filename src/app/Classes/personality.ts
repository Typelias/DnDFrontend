import { IPersonality } from '../Interfaces/IPersonality';

export class Personality {
  personalityTraits: string = '';
  ideals: string = '';
  bonds: string = '';
  flaws: string = '';
  backstory: string = '';

  constructor(data?: IPersonality) {
    if (data) {
      Object.assign(this, data);
    }

  }
}
