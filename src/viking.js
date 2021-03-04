// Soldier
class Soldier {
 constructor(health, strenght){
     this.health = health;
     this.strenght = strenght;
 }  
 
 attack (){
     return this.strenght
 }

 receiveDamage(damage){
     this.health =this.health - damage
 }
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
