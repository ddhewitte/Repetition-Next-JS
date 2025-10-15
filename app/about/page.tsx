import MainLayout from "../layouts/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">About MiniStore</h1>
        <p className="text-gray-600">
          MiniStore adalah project demo e-commerce berbasis Next.js, TailwindCSS, dan TypeScript.
        </p>
      </section>
    </MainLayout>
  );
}
