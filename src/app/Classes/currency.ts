import { Icurrency } from '../Interfaces/icurrency';

export class Currency {
  cp: number = 0;
  sp: number = 0;
  ep: number = 0;
  gp: number = 0;
  pp: number = 0;


  addMoney(amount: number, currency: string) {
    switch (currency) {
      case 'cp':
        this.cp += amount;
        break;
      case 'sp':
        this.sp += amount;
        break;
      case 'ep':
        this.sp += amount * 5;
        break;
      case 'gp':
        this.gp += amount;
        break;
      case 'pp':
        this.pp += amount;
        break;
      default:
        console.log('Error in adding currency');
        break;
    }
  }

  buy(playerInput: number, playerCurrency: string, cost: number, costCurrency: string, change: boolean): boolean {
    switch (playerCurrency) {
      case 'cp':
        if (playerInput > this.cp) { return false; }
        this.cp -= playerInput;
        break;
      case 'sp':
        if (playerInput > this.sp) { return false; }
        this.sp -= playerInput;
        playerInput *= 10;
        break;
      case 'ep':
        if (playerInput > this.ep) { return false; }
        this.ep -= playerInput;
        playerInput *= 50;
        break;
      case 'gp':
        if (playerInput > this.gp) { return false; }
        this.gp -= playerInput;
        playerInput *= 100;
        break;
      case 'pp':
        if (playerInput > this.pp) { return false; }
        this.pp -= playerInput;
        playerInput *= 1000;
        break;
      default:
        console.log('Error in buying');
        break;
    }

    switch (costCurrency) {
      case 'cp':
        cost = cost;
        break;
      case 'sp':
        cost *= 10;
        break;
      case 'ep':
        cost *= 50;
        break;
      case 'gp':
        cost *= 100;
        break;
      case 'pp':
        cost *= 1000;
        break;
      default:
        console.log('Error in buying');
        break;
    }

    // Vi har tagit bort valuta från spelare...

    if (playerInput >= cost) {
      if (change) {
        // Calculate change
        let rest = playerInput - cost;
        // Remove Plat
        let temp = Math.floor(rest / 1000);
        this.pp += temp;
        rest -= temp * 1000
        // Remove gold
        temp = Math.floor(rest / 100);
        this.gp += temp;
        rest -= temp * 100;
        // Remove silver
        temp = Math.floor(rest / 10);
        this.sp += temp;
        rest -= temp * 10;
        // Remove copper
        this.cp += rest;
      }

      return true;
    }

    switch (playerCurrency) {
      case 'cp':
        this.cp += playerInput;
        break;
      case 'sp':
        playerInput /= 10;
        this.sp += playerInput;
        break;
      case 'ep':
        playerInput /= 50;
        this.ep += playerInput;
        break;
      case 'gp':
        playerInput /= 100;
        this.gp += playerInput;
        break;
      case 'pp':
        playerInput /= 1000;
        this.pp += playerInput;
        break;
      default:
        console.log('Error in buying');
        break;
    }

    return false;

  }

  constructor(data?: Icurrency) {
    Object.assign(this, data);
  }

}
