export function initContact() {
  const contactSection = document.querySelector('.contact-section');
  
  contactSection.innerHTML = `
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Visit Us Today</h2>
      <p class="section-description" data-aos="fade-up" data-aos-delay="100">
        Schedule your appointment or drop by our location
      </p>
      
      <div class="contact-container">
        <div class="contact-map" data-aos="fade-up" data-aos-delay="150">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.6779963692253!2d-97.1343762!3d33.2278032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4ca0a8acd665%3A0xad02f121f2dc36bb!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209!5e0!3m2!1sen!2sus!4v1654789542759!5m2!1sen!2sus"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        
        <div class="contact-info" data-aos="fade-up" data-aos-delay="200">
          <h3>Contact Information</h3>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-text">
              <h4>Address</h4>
              <p>500 N Bell Ave #109, Denton, TX 76209, United States</p>
              <a href="https://maps.google.com/?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209,+United+States" target="_blank" class="contact-link">Get Directions</a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="contact-text">
              <h4>Phone</h4>
              <p><a href="tel:+19406129127">+1 940-612-9127</a></p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-text">
              <h4>Email</h4>
              <p><a href="mailto:info@famabarber.com">info@famabarber.com</a></p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-clock"></i>
            </div>
            <div class="contact-text">
              <h4>Hours</h4>
              <div class="hours-grid">
                <div class="day">Monday:</div>
                <div class="hours">9:00 AM - 7:00 PM</div>
                <div class="day">Tuesday:</div>
                <div class="hours">9:00 AM - 7:00 PM</div>
                <div class="day">Wednesday:</div>
                <div class="hours">9:00 AM - 7:00 PM</div>
                <div class="day">Thursday:</div>
                <div class="hours">9:00 AM - 7:00 PM</div>
                <div class="day">Friday:</div>
                <div class="hours">9:00 AM - 7:00 PM</div>
                <div class="day">Saturday:</div>
                <div class="hours">9:00 AM - 6:00 PM</div>
                <div class="day">Sunday:</div>
                <div class="hours">Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Add contact styles to the document
  const style = document.createElement('style');
  style.textContent = `
    .contact-section {
      background-color: var(--color-gray-100);
    }

    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-lg);
    }

    .contact-map {
      border-radius: var(--border-radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }

    .contact-info {
      background-color: var(--color-white);
      border-radius: var(--border-radius-md);
      padding: var(--space-lg);
      box-shadow: var(--shadow-sm);
    }

    .contact-info h3 {
      margin-bottom: var(--space-md);
      color: var(--color-primary);
      border-bottom: 2px solid var(--color-primary);
      padding-bottom: var(--space-xs);
    }

    .contact-item {
      display: flex;
      margin-bottom: var(--space-md);
    }

    .contact-icon {
      color: var(--color-primary);
      font-size: 1.5rem;
      margin-right: var(--space-sm);
      min-width: 30px;
    }

    .contact-text h4 {
      margin-bottom: var(--space-xs);
      font-size: 1.1rem;
    }

    .contact-text p {
      color: var(--color-gray-700);
      margin-bottom: var(--space-xs);
    }

    .contact-link {
      display: inline-block;
      color: var(--color-primary);
      font-weight: 500;
    }

    .hours-grid {
      display: grid;
      grid-template-columns: 100px 1fr;
      gap: 0.25rem var(--space-xs);
    }

    .day {
      font-weight: 500;
    }

    @media (max-width: 992px) {
      .contact-container {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(style);
}