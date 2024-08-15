// Problem -1
// Task-1
let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary:
        [
          {school_name:"ABC primary school"},
          {location:"Peters burg"}
        ]
      },
      {
        secondary:
        [
          {school_name:"ABC secondary school"},
          {location:"St Lorene"}
        ]
      }
    ]
  }
}

// console.log(data.Sophia.study[1].secondary[1]);

// Task-2
let students = {
  2222: {
    name:"Jack",
    section:"C",
    class:"IX",
    address:{
      "building no": 12,
      "street": "St. Jonson",
      "city": "Petersburg",
      "country": "UK"
    }
  },
  3333: {
    name: "Harry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      "street": "DC road",
      "city": "Kachukhet",
      "country": "Bangladesh"
    }
  }
}

// console.log(students[2222].address["city"]);
// console.log(students[3333].name);

// Task-3

let data2 = {
  data:[
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "20$"
      },
      bookCategory: "Basic"
    },
    {
      bookId: 2,
      bookDetails: {
        name: "programming er choddogushti",
        category: "ABC",
        price: "40$"
      },
      bookCategory: "Beginner"
    }
  ]
}

// console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory);

// Problem-2

const numbers = [1, 3, 5, 7, 9]
function getEvenNumber(numbers){
  evenNumbersOfArray = []
  for(let number of numbers){
    const evenNumber = number + 1
    evenNumbersOfArray.push(evenNumber)
  }
  return evenNumbersOfArray
}
// console.log(getEvenNumber(numbers));

// use Array.map() for loop through
getEvenNumber = number => (number + 1)

const evenNumbersOfArray = numbers.map(getEvenNumber)
// console.log(evenNumbersOfArray);

// Problem - 3
const Numbers = [33, 50, 79, 78, 90, 101, 30]

const getDivisibleNumberBy_10 = Numbers.filter(num => num % 10 === 0)
// console.log(getDivisibleNumberBy_10);

const getTheElement = Numbers.find(num => num % 10 === 0)
// console.log(getTheElement);

// Problem-4
const instructor = [
  {name:"Nodi",age:28,position:"Senior"},
  {name:"Akil",age:26,position:"Junior"},
  {name:"Shobuj",age:30,position:"Senior"}
]

const names = instructor.filter(ins=>ins.position === "Senior")
// console.log(names);

// problem - 5

const peoples = [
  {name:"Meena", age: 20},
  {name:"Rina", age: 15},
  {name:"Suchita", age: 22}
]

const totalSum = peoples.reduce((accumulator,current) => accumulator + current.age,0)
// console.log(totalSum);