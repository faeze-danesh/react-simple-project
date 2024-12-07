import ProductCard from "./components/ProductCard"
import "./App.css";

function App() {

const products=[
  {name:"iphone13",price:"12000"},
  {name:"iphone12",price:"11000"},
  {name:"iphone17",price:"13000"},
  {name:"iphone15",price:"19000"},
  {name:"iphone16",price:"18000"},
  {name:"iphone11",price:"15000"},
  {name:"iphone14",price:"14000"},
  {name:"iphone18",price:"13000"},

]



  return (
    <div>
      {
        products.map((item)=>{
          return (
            <ProductCard name={item.name} price={item.price} />

          )
        })
  

 
      }
 
 </div>
  )
}

export default App;
