class Animal{
    legs; 
    tail;
    constructor(legs,tail)
    {
        this.legs=legs;
        this.tail=tail;
    }
    display()
    {
        console.log(this.legs);
        console.log(this.tail);
    }
}
class Human extends Animal{
    nationality;
    constructor(legs,tail,nationality)
    {
        super(legs,tail);
        this.nationality=nationality;
    }
}
//let anime=new Animal(2,false);
//anime.display();
let c=new Human(4,false,'indian');
console.log(c);
