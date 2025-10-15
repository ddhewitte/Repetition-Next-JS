// Tidak perlu 'use client' karena kita fetch di server

interface Product {
  id: number;
  name: string;
  price: number;
}

async function getProducts(): Promise<Product[]> {
  // Simulasi API call (mock data)
  const mockData = [
    { id: 1, name: "Kopi Hitam", price: 25000 },
    { id: 2, name: "Gula Aren", price: 8000 },
    { id: 3, name: "Teh Melati", price: 15000 },
  ];

  // Simulasi delay API
  await new Promise((resolve) => setTimeout(resolve, 500));

  return mockData;
}

export default async function ApiDemoPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-2xl font-bold">📦 Fetch API (Mock Data)</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-600">Rp {item.price.toLocaleString('id-ID')}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
