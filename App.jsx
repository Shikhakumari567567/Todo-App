// import App from './App.jsx'
// import "./App.css";
// Day1
// function App(){
//   return(
//     <>
//       <h1>My First React App</h1>
//     </>
//   );
// }
// export default App;

// Day2 Create UI using variables
// function App() {
//   const name = "Shikha Kumari";
//   const course = "Bca";
//   const age = 18;
//   return(
//     <div>
//       <h1>{name}</h1>
//       <p>Course: {course}</p>
//       <p>Age: {age}</p>

//     </div>
//   )
// }
// export default App;

// Render Dynamic Data
// function App() {
//   const city = "Patan";
//   const college = "Eternal University";

//   return(
//     <div>
//       <h2>{city}</h2>
//       <p>{college}</p>
//     </div>
//   )
// }
// export default App;

// Use functions inside JSX
// function App() {
//   function greet() {
//     return "Welcome to React";
//   }

//   return(
//     <div>
//       <h1>{greet()}</h1>
//     </div>
//   )
// }
// export default App;

// Final Practice: Profile Card UI
// function App() {
//   const name = "Shikha Kumari";
//   const age = 18;
//   const image = "https://i.pinimg.com/564x/02/11/c8/0211c8d1671140d0b5a867210326f415.jpg"

//   return(
//     <div className="profile-card">
//       <img
//        src={image}
//        alt="profile"
//        width="200"
//        />
//        <h1>{name}</h1>
//        <p>Age: {age}</p>
//     </div>
//   )
// }
// export default App;

// Day3
// import ProductCard from "./Components/ProductCard";
// function App() {
//   return (
//     <div>
//       <h1>My Products</h1>

//       <div className="product-container">
//         <ProductCard
//           name="Laptop"
//           price="80000"
//           image="https://5.imimg.com/data5/JL/QW/MY-2974783/computer-laptop-500x500.jpg"
//         />

//         <ProductCard
//           name="Mobile"
//           price="20000"
//           image="https://www.bigcmobiles.com/media/catalog/product/cache/e19e56cdd4cf1b4ec073d4305f5db95a/v/i/vivo_t4x_5g_marine_blue_.jpg"
//         />

//         <ProductCard
//           name="Headphones"
//           price="3000"
//           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsuHAJCW-qz5sZZQS8fORe9zNEXzjZm9WTJerrJwOx1A&s=10"
//         />

//         <ProductCard
//         name="Earbuds"
//         price="1500"
//         image="https://m.media-amazon.com/images/I/61LKTD-YnrL._AC_UF1000,1000_QL80_.jpg"
//         />

//       </div>
//     </div>
//   );
// }
// export default App;


// import { useEffect, useState } from "react";
// Day9
// Log on Mou
// function App() {
//   useEffect(()=>{
//     console.log("Compoment mounted");
//   },[]);
//   return(
//     <>
//     <h1>Hello React</h1>
//     </>
//   )
// }
// export default App;

// Log on Every Update
// function App() {
//   const[count,setcount]=useState(0);
//   useEffect(()=>{
//     console.log("Updated")
//   });
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setcount(count+1)}>Increase</button>
//       <button onClick={()=>setcount(count-1)}>Decrease</button>
//     </div>
//   )
// }
// export default App;

// Day 10 practice
// import axios from "axios";
// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>

//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// export default App;


