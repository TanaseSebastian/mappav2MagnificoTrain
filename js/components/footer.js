document.addEventListener("DOMContentLoaded", function() {
  var footerHTML = `
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="footer-info">
                            <h3>Magnifico<span> Train</span></h3>
                            <div class="address">
                                <i class="bi bi-geo-alt"> SEDI</i>
                                <h4 class="mt-3">Margherita Di Savoia</h4>
                                <h4 class="mt-0">Lesina</h4>
                            </div>
                            <div class="email">
                                <i class="bi bi-envelope"> EMAIL</i>
                                <h4 class="mt-3"><a href="mailto:casartelli.lunapark@hotmail.com">casartelli.lunapark@hotmail.com</a></h4>
                            </div>
                            <div class="phone">
                                <i class='bi bi-phone'> RECAPITI TELEFONICI</i>
                                <h4 class="mt-3"><a href="tel:+393880719622">+39 388 071 9622</a></h4>
                            </div>
                            <div class="social-links mt-3">
                                <a href="https://www.facebook.com/magnificotrenino/?paipv=0&eav=AfbJ2JE8aQLQXhedSgfi7g4oxji1wm8mzHcEcF3dVMr4DGYUcllsiytD3LDERMqjsKY&_rdr" class="facebook"><i class="bx bxl-facebook"></i></a>
                                <a href="https://www.instagram.com/magnifico_train?igshid=OGQ5ZDc2ODk2ZA%3D%3D" class="instagram"><i class="bx bxl-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Link Utili</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Chi siamo</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Servizi</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>I nostri servizi</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Compleanni e matrimoni</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Gruppi e scuole</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Noleggio</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Lavora con noi</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Spazi pubblicitari</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <a href="https://api.whatsapp.com/send?phone=+393880719622&text=Ciao, posso ricevere amggiori informazioni sui servizi offerti?" class="whatsapp-button">
            <i class="ri-whatsapp-line"></i>Contattaci
        </a>
        <div class="container">
            <div class="copyright">
                &copy; Copyright <strong><span>Magnifico Train</span></strong>. Tutti i diritti riservati.
            </div>
            <div class="credits">
                Designed by <a href="https://www.linkedin.com/in/tanasesebastian/">Sebastian Tanase</a>
            </div>
        </div>
    </footer>`;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
