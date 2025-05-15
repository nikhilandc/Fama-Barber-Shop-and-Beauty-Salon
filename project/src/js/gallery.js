export function initGallery() {
  const gallerySection = document.querySelector('.gallery-section');
  
  // Gallery images from Pexels
  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg',
      category: 'haircuts'
    },
    {
      src: 'https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg',
      category: 'beard'
    },
    {
      src: 'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg',
      category: 'salon'
    },
    {
      src: 'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg',
      category: 'haircuts'
    },
    {
      src: 'https://images.pexels.com/photos/3998430/pexels-photo-3998430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'beard'
    },
    {
      src: 'https://images.pexels.com/photos/897270/pexels-photo-897270.jpeg',
      category: 'salon'
    }
  ];

  gallerySection.innerHTML = `
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Our Gallery</h2>
      <p class="section-description" data-aos="fade-up" data-aos-delay="100">
        Browse through our collection of premium haircuts and styles
      </p>
      
      <div class="gallery-filters" data-aos="fade-up" data-aos-delay="150">
        <button class="gallery-filter active" data-filter="all">All</button>
        <button class="gallery-filter" data-filter="haircuts">Haircuts</button>
        <button class="gallery-filter" data-filter="beard">Beard</button>
        <button class="gallery-filter" data-filter="salon">Salon</button>
      </div>
      
      <div class="gallery-grid">
        ${galleryImages.map((image, index) => `
          <div class="gallery-item" data-category="${image.category}" data-aos="fade-up" data-aos-delay="${200 + (index * 50)}">
            <img src="${image.src}" alt="${image.category} image" loading="lazy">
            <div class="gallery-overlay">
              <div class="gallery-info">
                <span class="gallery-category">${image.category}</span>
                <a href="${image.src}" class="gallery-zoom" target="_blank">
                  <i class="fas fa-search-plus"></i>
                </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Add gallery styles to the document
  const style = document.createElement('style');
  style.textContent = `
    .gallery-filters {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: var(--space-xs);
      margin-bottom: var(--space-lg);
    }

    .gallery-filter {
      padding: 0.5rem 1.25rem;
      background-color: var(--color-gray-200);
      border: none;
      border-radius: var(--border-radius-md);
      cursor: pointer;
      font-weight: 500;
      transition: var(--transition-standard);
    }

    .gallery-filter:hover {
      background-color: var(--color-gray-300);
    }

    .gallery-filter.active {
      background-color: var(--color-primary);
      color: var(--color-white);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--space-md);
    }

    .gallery-item {
      position: relative;
      border-radius: var(--border-radius-md);
      overflow: hidden;
      height: 250px;
      cursor: pointer;
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: var(--transition-standard);
    }

    .gallery-item:hover .gallery-overlay {
      opacity: 1;
    }

    .gallery-item:hover img {
      transform: scale(1.1);
    }

    .gallery-info {
      text-align: center;
      color: var(--color-white);
      padding: var(--space-sm);
    }

    .gallery-category {
      display: block;
      text-transform: capitalize;
      font-weight: 500;
      margin-bottom: var(--space-xs);
    }

    .gallery-zoom {
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--color-primary);
      color: var(--color-white);
      line-height: 40px;
      font-size: 1rem;
    }

    @media (max-width: 992px) {
      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 576px) {
      .gallery-grid {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(style);

  // Add gallery filtering functionality
  setTimeout(() => {
    const filterButtons = document.querySelectorAll('.gallery-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to current button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter gallery items
        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }, 100);
}