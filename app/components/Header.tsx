export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">🛍️ MiniStore</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:text-blue-400">Home</a>
        <a href="/products" className="hover:text-blue-400">Products</a>
        <a href="/about" className="hover:text-blue-400">About</a>
      </nav>
    </header>
  );
}
