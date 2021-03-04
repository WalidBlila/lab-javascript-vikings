// Soldier
class Soldier {
 constructor(health, strength){
     this.health = health;
     this.strenght = strength;
 }  
 
 attack () {
     return this.strength
 }

 receiveDamage (damage) {
     this.health = this.health - damage
 }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

receiveDamage (damage) {
    //this.health =this.health - damage
    super.receiveDamage(damage)
    if (Viking.health < 0) {
        return `${this.name} has died in act of combat.`;
    } else {
        return `${this.name} has received ${this.damage} points of damage.`
    }
}

battlecry () {
    return "Odin Owns You All!";
}
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health - damage
        if (this.health < 0){
           return `A Saxon has received ${damage}`;
        } else {
            return "A Saxon has died in combat";
        }  
        }
    }

 
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    // addSaxon (saxon) {
    //     saxonArmy +=1
    // }

    // vikingAttack() {
    //     let randomSaxon = 1 + Math.floor(Math.random() * this.saxonArmy);
    //     receiveDamage(randomSaxon)
    // }
    // saxonAttack() {}
    // showStatus() {}

}

console.log(randomSaxon)