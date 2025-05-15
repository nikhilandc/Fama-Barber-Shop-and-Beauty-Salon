export function initBooking() {
  const bookingSection = document.querySelector('.booking-section');
  
  bookingSection.innerHTML = `
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Book an Appointment</h2>
      <p class="section-description" data-aos="fade-up" data-aos-delay="100">
        Reserve your slot for a premium grooming experience
      </p>
      
      <div class="booking-container" data-aos="fade-up" data-aos-delay="150">
        <form class="booking-form" id="bookingForm">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required>
          </div>
          
          <div class="form-group">
            <label for="service">Service</label>
            <select id="service" name="service" required>
              <option value="">Select a service</option>
              <option value="mens-haircut">Men's Haircut ($25+)</option>
              <option value="beard-trim">Beard Trim ($15+)</option>
              <option value="hair-coloring">Hair Coloring ($60+)</option>
              <option value="shampoo-style">Shampoo & Style ($35+)</option>
              <option value="hot-towel-shave">Hot Towel Shave ($30+)</option>
              <option value="facial-treatment">Facial Treatment ($45+)</option>
            </select>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="date">Date</label>
              <input type="date" id="date" name="date" required>
            </div>
            
            <div class="form-group">
              <label for="time">Time</label>
              <select id="time" name="time" required>
                <option value="">Select time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
              </select>
            </div>
          </div>
          
          <div class="form-group">
            <label for="notes">Special Requests (Optional)</label>
            <textarea id="notes" name="notes" rows="3"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary booking-submit">Book Appointment</button>
        </form>
        
        <div class="booking-info">
          <h3>Booking Information</h3>
          
          <div class="info-item">
            <i class="fas fa-info-circle"></i>
            <p>Appointments must be booked at least 24 hours in advance.</p>
          </div>
          
          <div class="info-item">
            <i class="fas fa-clock"></i>
            <p>Please arrive 10 minutes before your scheduled appointment.</p>
          </div>
          
          <div class="info-item">
            <i class="fas fa-money-bill-wave"></i>
            <p>We accept cash, credit cards, and digital payments.</p>
          </div>
          
          <div class="info-item">
            <i class="fas fa-ban"></i>
            <p>Cancellations should be made at least 6 hours before your appointment.</p>
          </div>
          
          <div class="info-item">
            <i class="fas fa-phone-alt"></i>
            <p>For questions or urgent bookings, please call us at <a href="tel:+19406129127">+1 940-612-9127</a></p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Add booking styles to the document
  const style = document.createElement('style');
  style.textContent = `
    .booking-section {
      background-color: var(--color-white);
    }

    .booking-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-lg);
    }

    .booking-form {
      background-color: var(--color-white);
      border-radius: var(--border-radius-md);
      padding: var(--space-lg);
      box-shadow: var(--shadow-sm);
    }

    .form-group {
      margin-bottom: var(--space-md);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-md);
    }

    label {
      display: block;
      margin-bottom: var(--space-xs);
      font-weight: 500;
      color: var(--color-gray-800);
    }

    input, select, textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--color-gray-300);
      border-radius: var(--border-radius-sm);
      font-family: var(--font-body);
      color: var(--color-gray-800);
      transition: var(--transition-standard);
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(139, 0, 0, 0.1);
    }

    .booking-submit {
      width: 100%;
      padding: 0.75rem;
      font-weight: 600;
    }

    .booking-info {
      background-color: var(--color-gray-100);
      border-radius: var(--border-radius-md);
      padding: var(--space-lg);
      box-shadow: var(--shadow-sm);
    }

    .booking-info h3 {
      margin-bottom: var(--space-md);
      color: var(--color-primary);
      border-bottom: 2px solid var(--color-primary);
      padding-bottom: var(--space-xs);
    }

    .info-item {
      display: flex;
      margin-bottom: var(--space-sm);
    }

    .info-item i {
      color: var(--color-primary);
      margin-right: var(--space-sm);
      min-width: 24px;
      margin-top: 4px;
    }

    @media (max-width: 992px) {
      .booking-container {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 576px) {
      .form-row {
        grid-template-columns: 1fr;
        gap: var(--space-sm);
      }
    }
  `;
  document.head.appendChild(style);

  // Add booking form functionality
  setTimeout(() => {
    const bookingForm = document.getElementById('bookingForm');
    
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // In a real application, you would send this data to a server
      // For this demo, we'll just show an alert
      alert('Thank you for booking! We will confirm your appointment shortly.');
      bookingForm.reset();
    });

    // Set min date to today for date picker
    const dateInput = document.getElementById('date');
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const todayFormatted = `${yyyy}-${mm}-${dd}`;
    dateInput.min = todayFormatted;
  }, 100);
}