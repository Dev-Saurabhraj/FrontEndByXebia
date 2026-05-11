export default function Header1() {
  return (
    <header className="bg-green-200 h-30 flex">
      <div >News API</div>
      <nav className="gap-10">
        <a href="/" className="text-black">Home</a>
        <a href="/about" className="text-black">About</a>
        <a href="/contact" className="text-black">Contact</a>
      </nav>
      <button className="">Login</button>
    </header>
  );
}