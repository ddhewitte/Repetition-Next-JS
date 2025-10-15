import MainLayout from "../layouts/MainLayout";

export default function ProductsPage() {
  return (
    <MainLayout>
      <section>
        <h1 className="text-3xl font-bold mb-4">🛍️ Product List</h1>
        <p className="text-gray-600 mb-8">Daftar produk dari FakeStoreAPI akan muncul di sini.</p>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <li
              key={id}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <a href={`/products/${id}`} className="text-blue-500 font-medium">
                Product {id}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </MainLayout>
  );
}
