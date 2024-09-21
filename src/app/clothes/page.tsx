import React from 'react';
import Nav from '../../../components/Navbar';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Shoes',
        price: 499,
        description: ' Footwear, protective, supportive, various styles, essential for all occasions',
        image: '/image/shoes.jpg',
    },
    {
        id: 2,
        name: 'Jeans',
        price: 899,
        description: 'Jeans: Durable denim pants, classic, versatile, casual or dressed up.',
        image: '/image/jeans.png',
    },
    {
        id: 3,
        name: 'T-Shirts',
        price: 199,
        description: 'Simple, comfortable, short-sleeved, casual wear, often graphic prints.',
        image: '/image/t-shirt.webp',
    },
    {
        id: 4,
        name: 'Scarfs',
        price: 199,
        description: 'Fashionable accessory, warmth or style, various materials and patterns',
        image: '/image/scarf.jpg',
    },
    {
        id: 5,
        name: 'Top',
        price: 199,
        description: 'Top: Upper body garment, versatile, stylish, various designs and fabrics.',
        image: 'image/top.jpeg',
    },
    {
        id: 6,
        name: 'Heals',
        price: 199,
        description: ' Raised heel shoes, elegant, formal, elongate legs, sophisticated appearance.',
        image: '/image/Heals.webp',
    },
];

const Electronics: React.FC = () => {

    return (<>
    
        <div className='bg-pink-400 h-full'>
            <Nav />
            <div className="container mx-auto p-6 bg-pink-300">
                <h1 className=" flex items-center justify-center text-4xl font-extrabold mb-6 text-cyan-700 hover:underline cursor-pointer ">Clothes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-2xl hover:p-2 hover:m-2 transition-shadow duration-300">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">${product.price}</p>
                            <p className="text-gray-800 mt-2">{product.description}</p>
                            <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition-colors duration-300">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
    );
};

export default Electronics;
