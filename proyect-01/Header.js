export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img src="./react-logo.png" className="nav-bar-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}