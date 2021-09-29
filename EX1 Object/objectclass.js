// Object start
// let car1 = {
//     marke: "VW",
//     type: "Touran",
//     model: "1.6 TDI",
//     ps: "110 PS",
//     fueltype: ["Diesel", "Gasoline", "electro"],
//     color: "grey",
//     printInfo1: function() {
//         return "The car is " + this.marke + ", Type " + this.type + ", Model " + this.model + ", " + this.ps + ", " + this.fueltype[0] + ", color " + this.color + ""
//     }
// }

// console.log(car1.printInfo1())



// var car2 = {
//     marke: "Seat",
//     type: "Leon",
//     model: "1.5 TSI",
//     ps: "131 PS",
//     fueltype: ["Diesel", "Gasoline", "electro"],
//     color: "white",
//     printInfo2: function() {
//         return "The car is " + this.marke + ", Type " + this.type + ", Model " + this.model + ", " + this.ps + ", " + this.fueltype[1] + ", color " + this.color + ""
//     }
// }
// console.log(car2.printInfo2())


// var car3 = {
//     marke: "Porsche",
//     type: "Taycan",
//     model: "4 S Plus",
//     ps: "490 PS",
//     fueltype: ["Diesel", "Gasoline", "electro"],
//     color: "white",
//     printInfo3: function() {
//         return "This is a " + this.marke + " " + this.type + ", model " + this.model + ", with " + this.ps + ", in color " + this.color + ", and is fueled through " + this.fueltype[2] + ""
//     }
// }
// console.log(car3.printInfo3())

// Object end



// class start
class carcool {
    marke;
    type;
    model;
    ps;
    fueltype;
    color;
    constructor(ma, t, mo, p, f, c) {
        this.marke = ma;
        this.type = t;
        this.model = mo;
        this.ps = p;
        this.fueltype = f;
        this.color = c;
    }

    printInfo() {
        return " " + this.marke + " is the best car of the world :D"
    }
}

var carhere = new carcool("VW ", "Touran", "1.6 TDI", "110 PS", "Diesel", "grey");
console.table(carhere);
document.getElementById("read").innerHTML = carhere.printInfo();



class hotCar extends carcool {
    yearmodel;

    constructor(ma, t, mo, p, f, c, y) {
        super(ma, t, mo, p, f, c);
        this.yearmodel = y;

    }
}

var carye = new hotCar("VW Seat", "Touran", "1.6 TDI", "110 PS", "Diesel", "grey", 2021);

console.table(carye)