// Day11
// Mini project in a Student list 
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const students = [
//     "Shikha",
//     "Saloni",
//     "Riya",
//     "Priya",
//     "Juhi",
//     "Aarti",
//     "Anushka",
//     "Sakshi",
//     "Nirali",
//     "Pooja",
//     "Neha",
//     "Simran",
//     "Suman",
//     "Kirtika",
//     "Astha",
//   ]
//   const [currentPage, setCurrentPage] = useState(1);

//   const studentsPerPage = 3;

//   const totalPages = Math.ceil(
//     students.length / studentsPerPage
//   );
//   const startIndex = (currentPage - 1) * studentsPerPage;

//   const currentStudents = students.slice(
//     startIndex, startIndex + studentsPerPage
//   );
//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };
//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   }
//   return(
//     <div className="container">
//       <h1>Student List</h1>

//       <div className="student-list">
//         {currentStudents.map((student, index) => (
//           <div className="student-card" key={student}>
//             <h2>{startIndex + index + 1}.{student}</h2>
//           </div>
//         ))}
//       </div>

//       <div className="pagination">
//         <button onClick={handlePrevious}
//         disabled={currentPage === 1}
//         >Previous</button>

//         <span>
//           Page {currentPage} of {totalPages} {" "}
//         </span>

//         <button onClick={handleNext}
//         disabled={currentPage === totalPages}
//         >Next</button>

//       </div>
//     </div>
//   );
  
// }
// export default App;


// function App() {
//   const products = [
//     {id: 1, name: "Laptop", price: "$800"},
//     {id: 2, name: "Mobile", price: "$500"},
//     {id: 3, name: "Headphones", price: "$200"},
//     {id: 4, name: "Earbuds", price: "$100"},
//     {id: 5, name: "Mouse", price: "$30"},
//     {id: 6, name: "Moniter", price: "$300"},
//     {id: 7, name: "Keybord", price: "$50"},
//     {id: 8, name: "Smart Watch", price: "$200"},
//     {id: 9, name: "Camera", price: "$700"},
//     {id: 10, name: "Speaker", price: "$150"},
//   ];

//   const [currentPage, setCurrentPage] = useState(1);

//   const productsPerPage = 4;
//   const totalPages = Math.ceil(
//     products.length / productsPerPage
//   );

//   const startIndex = (currentPage - 1) * productsPerPage;

//   const currentProducts = products.slice(
//     startIndex, startIndex + productsPerPage
//   );
//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return(
//     <div className="container">
//       <h1>Product Store</h1>

//       <div className="product-list">
//         {currentProducts.map((product) => (
//           <div className="product-card" key={product.id}>
//             <h2>{product.name}</h2>
//             <p>Price: {product.price}</p>
//           </div>
//         ))}
//       </div>

//       <div className="pagination">
//         <button onClick={handlePrevious} 
//         disabled={currentPage === 1} 
//         >Previous</button>

//         <span>
//           page {currentPage} of {totalPages}
//         </span>

//         <button onClick={handleNext}
//         disabled={currentPage === totalPages}
//         >Next</button>
//       </div>

//     </div>

//   );

// }
// export default App;



// Food list
// function App() {
//   const foods = [
//       {id: 1, name: "Pizza", category: "Fast Food", price: "₹300"},
//       {id: 2, name: "Burger", category: "Fast Food", price: "₹50"},
//       {id: 3, name: "Pasta", category: "Italian", price: "₹200"},
//       {id: 4, name: "Biryani", category: "Indian", price: "₹150"},
//       {id: 5, name: "Dosa", category: "South Indian", price: "₹250"},
//       {id: 6, name: "Noodles", category: "Chinese", price: "₹400"}, 
//   ];

//   const [currentPage, setCurrentPage] = useState(1);

//   const foodsPerPage = 3;
//   const totalPages = Math.ceil(
//     foods.length / foodsPerPage
//   );

//   const startIndex =
//   (currentPage - 1) * foodsPerPage;

//   const currentFoods = foods.slice(
//     startIndex, startIndex + foodsPerPage
//   );

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return(
//     <div className="container">
//       <h1>🍔 Food Menu</h1>

//       <p className="subtitle">
//         Delicious food for everyone
//       </p>

//       <div className="food-list">
//         {currentFoods.map((food) => (
//           <div className="food-card" key={food.id}>
//             <h2>{food.name}</h2>

//             <p className="category">{food.category}</p>

//             <p className="price">{food.price}</p>

//             <button>Order Now</button>

//             </div>
//         ))}
        
//       </div>

//       <div className="pagination">
//         <button onClick={handlePrevious} disabled={currentPage === 1}>
//           Previous
//         </button>

//         <span>
//           page {currentPage} of {totalPages}
//         </span>

//         <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>

//       </div>

//     </div>
//   )

// }

// export default App;


// DAY 12
// Small project: Debounced search App

// import { useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const products = [
//     "Laptop",
//     "Mobile",
//     "Keybord",
//     "Mouse",
//     "Monitor",
//     "Smart Watch",
//     "Tablet",
//     "Camera",
//     "Printer",
//     "Headphones"
//   ];
//   const [search, setSearch] = useState("");
//   const [filteredProducts, setfilteredProducts] = useState(products);
//   const [isSearching, setIsSearching] = useState(false);
//   const timerRef = useRef(null);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearch(value);
//     setIsSearching(true);

//     clearTimeout(timerRef.current);

//     timerRef.current = setTimeout(() => {
//       const result = products.filter((product) =>
//         product.toLowerCase().includes(value.toLowerCase())
//       );
//       setfilteredProducts(result);
//       setIsSearching(false);
//     }, 500);
//   };
//   return(
//     <div className="container">
//       <h1>Product Search</h1>

//       <input
//       type="text" value={search} onChange={handleSearch}
//       placeholder="Search product..."
//       />
//       {isSearching && <p>Searching...</p>}

//       {!isSearching && filteredProducts.length === 0 && (
//         <p>No product found</p>
//       )}

//       <div className="product-list">
//         {filteredProducts.map((product, index) =>(
//         <div className="product-card" key={index}>
//           <h3>{product}</h3> 
//         </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// function App() {
//   const [text, setText] = useState("");

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Character Input Box</h1>
      
//       <input
//       type="text" placeholder="Enter your charecter"
//       value={text} 
//       onChange={handleChange}
//       />

//       <p>You typed: {text}</p>
//       <p>Character Count: {text.length}</p>
//     </div>
//   );
// }

// export default App;


// Day13

// import { useState } from 'react';
// import Product from './Components/Product';
// import Card from './Components/Card';

// function App() {
//     const [cartCount, setCartCount] = useState(0);
//     function addToCart() {
//         setCartCount(cartCount + 1);
//     }
//   return (
//     <div>
//         <h1>Shopping Cart</h1>
//         <Card cartCount={cartCount} />
//         <Product addToCart={addToCart} />
//     </div>
//   )
// }
// export default App;


// Day 14 to 15

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Students from "./Pages/Students";



// function App() {
//   return (
//     <BrowserRouter>

//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link> 
//         <Link to="/students">Students</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/students" element={<Students />} />
//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;


// Day 16

// import { createContext, useState } from "react";
// import ChildA from "./Components/ChildA";
// import ChildC from "./Components/childC";

// step1: create context
// const UserContext = createContext();
// step2: warp all the child inside a provider
// step3: pass value

// function App() {
//   const [user, setUser] = useState({name:"React"});
//   return (
//     <>
//     <UserContext.Provider value={user}>
//       <ChildA />
//     </UserContext.Provider>
//     </>

//   )
// }
// export default App;
// export {UserContext}



// Day17 custom hook currency project
// import { useState } from "react";
// import CurrencyForm from "./Components/CurrencyForm";
// import useCurrency from "./hooks/useCurrency";
// import "./App.css";


// function App() {

//   const [amount, setAmount] = useState(1);
//   const [from, setFrom] = useState("USD");
//   const [to, setTo] = useState("INR");

//   const currencies = [
//     "USD",
//     "EUR",
//     "GBP",
//     "INR",
//     "JPY",
//     "AUD",
//     "CAD",
//   ];

//   const {
//     data,
//     loading,
//     error,
//   } = useCurrency(from);

//   const rate = data[to];

//   const convertedAmount =
//     rate && amount
//       ? (Number(amount) * rate).toFixed(2)
//       : "";

//   const swapCurrency = () => {
//     setFrom(to);
//     setTo(from);
//   };

//   return (
//     <div className="app">

//       <CurrencyForm
//         amount={amount}
//         setAmount={setAmount}
//         from={from}
//         setFrom={setFrom}
//         to={to}
//         setTo={setTo}
//         currencies={currencies}
//         swapCurrency={swapCurrency}
//         convertedAmount={convertedAmount}
//         loading={loading}
//         error={error}
//         rate={rate}
//       />

//     </div>
//   );
// }

// export default App;



// Day 18 useReducer
import { useReducer, useState } from "react";
import "./App.css";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );

    case "DELETE_TODO":
      return state.filter(
        (todo) => todo.id !== action.payload
      );

    case "CLEAR_TODOS":
      return [];

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() === "") {
      return;
    }

    dispatch({
      type: "ADD_TODO",
      payload: input,
    });

    setInput("");
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <div className="todo-list">
        {todos.length === 0 ? (
          <p>No todos yet!</p>
        ) : (
          todos.map((todo) => (
            <div className="todo-item" key={todo.id}>
              
              <span
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_TODO",
                    payload: todo.id,
                  })
                }
                className={
                  todo.completed ? "completed" : ""
                }
              >
                {todo.text}
              </span>

              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE_TODO",
                    payload: todo.id,
                  })
                }
              >
                Delete
              </button>

            </div>
          ))
        )}
      </div>

      {todos.length > 0 && (
        <button
          className="clear-btn"
          onClick={() =>
            dispatch({
              type: "CLEAR_TODOS",
            })
          }
        >
          Clear All
        </button>
      )}
    </div>
  );
}

export default App;
