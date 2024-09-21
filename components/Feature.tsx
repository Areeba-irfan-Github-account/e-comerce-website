// components/FeaturedProducts.tsx
import image from '../image/product.jpeg';
import Nav from './Navbar';
interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
  }
  
  const products: Product[] = [
    { id: 1, name: "Ladies Scarf", price: "$29.99", description: "This is a soft scarf.", image: "image/scaf.jpg" },
    { id: 2, name: "Nike Shoes", price: "$39.99", description: "This is a confortable shoes.", image: "   image/shoes.jpg" },
    { id: 3, name: "Gold Ring", price: "$49.99", description: "This is precious one .", image: "image/ring.jpg" },
  ];
  
  const FeaturedProducts: React.FC = () => {
    return (
      <>
    
      <section className="py-12 bg-pink-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-6 hover:underline cursor-pointer">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl hover:p-2 hover:m-2 transition-shadow duration-300">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-xl font-bold mb-4">{product.price}</p>
                <a href="#" className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-500 transition">Buy Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
      
    );
  };
  
  export default FeaturedProducts;
  