class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(`Name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, health: ${this.health}`);
    }

    drinkSake(){
        this.health += 10;
    }
}