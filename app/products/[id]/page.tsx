// app/products/[id]/page.tsx
import MainLayout from "../../layouts/MainLayout";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch product detail");
  }
  return res.json();
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ Next 15: params harus di-await dulu (karena asynchronous)
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        {/* Tombol kembali */}
        <div className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            ← Kembali ke Produk
          </Link>
        </div>

        {/* Detail produk */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gambar produk */}
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-80 object-contain"
            />
          </div>

          {/* Info produk */}
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-500 mb-4 capitalize">{product.category}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-semibold text-green-700">
                Rp {product.price.toLocaleString("id-ID", { maximumFractionDigits: 0 })}
              </span>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
