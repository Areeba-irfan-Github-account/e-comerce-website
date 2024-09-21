// components/Promotions.tsx
const Promotions: React.FC = () => {
    return (
      <section className="py-12 bg-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Special Offers Just for You!</h2>
            <p className="text-lg mb-8">Get up to 50% off on selected items</p>
            <a href="#" className="bg-white text-pink-600 py-3 px-6 rounded-lg hover:bg-gray-200 transition">Shop Now</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Promotions;
  