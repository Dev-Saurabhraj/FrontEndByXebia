import { useState } from 'react'
import Header from './components/Header.jsx'
import ProductCart from './components/ProductCard.jsx';
import ProductList from './components/ProductList.jsx';

function App() {
  const [cart, setCart] = useState([]);
const products = [
  {id: 1, name: "Laptop", price: 6000, photoUrl: "https://images.pexels.com/photos/18105/pexels-photo.jpg"},
  {id: 2, name: "Phone", price: 5000, photoUrl: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"},
  {id: 3, name: "Shoes", price: 400, photoUrl: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"},
  {id: 4, name: "Book", price: 299, photoUrl: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"},
  {id: 5, name: "Headphone", price: 2000, photoUrl: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"},
  {id: 6, name: "React Book", price: 900, photoUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"},
  {id: 7, name: "Keyboard", price: 1200, photoUrl: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg"},
  {id: 8, name: "Mouse", price: 600, photoUrl: "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg"},
  {id: 9, name: "Monitor", price: 8500, photoUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"},
  {id: 10, name: "Tablet", price: 7000, photoUrl: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg"},
  {id: 11, name: "Charger", price: 500, photoUrl: "https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg"},
  {id: 12, name: "Camera", price: 15000, photoUrl: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"},
  {id: 13, name: "Speaker", price: 1800, photoUrl: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"},
  {id: 14, name: "Smart Watch", price: 3500, photoUrl: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"},
  {id: 15, name: "Power Bank", price: 900, photoUrl: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg"},
  {id: 16, name: "Bag", price: 1100, photoUrl: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg"},
  {id: 17, name: "Gaming Console", price: 25000, photoUrl: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"},
  {id: 18, name: "Printer", price: 6500, photoUrl: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg"},
  {id: 19, name: "Router", price: 2200, photoUrl: "https://images.pexels.com/photos/4219860/pexels-photo-4219860.jpeg"},
  {id: 20, name: "Microphone", price: 3000, photoUrl: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"},
  {id: 21, name: "Tripod", price: 750, photoUrl: "https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg"},
  {id: 22, name: "SSD", price: 4200, photoUrl: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"},
  {id: 23, name: "Hard Disk", price: 3800, photoUrl: "https://images.pexels.com/photos/159220/hard-drive-data-storage-technology-159220.jpeg"},
  {id: 24, name: "VR Headset", price: 12000, photoUrl: "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg"},
  {id: 25, name: "Drone", price: 28000, photoUrl: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg"}
];       

function addToCart(product){
  setCart([...products, product]);
}
  return (
    <>
      <div>
        <Header  cardCount={products.length}></Header>
        <ProductList products={products}/>
       
      </div>
    </>
  )
}

export default App
