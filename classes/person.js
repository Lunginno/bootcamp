class person 
{
    constructor(name, id)
    {
        this.name = name;
        this.id = id;
    }

    addAddress(address)
    {
        this.address = address;
    }
    
    getDetails()
    {
        console.log(`Name of the person is ${this.name} residing at ${this.address}`)
    }

}

let person1 = new person('Bob', 10);
person1.addAddress('Limpopo');

//abstraction
person1.getDetails();