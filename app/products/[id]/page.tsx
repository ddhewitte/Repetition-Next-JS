import MainLayout from "../../layouts/MainLayout";

interface ProductDetailProps {
  params: { id: string };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <MainLayout>
      <section>
        <h1 className="text-2xl font-bold mb-4">Detail Produk #{id}</h1>
        <p className="text-gray-600">
          Halaman detail untuk produk dengan ID {id}.
        </p>
      </section>
    </MainLayout>
  );
}
