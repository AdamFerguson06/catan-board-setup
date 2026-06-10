import { ReactNode } from 'react';
import './chrome.css';

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand">
          <img
            className="site-header__logo"
            src="/Robber-Pirate-Catan-logo 1.png"
            alt="Catan robber logo"
          />
          <h1 className="site-header__title">Catan Board</h1>
        </div>
        {children}
      </div>
    </header>
  );
}
