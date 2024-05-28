document.addEventListener("DOMContentLoaded", function() {
  // Aggiungi stili CSS dinamicamente
  const style = document.createElement('style');
  style.innerHTML = `
        .portfolio-item {
            margin-bottom: 30px;
        }
        .portfolio-wrap {
            position: relative;
            overflow: hidden;
            width: 100%;
            padding-top: 75%; /* Aspect ratio 4:3 */
        }
        .portfolio-wrap img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.3s ease-in-out;
        }
        .portfolio-info {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.3s ease-in-out;
        }
        .portfolio-info h4 {
            color: #fff;
            font-size: 18px;
            margin: 0;
        }
        .portfolio-wrap:hover .portfolio-info {
            opacity: 1;
        }
        .portfolio-wrap:hover img {
            transform: scale(1.1);
        }
        #portfolio-flters li {
            cursor: pointer;
            display: inline-block;
            padding: 10px 20px;
            margin: 0 10px;
            font-size: 14px;
            font-weight: 600;
            color: #6c757d;
            background: #fff;
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
        }
        #portfolio-flters li:hover, #portfolio-flters li.filter-active {
            color: #fff;
            background: #007bff;
        }
        .portfolio-container {
            display: flex;
            flex-wrap: wrap;
        }
        .portfolio-item {
            display: none;
        }
        .portfolio-item.show {
            display: block;
        }
    `;
  document.head.appendChild(style);

  // Inserisci il layout del portfolio
  const portfolioHTML = `
        <!-- ======= Portfolio Section ======= -->
        <section id="portfolio" class="portfolio">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Galleria</h2>
                </div>
                <div class="row" data-aos="fade-up" data-aos-delay="100">
                    <div class="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" class="filter-active">Tutti</li>
                            <li data-filter=".filter-sts_funtrain">STS Funtrain</li>
                            <li data-filter=".filter-dotto_trains">Dotto Trains</li>
                            <li data-filter=".filter-artigianferro">Artigianferro</li>
                        </ul>
                    </div>
                </div>
                <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200" id="portfolio-items">
                    <!-- Dynamic content will be inserted here -->
                </div>
            </div>
        </section>
        <!-- End Portfolio Section -->
    `;

  document.body.insertAdjacentHTML('beforeend', portfolioHTML);

  // Recupera il file JSON con i percorsi delle immagini
  fetch('STATIC/assets/json/imagePaths.json')
    .then(response => response.json())
    .then(data => {
      const imageCategories = data;
      const titles = {
        "STS_FUNTRAIN": "Trenino STS Funtrain",
        "DOTTO_TRAINS": "Trenino Dotto Trains",
        "ARTIGIANFERRO": "Trenino Artigianferro"
      };

      const portfolioContainer = document.getElementById('portfolio-items');

      Object.keys(imageCategories).forEach(category => {
        imageCategories[category].forEach(imagePath => {
          const div = document.createElement('div');
          div.className = `col-lg-4 col-md-6 col-sm-6 col-12 portfolio-item filter-${category.toLowerCase()}`;

          const portfolioWrap = document.createElement('div');
          portfolioWrap.className = 'portfolio-wrap';

          const img = document.createElement('img');
          img.src = imagePath;
          img.className = 'img-fluid';
          img.alt = titles[category];

          const portfolioInfo = document.createElement('div');
          portfolioInfo.className = 'portfolio-info';

          const h4 = document.createElement('h4');
          h4.textContent = titles[category];

          portfolioInfo.appendChild(h4);
          portfolioWrap.appendChild(img);
          portfolioWrap.appendChild(portfolioInfo);
          div.appendChild(portfolioWrap);
          portfolioContainer.appendChild(div);
        });
      });

      // Inizializza i filtri
      const filters = document.querySelectorAll('#portfolio-flters li');
      filters.forEach(filter => {
        filter.addEventListener('click', function() {
          filters.forEach(f => f.classList.remove('filter-active'));
          this.classList.add('filter-active');
          const filterValue = this.getAttribute('data-filter');
          const items = document.querySelectorAll('.portfolio-item');
          items.forEach(item => {
            if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
              item.classList.add('show');
            } else {
              item.classList.remove('show');
            }
          });
        });
      });

      // Mostra tutti gli elementi all'inizio
      document.querySelectorAll('.portfolio-item').forEach(item => {
        item.classList.add('show');
      });
    })
    .catch(error => console.error('Error fetching image paths:', error));
});
