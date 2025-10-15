// components/ProductList.tsx
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

async function fetchProducts(): Promise<Product[]> {
  // fake store API - kita set no-store agar selalu fresh (dev)
  const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch products from FakeStoreAPI");
  }
  const data = await res.json();
  return data as Product[];
}

/**
 * Server Component: ProductList
 * - async component yang fetch data server-side
 * - mengembalikan markup statis (seragam) -> aman dari hydration mismatch
 */
export default async function ProductList() {
  const products = await fetchProducts();

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Produk Terbaru</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <article
            key={p.id}
            className="border rounded-lg p-4 hover:shadow-lg transition flex flex-col"
          >
            {/* Image - gunakan <img> sederhana (untuk menghindari config next/image) */}
            <div className="flex-1 flex items-center justify-center mb-4">
              <img src={p.image} alt={p.title} className="max-h-36 object-contain" />
            </div>

            <div className="mb-3">
              <h3 className="font-semibold text-sm line-clamp-2">{p.title}</h3>
              {/* pastikan format angka konsisten server+client (pakai toFixed atau locale 'id-ID') */}
              <p className="text-gray-700 font-medium mt-2">Rp {p.price.toLocaleString("id-ID", { maximumFractionDigits: 0 })}</p>
            </div>

            <div className="mt-auto pt-2">
              <Link
                href={`/products/${p.id}`}
                className="inline-block w-full text-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
              >
                Lihat Detail
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
