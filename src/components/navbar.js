import React from "react";

const Styles = {
    nav: {
        fontWeight: 900
    }
}
function Navbar(props) {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1" style={Styles.nav}>Clicky Game</span>
    </nav>
  );
}

export default Navbar;
