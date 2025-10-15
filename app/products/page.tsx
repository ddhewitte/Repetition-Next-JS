// app/products/page.tsx
import MainLayout from "../layouts/MainLayout";
import ProductList from "../components/ProductList"; // server component

export default async function ProductsPage() {
  return (
    <MainLayout>
      {/* Title / intro */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold">🛍️ Products</h1>
        <p className="text-gray-600">Explore products from FakeStoreAPI.</p>
      </section>

      {/* Server component yang fetch list produk */}
      <ProductList />
    </MainLayout>
  );
}