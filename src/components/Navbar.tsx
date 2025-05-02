import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import scrollLock from 'scroll-lock';
import '../styles/main.css';
import logo from '../assets/logo.svg';

const Navbar: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const header = headerRef.current;
      if (!header) return;
      if (window.scrollY > 2) {
        header.classList.add('visible');
      } else {
        header.classList.remove('visible');
      }
      // Parallax effect
      document.querySelectorAll<HTMLElement>('.js-parallax').forEach((el) => {
        const elTop = el.offsetTop;
        const elHeight = el.offsetHeight;
        const elBottom = elTop + elHeight;
        const speed = Number(el.dataset.speed) || 1;
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const scrollBottom = scrollTop + windowHeight;
        if (scrollBottom > elTop && elBottom > scrollTop) {
          const degrees = ((scrollBottom - elTop) / (windowHeight + elHeight)) * 10 * speed;
          el.style.transform = `rotate(${degrees}deg)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Burger menu
    const burger = burgerRef.current;
    const wrapper = wrapperRef.current;
    const handleBurgerClick = () => {
      if (!burger || !wrapper) return;
      burger.classList.toggle('active');
      wrapper.classList.toggle('visible');
      if (burger.classList.contains('active')) {
        scrollLock.disablePageScroll();
      } else {
        scrollLock.enablePageScroll();
      }
    };
    burger?.addEventListener('click', handleBurgerClick);

    // AOS animation
    AOS.init({ once: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      burger?.removeEventListener('click', handleBurgerClick);
    };
  }, []);

  return (
    <header className="header js-header" ref={headerRef}>
      <div className="header__container container container_wide" data-scroll-lock-scrollable data-scroll-lock-fill-gap>
        <a className="header__logo" href="index.html">
          <img src={logo} alt="Onix" />
        </a>
        <button className="header__burger js-header-burger" ref={burgerRef}>
          <span></span>
          <span></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
            <mask id="A" fill="#fff">
              <path d="M12.799.586A2 2 0 0 1 14.213 0H38a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V14.213a2 2 0 0 1 .586-1.414L12.799.586z" />
            </mask>
            <path d="M.586 12.799l-1.414-1.414 1.414 1.414zM38 2H14.213v-4H38v4zm0 36V2h4v36h-4zM2 38h36v4H2v-4zm0-23.787V38h-4V14.213h4zm-2.828-2.828L11.385-.828 14.213 2 2 14.213-.828 11.385zM-2 14.213a4 4 0 0 1 1.172-2.828L2 14.213h-4zM2 42a4 4 0 0 1-4-4h4v4zm40-4a4 4 0 0 1-4 4v-4h0 4zM14.213 2h0L11.385-.828A4 4 0 0 1 14.213-2v4zM38-2a4 4 0 0 1 4 4h-4 0v-4z" fill="#eb5be5" mask="url(#A)" />
          </svg>
        </button>
        <div className="header__wrapper js-header-wrapper" ref={wrapperRef}>
          <div className="header__inner">
            <nav className="header__nav">
              <a className="header__link h2 active" href="index.html">Home</a>
              <a className="header__link h2" href="about-us.html">About us</a>
              <a className="header__link h2" href="https://ui8.net/" target="_blank" rel="noopener noreferrer">Community</a>
              <a className="header__link h2" href="blog.html">Blog</a>
              <a className="header__link h2" href="technology.html">Technology</a>
              <a className="header__link h2" href="careers.html">Careers</a>
            </nav>
          </div>
        </div>
        <a className="button header__button" href="/volunteer" target="_blank" rel="noopener noreferrer">
          <span>BECOME A VOLUNTEER</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;