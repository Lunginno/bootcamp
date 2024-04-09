class person
{
    constructor(fname)
    {
        this.fname = fname;
    }
    toString()
    {
        return (`Name of this person: ${this.fname}`)
    }

}

class student extends person
{
    constructor(fname, id)
    {
        //we introduce the super keyword for calling the above class constructor
        super(fname);
        this.id = id;
    }

    toString()
    {
        return(` ${super.toString()} 
        with Student ID: ${this.id}`)
    }
}  // end of inherited class

let studen1 = new student("Alice", 384924);
console.log(studen1) //object return data
console.log(studen1.toString())