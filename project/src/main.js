import './css/style.css';
import { initNavigation } from './js/navigation.js';
import { initHero } from './js/hero.js';
import { initServices } from './js/services.js';
import { initGallery } from './js/gallery.js';
import { initTestimonials } from './js/testimonials.js';
import { initContact } from './js/contact.js';
import { initBooking } from './js/booking.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS (Animation On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Build the app structure
  buildAppStructure();
  
  // Initialize components
  initNavigation();
  initHero();
  initServices();
  initGallery();
  initTestimonials();
  initContact();
  initBooking();
});

function buildAppStructure() {
  const app = document.getElementById('app');
  
  // Create main sections
  app.innerHTML = `
    <header id="header" class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a href="/">
              <img src="/scissors.svg" alt="Fama Logo" class="logo-icon">
              <span>Fama</span>
            </a>
          </div>
          <nav class="nav-menu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div class="book-now">
            <a href="#booking" class="btn btn-primary">Book Now</a>
          </div>
          <button class="mobile-menu-toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>
      </div>
    </header>
    
    <main>
      <section id="home" class="section hero-section"></section>
      <section id="services" class="section services-section"></section>
      <section id="gallery" class="section gallery-section"></section>
      <section id="testimonials" class="section testimonials-section"></section>
      <section id="contact" class="section contact-section"></section>
      <section id="booking" class="section booking-section"></section>
    </main>
    
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="/scissors.svg" alt="Fama Logo" class="logo-icon">
            <span>Fama</span>
          </div>
          <div class="footer-info">
            <p>&copy; ${new Date().getFullYear()} Fama Barber Shop & Beauty Salon. All rights reserved.</p>
            <p>500 N Bell Ave #109, Denton, TX 76209, United States</p>
          </div>
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  `;
}