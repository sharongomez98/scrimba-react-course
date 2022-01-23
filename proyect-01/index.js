function List() {
  return (
      <div>
          <header>
            <nav>
              <img src="./react-logo.png" width="40px"/>
            </nav>
          </header>
          <h1>Reasons why I'm exited to be learning React</h1>
          <ol>
              <li>Is one of the most famous technologies.</li>
              <li>I want to work as a React Dev.</li>
              <li>I want to be part of the big community.</li>
          </ol>
          <footer>
            <small>© 2022 Gómez development. All rights reserved.</small>
          </footer>
      </div>
  )
}

ReactDOM.render(<List />, document.getElementById("root"))