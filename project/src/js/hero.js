export function initHero() {
  const heroSection = document.querySelector('.hero-section');
  
  heroSection.innerHTML = `
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-text" data-aos="fade-up">
          <h1>Fama Barber Shop</h1>
          <h2 class="hero-subtitle">&amp; Beauty Salon</h2>
          <p class="hero-description">Experience premium grooming and styling services</p>
          <div class="hero-info">
            <div class="hero-rating">
              <i class="fas fa-star"></i>
              <span>4.6 stars (116+ reviews)</span>
            </div>
            <div class="hero-status">
              <i class="far fa-clock"></i>
              <span>Open · Closes 7pm</span>
            </div>
          </div>
          <div class="hero-buttons">
            <a href="#booking" class="btn btn-primary">Book Appointment</a>
            <a href="#contact" class="btn btn-outline">Get Directions</a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Add hero styles to the document
  const style = document.createElement('style');
  style.textContent = `
    .hero-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: var(--header-height);
      overflow: hidden;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .hero-content {
      position: relative;
      z-index: 1;
      color: var(--color-white);
      padding: var(--space-xl) 0;
    }

    .hero-text {
      max-width: 600px;
    }

    .hero-text h1 {
      color: var(--color-white);
      margin-bottom: var(--space-xs);
      font-size: 3.5rem;
    }

    .hero-subtitle {
      color: var(--color-secondary);
      font-size: 2.5rem;
      margin-bottom: var(--space-md);
    }

    .hero-description {
      font-size: 1.25rem;
      margin-bottom: var(--space-md);
    }

    .hero-info {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-md);
      margin-bottom: var(--space-md);
    }

    .hero-rating, .hero-status {
      display: flex;
      align-items: center;
    }

    .hero-rating i, .hero-status i {
      color: var(--color-secondary);
      margin-right: var(--space-xs);
    }

    .hero-buttons {
      display: flex;
      gap: var(--space-sm);
      flex-wrap: wrap;
    }

    @media (max-width: 768px) {
      .hero-text h1 {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.8rem;
      }
    }
  `;
  document.head.appendChild(style);
}