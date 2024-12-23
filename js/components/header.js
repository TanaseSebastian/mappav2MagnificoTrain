
  var headerHTML = `
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top header-top-black">
      <div id="container-responsive-align" class="container d-flex align-items-center">
        <img id="logo-mobile" class="mi_logo" src="STATIC/assets/img/logo-circle.png">
        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link" href="index.html">Home</a></li>
            <li class="dropdown"><a href="index.html"><span>Percorsi</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <!--<li><a href="index.html">Tutti i percorsi</a></li>-->
                <li><a href="index.html">Margherita di Savoia</a></li>
              </ul>
            </li>
            <li><a class="nav-link scrollto" href="index.html#portfolio">Galleria</a></li>
            <img id="logo-desktop" class="mi_logo" src="STATIC/assets/img/logo-circle.png">
            <li><a id="team-link" class="nav-link" href="index.html#team">Team</a></li>
            <li class="dropdown"><a class="nav-link" href="index.html#services"><span>Servizi Offerti</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="compleanni.html">Compleanni e Matrimoni</a></li>
                <li><a href="gruppiScuole.html">Gruppi e Scuole</a></li>
                <li><a href="noleggio.html">Noleggio</a></li>
                <li><a href="lavoraConNoi.html">Lavora con Noi</a></li>
                <li><a href="pubblicita.html">Spazi Pubblicitari</a></li>
              </ul>
            </li>
            <li><a class="nav-link scrollto" href="index.html#contact">Contatti</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->
      </div>
    </header><!-- End Header -->`;

  document.body.insertAdjacentHTML("beforebegin", headerHTML);
  setActiveLink();
  checkWindowSize(); // Call checkWindowSize to set initial state based on window size
  window.addEventListener('resize', checkWindowSize);

function setActiveLink() {
  const path = window.location.pathname.split("/").pop(); // Get the current file name
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    // Ottieni il percorso del link senza il dominio
    const linkPath = new URL(link.href).pathname.split("/").pop();
    if (linkPath === path && path != 'index.html') {
      link.classList.add('active'); // Add 'active' to the <a> element
      const parentLi = link.parentElement;
      if (parentLi.tagName === 'LI' && parentLi.parentElement.tagName === 'UL' && parentLi.parentElement.parentElement.classList.contains('dropdown')) {
        parentLi.classList.add('li-active-link'); // Add 'li-active-link' to the <li> element inside dropdown
      }
    } else {
      link.classList.remove('active'); // Remove 'active' from the <a> element
      const parentLi = link.parentElement;
      if (parentLi.tagName === 'LI' && parentLi.parentElement.tagName === 'UL' && parentLi.parentElement.parentElement.classList.contains('dropdown')) {
        parentLi.classList.remove('li-active-link'); // Remove 'li-active-link' from the <li> element inside dropdown
      }
    }
  });
}


function checkWindowSize() {
  const container = document.getElementById('container-responsive-align');
  const logoDesktop = document.getElementById('logo-desktop');
  const logoMobile = document.getElementById('logo-mobile');
  const windowWidth = window.innerWidth;

  // Rimuovi tutte le classi di allineamento e reimposta la visibilità dei loghi
  container.classList.remove('justify-content-center', 'justify-content-lg-between');
  logoDesktop.style.display = 'block';
  logoMobile.style.display = 'block';

  // Controlla se la larghezza della finestra è inferiore o uguale a 1306px (tablet medio o mobile)
  if (windowWidth <= 1306) {
    // Sei su mobile
    container.classList.add('justify-content-lg-between');
    logoDesktop.style.display = 'none';
  } else {
    // Sei su desktop
    container.classList.add('justify-content-center');
    logoMobile.style.display = 'none';
  }
}
