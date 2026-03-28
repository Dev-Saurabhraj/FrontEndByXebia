import "./Header.css";

export default function Header1() {
  return (
    <header>
      <div className="logo">News API</div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <button>Login</button>
    </header>
  );
}