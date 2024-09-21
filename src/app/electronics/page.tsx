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
        name: 'Smartphone',
        price: 499,
        description: 'A high-end smartphone with a large display and powerful processor.',
        image: 'image/mobile.png',
    },
    {
        id: 2,
        name: 'Laptop',
        price: 899,
        description: 'A lightweight laptop with a sleek design and long battery life.',
        image: '/image/laptop.jpeg',
    },
    {
        id: 3,
        name: 'Smartwatch',
        price: 199,
        description: 'A smartwatch with fitness tracking and notification features.',
        image: '/image/smart_watch.avif',
    },
    {
        id: 4,
        name: 'Mouse',
        price: 199,
        description: 'A smartwatch with fitness tracking and notification features.',
        image: '/image/mouse.jpeg',
    },
    {
        id: 5,
        name: 'HeadPhone',
        price: 199,
        description: 'A smartwatch with fitness tracking and notification features.',
        image: '/image/headphones.webp',
    },
    {
        id: 6,
        name: 'Camera',
        price: 199,
        description: 'A smartwatch with fitness tracking and notification features.',
        image: '/image/camera.jpg',
    },
];

const Electronics: React.FC = () => {
    return (<>
        <div className='bg-pink-400 h-full'>
            <Nav />
            <div className="container mx-auto p-6 bg-pink-300">
                <h1 className=" flex items-center justify-center text-4xl font-extrabold mb-6 text-cyan-700 hover:underline cursor-pointer ">Electronics Items</h1>
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
