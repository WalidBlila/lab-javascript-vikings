// Soldier
class Soldier {
 constructor(health, strength){
     this.health = health;
     this.strength = strength;
 }  
 
 attack () {
     return this.strength;
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

receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
    } else {
        return `${this.name} has died in act of combat`
        
    }
}

//"NAME has received DAMAGE points of damage"

battleCry () {
    return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0){
           return `A Saxon has received ${damage} points of damage`;
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

    addSaxon (saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let randoViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let randoSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let embrouille = randoSaxon.receiveDamage(randoViking.strength);
        if (randoSaxon.health <= 0) {
            let i = this.saxonArmy.indexOf(randoSaxon);
            this.saxonArmy.splice(i, 1)
        }
        return embrouille
    }

    saxonAttack() {
        let randoViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let randoSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let embrouille = randoViking.receiveDamage(randoSaxon.strength);
        if (randoViking.health <= 0) {
            let i = this.vikingArmy.indexOf(randoViking);
            this.vikingArmy.splice(i, 1)
        }
        return embrouille
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
    
}
