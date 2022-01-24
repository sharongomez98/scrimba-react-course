function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="40px" />
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Gómez development. All rights reserved.</small>
    </footer>
  );
}

function MainComponent() {
  return (
    <div>
      <h1>Reasons why I'm exited to be learning React</h1>
      <ol>
        <li>Is one of the most famous technologies.</li>
        <li>I want to work as a React Dev.</li>
        <li>I want to be part of the big community.</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
