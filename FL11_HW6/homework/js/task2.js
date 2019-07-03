class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    checkIfCanExist() {
        return this.a + this.b > this.c &&
            this.a + this.c > this.b &&
            this.b + this.c > this.a;
    }

    findType() {
        console.log(a,b,c);
        if (this.a === this.b && this.a === this.c)
            return "Equivalent triangle";
        else if (this.a === this.b || this.b === this.c || this.a === this.c)
            return "Isosceles triangle";
        return "Normal triangle";
    }
}


const a = parseInt(prompt("Enter a"));
const b = parseInt(prompt("Enter b"));
const c = parseInt(prompt("Enter c"));
const triangle = new Triangle(a, b, c);
if(!triangle.checkIfCanExist())
    console.log("Triangle doesn’t exist");
else
    console.log(triangle.findType())

