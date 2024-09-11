// ● Create a function to calculate array of student data

// ● The object has this following properties:
// ○ Name → String
// ○ Email → String
// ○ Age → Date
// ○ Score → Number

// ● Parameters: array of student

// ● Return values:
// ○ Object with this following properties:
// ■ Score
// ● Highest
// ● Lowest
// ● Average

// ■ Age
// ● Highest
// ● Lowest
// ● Average

//1
interface IKelas {
    name: string;
    email: string;
    age: Date;
    score: number;
}

class Kelas implements IKelas {
    name;
    email;
    age;
    score;

    constructor(
        paraName: string,
        paraEmail: string,
        paraAge: Date,
        paraScore: number
    ) {
        this.name = paraName;
        this.email = paraEmail;
        this.age = paraAge;
        this.score = paraScore
    }


}
let dateJohn = new Date("2002-02-22");
let dateMary = new Date("2001-03-23");
let dateAntonio = new Date("2002-05-18");
let dateJanice = new Date("2003-09-14");

const murid1 = new Kelas("John", "john.@gmail.com", dateJohn, 85);
const murid2 = new Kelas("Mary", "mary123@gmail.com", dateMary, 90);
const murid3 = new Kelas("Antonio", "antonio55@gmail.com", dateAntonio, 75);
const murid4 = new Kelas("Janice", "janise76@gmail.com", dateJanice, 80);

console.log(murid1);

const arrayMuridName: string[] = [murid1.name, murid2.name, murid3.name, murid4.name];
const arrayDate = [murid1.age, murid2.age, murid3.age, murid4.age];
const arrayScore: number[] = [murid1.score, murid2.score, murid3.score, murid4.score];

console.log(arrayMuridName);
console.log(arrayDate);


const cbCalculate = function (students: IKelas[]) {
    score: {
        highest: Number;
        lowest: Number;
        average: Number;
    };
    age: {
        highest: Date;
        lowest: Date;
        average: Number;
    };
    {
        //kalkulasi dengan .map , mereturn sebuah student score dan student age
        const scores = students.map((student) => student.score);
        const ages = students.map((student) => student.age.getTime());

        // gunakan built in method , math max and min (...scores) untuk mencari angkanya 
        const highestScore = Math.max(...scores);
        const lowestScore = Math.min(...scores);
        const averageScore = ages.reduce((acc, curr) => acc + curr, 0); //ave

        const highestAge = new Date(Math.max(...ages));
        const lowestAge = new Date(Math.min(...ages));
        const averageAge = ages.reduce((acc, curr) => acc + curr, 0);

        return {
            score: {
                highest: highestScore,
                lowest: lowestScore,
                average: averageScore,
            },
            age: {
                highest: highestAge,
                lowest: lowestAge,
                average: averageAge,
            },
        };
    };
};

// Usage 
const students = [murid1, murid2, murid3, murid4];
const result = cbCalculate(students);
console.log(result);
//output 
// score: { highest: 90, lowest: 75, average: 4084819200000 },
// age: {
//     highest: new Date('2003-09-14T00:00:00.000Z'),
//         lowest: new Date('2001-03-23T00:00:00.000Z'),
//             average: 4084819200000
// }
// }



//2. The Product Transaction

interface IProduct {
    name: string;
    price: number;
}
interface ITransaction {
    total: number;
    product: IProduct[];  //Change to IProduct to store Product object 
}



class Product implements IProduct {
    name: string;
    price: number;

    constructor(
        paraName: string,
        paraPrice: number,
    ) {
        this.name = paraName;  //Remove Colon With '='
        this.price = paraPrice;
    }
};

class Transaksi implements ITransaction {
    total: number;
    product: IProduct[];

    constructor() { //remove the Parameter , fill with the amount and the products 

        this.total = 0;
        this.product = [];
    };

    // Method to Add Product to transaction 
    addToCart(product: IProduct, qty: number) {

        this.product.push({ ...product });  // Add a copy of the product to the Array 

        this.total += product.price * qty; // update Total 
    };

    // Method To show total Current Transaction
    showTotal() {
        return this.total;
    };

    //Method Finalize The Transaction and return transaction Data
    checkout() {
        return {
            total: this.total,
            products: this.product.map((product) => product.name) //return the products name
        }
    }

}


//usage 
let product1 = new Product("Mobil", 200000);
let product2 = new Product("Motor", 10000);

let transaction = new Transaksi();
transaction.addToCart(product1, 2);


console.log("Total", transaction.showTotal());
console.log("Transaction Data:", transaction.checkout());

// add to cart method => masukan product ke transaction
// show total method => tunjukan total transaksi terkini
// Checkout Method => Finalize Transaction, return transaction Data




