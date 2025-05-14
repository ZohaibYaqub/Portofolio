'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from '@/app/styles/header.module.css';
import { MdLightMode, MdDarkMode } from 'react-icons/md'; // Import both light and dark mode icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can also save the dark mode state in localStorage or cookies for persistent dark mode
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <div className={`${styles.header} ${isDarkMode ? styles['dark-mode'] : ''}`}>
        <Link href="/" className={styles.a}>
          <h2 className={styles.name}>&lt;/&gt;CodeWithZaibi</h2>
        </Link>
        <div className={styles.navbar}>
          <ul className={`${styles.navlist} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
            <li className={styles.li}><Link className={styles.a} href="/">Home</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/courses">Course</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/tutorial">Tutorial</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/notes">Notes</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/contact">Contact</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/workwithus">Work With Us</Link></li>
            <Link className="no-underline" href="/login"><button className={styles.button}>LogIn</button></Link>
            <Link className="no-underline" href="/signup"><button className={styles.button}>SignUp</button></Link>
          </ul>
          <i className={styles.drk} onClick={toggleDarkMode}>
            {isDarkMode ? (
              <MdLightMode /> // Show light mode icon when in dark mode
            ) : (
              <MdDarkMode /> // Show dark mode icon when not in dark mode
            )}
          </i>
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
            <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
