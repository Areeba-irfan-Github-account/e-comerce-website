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
        name: 'Appliances',
        price: 499,
        description: ' Essential home devices, aiding daily tasks, from cooking to cleaning.',
        image: 'image/small-appliances.jpg',
    },
    {
        id: 2,
        name: 'Mixer',
        price: 899,
        description: ' Kitchen tool for blending ingredients, versatile, used for baking, cooking.',
        image: '/image/mixer.png',
    },
    {
        id: 3,
        name: 'Kettle',
        price: 199,
        description: 'A smartwatch with fitness tracking and notification features.',
        image: '/image/Kettle.jpeg',
    },
    {
        id: 4,
        name: 'Jucer',
        price: 199,
        description: 'Extracts juice from fruits and vegetables, fresh, healthy beverage preparation.',
        image: '/image/jucer.jpg',
    },
    {
        id: 5,
        name: 'Spoons',
        price: 199,
        description: 'Utensils for eating, stirring, measuring, available in various sizes and materials.',
        image: '/image/spoons.jpg',
    },
    {
        id: 6,
        name: 'Pans',
        price: 199,
        description: ' Flat-bottomed cookware for frying, sautéing, baking, versatile kitchen essential.',
        image: '/image/pans.webp',
    },
];

const Electronics: React.FC = () => {
    return (<>
    <Nav/>
        <div className='bg-pink-400 h-full'>
            
            <div className="container mx-auto p-6 bg-pink-300">
                <h1 className=" flex items-center justify-center text-4xl font-extrabold mb-6 text-cyan-700 hover:underline cursor-pointer ">Home and Kitchen</h1>
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
