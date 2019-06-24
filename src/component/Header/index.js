import React from 'react' ;

function Header(props) {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      Click every single picture!
    </a>
    <h1 className="flex-sm-fill text-sm-center nav-link">Score: {props.score}</h1>
    <h1 className="flex-sm-fill text-sm-center nav-link">Time: {props.time}</h1>
  </nav>
    )
}

export default Header;