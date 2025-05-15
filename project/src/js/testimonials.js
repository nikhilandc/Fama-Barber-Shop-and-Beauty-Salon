import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function initTestimonials() {
  const testimonialsSection = document.querySelector('.testimonials-section');
  
  const testimonials = [
    {
      name: 'Michael Rodriguez',
      rating: 5,
      text: 'Best haircut I\'ve ever had. The barbers are skilled professionals who take their time to ensure you get exactly what you want.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'The salon services are fantastic! I got my hair colored and styled. The staff was friendly and knew exactly what I wanted.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    {
      name: 'David Thompson',
      rating: 4,
      text: 'Great beard trim and hot towel shave. Very relaxing experience and the results were excellent. Highly recommend!',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
    },
    {
      name: 'Jennifer Lee',
      rating: 5,
      text: 'I\'ve been going to Fama for years and have never been disappointed. The stylists are talented and always up-to-date with trends.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    }
  ];

  testimonialsSection.innerHTML = `
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">What Our Clients Say</h2>
      <p class="section-description" data-aos="fade-up" data-aos-delay="100">
        We take pride in our 4.6-star rating from over 116 reviews
      </p>
      
      <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200">
        <div class="swiper-wrapper">
          ${testimonials.map(testimonial => `
            <div class="swiper-slide">
              <div class="testimonial-card">
                <div class="testimonial-image">
                  <img src="${testimonial.image}" alt="${testimonial.name}">
                </div>
                <div class="testimonial-content">
                  <h3 class="testimonial-name">${testimonial.name}</h3>
                  <div class="testimonial-rating">
                    ${Array(5).fill().map((_, i) => `
                      <i class="fas fa-star${i >= testimonial.rating ? '-o' : ''}"></i>
                    `).join('')}
                  </div>
                  <p class="testimonial-text">"${testimonial.text}"</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  `;

  // Add testimonials styles to the document
  const style = document.createElement('style');
  style.textContent = `
    .testimonials-section {
      background-color: var(--color-white);
    }

    .testimonials-slider {
      padding-bottom: var(--space-xl);
    }

    .testimonial-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--color-white);
      border-radius: var(--border-radius-md);
      padding: var(--space-lg);
      box-shadow: var(--shadow-sm);
      text-align: center;
      margin: var(--space-xs);
    }

    .testimonial-image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: var(--space-sm);
      border: 3px solid var(--color-primary);
    }

    .testimonial-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .testimonial-name {
      margin-bottom: var(--space-xs);
    }

    .testimonial-rating {
      color: var(--color-secondary);
      margin-bottom: var(--space-sm);
    }

    .testimonial-text {
      font-style: italic;
      color: var(--color-gray-700);
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: var(--color-primary);
    }

    .swiper-pagination-bullet-active {
      background-color: var(--color-primary);
    }

    @media (max-width: 768px) {
      .testimonial-card {
        padding: var(--space-md);
      }
    }
  `;
  document.head.appendChild(style);

  // Initialize Swiper
  setTimeout(() => {
    new Swiper('.testimonials-slider', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }
    });
  }, 100);
}