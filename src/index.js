import React from "react";
import ReactDOM from "react-dom";

// Creating React Component
function Header() {
  return (
    <header className="header">
      <nav className="flex-container">
        <img
          className="img"
          src="https://cdn.freebiesupply.com/logos/thumbs/2x/react-1-logo.png"
        />
        <ul className="nav-item">
          <li className="li-item">Pricing </li>
          <li className="li-item">About </li>
          <li className="li-item">Content </li>
        </ul>
      </nav>
    </header>
  );
}
function MainContent() {
  return (
    <div className="main-content">
      <h1 className="h1">Reasons Why I love React </h1>
      <ul>
        <li className="li">Its Famous js library</li>
        <li className="li">Easy to learn</li>
        <li className="li">It's allow to reuse</li>
        <li className="li">Grear learning </li>
      </ul>
    </div>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <small> @Copy Navin Kumar </small>
    </footer>
  );
}
function CustomPage() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<CustomPage />, document.getElementById("root"));
