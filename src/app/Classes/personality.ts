import { Ipersonality } from '../Interfaces/ipersonality';

export class Personality {
  personalityTraits: string = "";
  ideals: string = "";
  bonds: string = "";
  flaws: string = "";
  backstory: string = "";

  constructor(data?: Ipersonality) {
    if (data) {
      Object.assign(this, data);
    }

  }
}
