"use client"
// components/HeroSection.tsx
import Categories from '../components/Categories';
const HeroSection: React.FC = () => {
  const handleScroll = (): void => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (

    <>

      <section
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg')" }}
      >
        <div className="text-center ">
          <h1 className="text-6xl md:text-7xl text-pink-600 font-extrabold mb-4">Welcome to Our Store</h1>
          <p className="text-lg md:text-3xl font-extrabold text-black mb-8">
            Discover amazing products at unbeatable prices
          </p>
          <button
            className="bg-pink-600 font-bold text-white p-4 rounded-lg"
            onClick={handleScroll as React.MouseEventHandler<HTMLButtonElement>}
          >
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
