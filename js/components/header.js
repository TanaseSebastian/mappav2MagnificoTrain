document.addEventListener("DOMContentLoaded", function() {
  var headerHTML = `
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top header-top-black">
        <div id="container-responsive-align" class="container d-flex align-items-center">
            <img id="logo-mobile" class="mi_logo" src="indexStuff/assets/img/logo-circle.png">
            <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                    <li><a class="nav-link" href="index.html">Home</a></li>
                    <li><a class="nav-link" href="#about">Chi siamo</a></li>
                    <li><a class="nav-link" href="#services">Servizi</a></li>
                    <img id="logo-desktop" class="mi_logo" src="indexStuff/assets/img/logo-circle.png">
                    <li><a id="team-link" class="nav-link" href="#team">Team</a></li>
                    <li class="dropdown"><a href="#"><span>Servizi Offerti</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                            <li><a href="compleanni.html">Compleanni e Matrimoni</a></li>
                            <li><a href="gruppiScuole.html">Gruppi e Scuole</a></li>
                            <li><a href="noleggio.html">Noleggio</a></li>
                            <li><a href="lavoraConNoi.html">Lavora con Noi</a></li>
                            <li><a href="pubblicita.html">Spazi Pubblicitari</a></li>
                        </ul>
                    </li>
                    <li><a class="nav-link" href="#contact">Contatti</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
        </div>
    </header>
    <!-- End Header -->`;
  document.body.insertAdjacentHTML('beforebegin', headerHTML);
  setActiveLink();
});

function setActiveLink() {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    if (link.href.includes(path)) {
      link.classList.add('active'); // Add 'active' to the <a> element
      link.parentElement.classList.add('li-active-link'); // Add 'li-active-link' to the <li> element
    }
  });
}
