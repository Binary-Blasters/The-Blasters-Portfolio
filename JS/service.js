// Fetch services data
fetch('../Json/Service.json')
  .then((response) => response.json())
  .then((services) => {
    const container = document.getElementById('services-container');

    // Loop through each service and generate cards dynamically
    services.forEach((service, index) => {
      const serviceCard = document.createElement('div');
      serviceCard.className = 'service-card';

      serviceCard.innerHTML = `
        <img src="${service.image}" alt="${service.title}">
        <h2>${service.title}</h2>
        <p>${service.description}</p>
        <button class="learn-more-btn" data-index="${index}">Learn More</button>
        <div class="service-details" id="details-${index}" style="display: none;">
          <p>${service.details}</p>
        </div>
      `;

      container.appendChild(serviceCard);
    });

    // Add event listeners to "Learn More" buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    learnMoreButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        const details = document.getElementById(`details-${index}`);
        
        // Toggle visibility of details
        if (details.style.display === 'none') {
          details.style.display = 'block';
          button.textContent = 'Show Less';
        } else {
          details.style.display = 'none';
          button.textContent = 'Learn More';
        }
      });
    });
  })
  .catch((error) => {
    console.error('Error fetching services:', error);
  });