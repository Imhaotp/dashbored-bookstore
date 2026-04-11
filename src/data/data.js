import { MdDashboard, MdShoppingCart } from "react-icons/md";
import { FaBox, FaBook } from "react-icons/fa";

export const productsData = [
    {
        id: 1,
        name: "The Alchemist",
        catagory: "روايات",
        author: "Paulo Coelho",
        price: "200",
        stock: "10",
        active: true
    },
    {
        id: 2,
        name: "1984",
        catagory: "روايات",
        author: "George Orwell",
        price: "250",
        stock: "15",
        active: true
    },
    {
        id: 3,
        name: "To Kill a Mockingbird",
        catagory: "روايات",
        author: "Harper Lee",
        price: "180",
        stock: "7",
        active: true
    },
    {
        id: 4,
        name: "Pride and Prejudice",
        catagory: "روايات",
        author: "Jane Austen",
        price: "300",
        stock: "5",
        active: true
    },
    {
        id: 5,
        name: "One Hundred Years of Solitude",
        catagory: "روايات",
        author: "Gabriel García Márquez",
        price: "250",
        stock: "0",
        active: false
    },

    {
        id: 6,
        name: "Crime and Punishment",
        catagory: "روايات",
        author: "Fyodor Dostoevsky",
        price: "220",
        stock: "8",
        active: true
    },
    {
        id: 7,
        name: "The Great Gatsby",
        catagory: "روايات",
        author: "F. Scott Fitzgerald",
        price: "190",
        stock: "12",
        active: true
    },
    {
        id: 8,
        name: "Anna Karenina",
        catagory: "روايات",
        author: "Leo Tolstoy",
        price: "275",
        stock: "4",
        active: true
    },
    {
        id: 9,
        name: "The Catcher in the Rye",
        catagory: "روايات",
        author: "J.D. Salinger",
        price: "240",
        stock: "6",
        active: true
    },
    {
        id: 10,
        name: "The Kite Runner",
        catagory: "روايات",
        author: "Khaled Hosseini",
        price: "160",
        stock: "20",
        active: true
    }
];
export const OrdersData = [
    {
        id: "ORD-001",
        customerName: "Abdullah Alharbi" ,
        email: "AbdullahAlharbi@gmail.com" ,
        date: "20-01-2026",
        status:"completed",
        items: [
            {product:"The Great Gatsby", qty: 1, price: 190},
              {product:"Crime and Punishment", qty: 1, price: 220},
        ]
    },
      {
        id: "ORD-002",
        customerName: "Khalied Alharbi" ,
        email: "KhaliedAlharbi@gmail.com" ,
        date: "20-01-2026",
        status:"pending",
        items: [
            {product:"The Great Gatsby", qty: 1, price: 190},
              {product:"Crime and Punishment", qty: 1, price: 220},
        ]
    },
      {
        id: "ORD-003",
        customerName: "Yousef Aljahni" ,
        email: "YousefAljahni@gmail.com" ,
        date: "23-01-2026",
        status:"cancelled",
        items: [
            {product:"The Great Gatsby", qty: 1, price: 190},
              {product:"Crime and Punishment", qty: 1, price: 220},
        ]
    },
    {
        id: "ORD-004",
        customerName: "Amal Abdullah" ,
        email: "AmalAbdullah@gmail.com" ,
        date: "23-01-2026",
        status:"completed",
        items: [
            {product:"The Great Gatsby", qty: 1, price: 190},
              {product:"Crime and Punishment", qty: 1, price: 220},
        ]
    },
    {
        id: "ORD-005",
        customerName: "Basel Abdullah" ,
        email: "BaselAbdullah@gmail.com" ,
        date: "24-01-2026",
        status:"completed",
        items: [
            {product:"The Great Gatsby", qty: 1, price: 190},
              {product:"Crime and Punishment", qty: 1, price: 220},
        ]
    },
   {
        id: "ORD-006",
        customerName: "Manal  Alrougui" ,
        email: "ManalAlrougui@gmail.com" ,
        date: "24-01-2026",
        status:"completed",
        items: [
            {product:"The Great Gatsby", qty: 1, price: 190},
              {product:"Crime and Punishment", qty: 1, price: 220},
              {product:"Leo Tolstoy", qty: 1, price: 275},
        ]
    },
      {
        id: "ORD-007",
        customerName: "Manal  Alrougui" ,
        email: "ManalAlrougui@gmail.com" ,
        date: "23-02-2026",
        status:"completed",
        items: [
            {product:"The Great Gatsby", qty: 1, price: 190},
              {product:"Crime and Punishment", qty: 1, price: 220},
              {product:"Leo Tolstoy", qty: 1, price: 275},
        ]
    },
     {
        id: "ORD-008",
        customerName: "Lana Yousef" ,
        email: "LanaYousef@gmail.com" ,
        date: "23-02-2026",
        status:"cancelled",
        items: [
            {product:"The Great Gatsby", qty: 1, price: 190},
              {product:"Crime and Punishment", qty: 1, price: 220},
        ]
    },
    

];

export const navItems = [
  { id: "dashboard", label: "Dashboard", icon: MdDashboard },
  { id: "products", label: "Products", icon: FaBox },
  { id: "orders", label: "Orders", icon: MdShoppingCart },
  { id: "books", label: "BooksAPI", icon: FaBook },
];