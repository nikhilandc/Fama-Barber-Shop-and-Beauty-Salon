export function initServices() {
  const servicesSection = document.querySelector('.services-section');
  
  servicesSection.innerHTML = `
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Our Premium Services</h2>
      <p class="section-description" data-aos="fade-up" data-aos-delay="100">
        Experience top-notch grooming and beauty services by our skilled professionals
      </p>
      
      <div class="services-grid">
        <div class="service-card" data-aos="fade-up" data-aos-delay="150">
          <div class="service-icon">
            <i class="fas fa-cut"></i>
          </div>
          <h3 class="service-title">Men's Haircut</h3>
          <p class="service-description">Classic or modern styles with precision cutting and styling.</p>
          <div class="service-price">$25+</div>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="200">
          <div class="service-icon">
            <i class="fas fa-user-tie"></i>
          </div>
          <h3 class="service-title">Beard Trim</h3>
          <p class="service-description">Meticulous beard shaping and grooming for the perfect look.</p>
          <div class="service-price">$15+</div>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="250">
          <div class="service-icon">
            <i class="fas fa-palette"></i>
          </div>
          <h3 class="service-title">Hair Coloring</h3>
          <p class="service-description">Professional coloring services for vibrant, long-lasting results.</p>
          <div class="service-price">$60+</div>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="300">
          <div class="service-icon">
            <i class="fas fa-shower"></i>
          </div>
          <h3 class="service-title">Shampoo & Style</h3>
          <p class="service-description">Revitalizing hair wash with professional styling.</p>
          <div class="service-price">$35+</div>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="350">
          <div class="service-icon">
            <i class="fas fa-user-cog"></i>
          </div>
          <h3 class="service-title">Hot Towel Shave</h3>
          <p class="service-description">Traditional hot towel shave for a smooth, refreshed experience.</p>
          <div class="service-price">$30+</div>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="400">
          <div class="service-icon">
            <i class="fas fa-spa"></i>
          </div>
          <h3 class="service-title">Facial Treatment</h3>
          <p class="service-description">Rejuvenating facial treatments for healthier-looking skin.</p>
          <div class="service-price">$45+</div>
        </div>
      </div>
      
      <div class="service-note" data-aos="fade-up" data-aos-delay="450">
        <p>All services include a consultation to ensure you get exactly what you're looking for.</p>
        <a href="#booking" class="btn btn-primary">Book a Service</a>
      </div>
    </div>
  `;

  // Add services styles to the document
  const style = document.createElement('style');
  style.textContent = `
    .services-section {
      background-color: var(--color-gray-100);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--space-md);
      margin-bottom: var(--space-lg);
    }

    .service-card {
      background-color: var(--color-white);
      border-radius: var(--border-radius-md);
      padding: var(--space-lg);
      box-shadow: var(--shadow-sm);
      transition: var(--transition-standard);
      text-align: center;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
    }

    .service-icon {
      font-size: 2.5rem;
      color: var(--color-primary);
      margin-bottom: var(--space-sm);
    }

    .service-title {
      margin-bottom: var(--space-xs);
      font-size: 1.5rem;
    }

    .service-description {
      color: var(--color-gray-700);
      margin-bottom: var(--space-sm);
      height: 4.5rem;
    }

    .service-price {
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--color-primary);
    }

    .service-note {
      text-align: center;
      background-color: var(--color-white);
      border-radius: var(--border-radius-md);
      padding: var(--space-md);
      box-shadow: var(--shadow-sm);
      max-width: 600px;
      margin: 0 auto;
    }

    .service-note p {
      margin-bottom: var(--space-sm);
    }

    @media (max-width: 992px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 576px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(style);
}