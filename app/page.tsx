import MainLayout from "./layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to MiniStore 🛒
        </h1>
        <p className="text-gray-600">
          Your demo e-commerce built with Next.js + Tailwind + TypeScript.
        </p>
      </section>
    </MainLayout>
  );
}
