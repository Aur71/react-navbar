import React from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { data, social } from './data';

const App = () => {
  const links = data;

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <header>
      <nav>
        <div className="logo-btn">
          <h1>
            LO<span>GO</span>
          </h1>
          <GiHamburgerMenu
            className="toggle-btn"
            onClick={() => setShowLinks(!showLinks)}
          />
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ol ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.path}>{link.name}</a>
                </li>
              );
            })}
          </ol>
        </div>

        <ul>
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a className="icon" href={item.path}>
                  {item.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default App;
