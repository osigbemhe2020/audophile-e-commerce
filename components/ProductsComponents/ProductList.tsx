type Product = {
  name: string;
  description: string;
  isNew: boolean;
  image: string;
};

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="space-y-12">
      {products.map((product, index) => (
        <div key={index} className="bg-gray-100 max-w-5xl mx-auto p-8 grid grid-cols-2 gap-8 rounded-lg">
          <div>
            <img src={product.image} alt={product.name} />
          </div>
          <div className="max-w-[450px]">
          {product.isNew && (
            <p className="text-orange-500 uppercase tracking-widest mb-2">
              New Product
            </p>
          )}
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
