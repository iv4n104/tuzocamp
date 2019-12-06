// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
       this.health-=damage;    
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health,strength);
        this.name=name;
        this.health=health;
        this.strength=strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health-=damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`;
        }else{
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    constructor( health, strength){
        super(health,strength);
        this.health=health;
        this.strength=strength;
    }
    receiveDamage(damage){
        this.health-=damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        
        }else{
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {

    vikingArmy=[];
    saxonArmy=[];

    addViking(Viking){
       this.vikingArmy.push(Viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let saxon = this.saxonArmy[0];
        let viking = this.vikingArmy[0];

        let danorecivido=saxon.receiveDamage(viking.strength);

        if(saxon.health <1){
            this.saxonArmy.shift()
        }

        return danorecivido;

    }


    saxonAttack(){
        let saxon = this.saxonArmy[0];
        let viking = this.vikingArmy[0];

        let danorecivido=  viking.receiveDamage(saxon.strength);
        if(viking.health <1){
            this.vikingArmy.shift()
        }
        return danorecivido;
    }

    showStatus(){
        if(this.saxonArmy.length===0){
            return 'Vikings have won the war of the century!';
        }else if(this.vikingArmy.length===0){
            return 'Saxons have fought for their lives and survived another day...';
        }else{
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }


}
