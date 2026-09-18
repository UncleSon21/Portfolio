import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";

// Links point at "/#section" so they also work from a blog post page, not only on the home page.
const toSection = (hash) => ({ pathname: "/", hash });

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  // mobile menu open/closed
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled || menuOpen ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Link to={toSection("#hero")} className="logo" onClick={closeMenu}>
          Hung Son Le
        </Link>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <Link to={toSection(link)}>
                  <span>{name}</span>
                  <span className="underline" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link to={toSection("#contact")} className="contact-btn group" onClick={closeMenu}>
            <div className="inner">
              <span>Contact me</span>
            </div>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <img src="/images/menu.svg" alt="" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <Link to={toSection(link)} onClick={closeMenu}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
