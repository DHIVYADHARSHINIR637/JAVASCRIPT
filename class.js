 class User{
    name;
    age;
    #name;
    #age;
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    display()
    {
        console.log("name:",this.name);
        console.log("age:"+this.age);
    }
    get name()
    {
        return "name:"+this.#name;
    }
    set age(age)
    {
        if(age==23)
        {
       this.#age=24;
        }
        else{
            this.#age=age;
        }
    }
 }
 let c=new User('deva',23);
 console.log(c);
 console.log(c.name);
 c.display();
