import { Book } from './book';

export const BOOKS: Book[] = [
  { 
    id: 100,
    publisher: "HarperCollins",
    shipping: "Overnight",
    author: ["W. Smith", "A. P. Simon", "A. Johns"],
    price: 35.25,
    title: "History of Hyposis",
    availability:23
  },
  {
    id: 200,
    publisher: "Simon and Schuster",
    title: "Bunnies",
    shipping: "2-8 Business Days",
    availability: 46,
    author: ["P. Holmes"],
    price: 45.40
  },
  {
    id: 300,
    author:["Jack Thompson","John Smith"],
    price: 20.50,
    availability: 60,
    title: "Java for Dummies",
    shipping: "Overnight",
    publisher: "HarperCollins"
  },
  {
    id: 400,
    title: "C++ Bible",
    price:19.00,
    shipping: "1-3 Business Days",
    author: ["A.Z. Jazon", "Paul Jones"],
    publisher: "Prentice Hall",
    availability: 12
  },
  {
      id: 500,
      title:"C# for Dummies",
      author: ["A. B. Jane","James Thomas"],
      price: 42.30,
      shipping: "1-3 Business Days",
      availability:345,
      publisher:"McGraw-Hill",
  }
];