// components/CategoriesSection.tsx



interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
}

const CategoriesSection: Category[] = [
  { id: 1, name: "Electronics", image: "image/iron.jpeg", link: "/electronics" },
  { id: 2, name: "Clothing", image: "image/cloth.jpeg", link: `/clothes` },
  { id: 3, name: "Home & Kitchen", image: "image/home and ketchen.jpeg", link: "/home-and-kitchen" },
];

const Categories: React.FC = () => {
  return (
    <>
     
      <section className="py-12 bg-pink-300">
      <section id="categories" className="my-8">
 
    </section>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-6 hover:underline cursor-pointer">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CategoriesSection.map((category) => (
              <a
                href={category.link}
                key={category.id}
                className="block bg-pink-600 rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:p-2 hover:m-2 transition-shadow duration-300"
              >
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
