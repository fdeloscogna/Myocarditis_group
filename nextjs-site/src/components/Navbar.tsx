'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#team', label: 'Team' },
  { href: '#education', label: 'CARDIM Master' },
  { href: '#publications', label: 'Publications' },
  { href: '#network', label: 'Network' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarInner}>
            <div>
              <i className="fas fa-university"></i> University of Padova, Department of Cardiac, Thoracic, Vascular Sciences and Public Health
            </div>
            <div className={styles.topBarLinks}>
              <a href="https://uel.unipd.it/master-e-corsi/cardim-cardioimmunologia/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-graduation-cap"></i> CARDIM Master
              </a>
              <a href="https://www.escardio.org/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-heartbeat"></i> ESC Official
              </a>
              <a href="https://www.unipd.it/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i> UniPD.it
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.navInner}>
            <Link href="#" className={styles.navLogo}>
              <div className={styles.logoBadge}>
                <i className="fas fa-heart-pulse"></i>
              </div>
              <div className={styles.logoText}>
                Cardioimmunology Lab
                <span>University of Padova</span>
              </div>
            </Link>

            <ul className={styles.navLinks}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="#contact" className={styles.navCta}>Collaborate</a>
              </li>
            </ul>

            <button 
              className={styles.hamburger} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeBtn} onClick={() => setMobileMenuOpen(false)}>×</button>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Collaborate</a>
        </div>
      )}
    </>
  );
}
