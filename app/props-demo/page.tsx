import ProductCard from "../components/ProductCard";

export default function PropsDemoPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-2xl font-bold">🧩 Latihan Props & Component Reuse</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        <ProductCard name="Kopi Hitam Premium" price={25000} />
        <ProductCard name="Gula Aren Sachet" price={8000} />
        <ProductCard name="Teh Melati 100gr" price={15000} inStock={false} />
      </div>
    </main>
  );
}
