document.addEventListener("DOMContentLoaded", function() {
  var contactHTML = `
<!-- ======= Contact Section ======= -->
                <section id="contact" class="contact">
                    <div class="container" data-aos="fade-up">
                        <div class="section-title">
                            <h2>Contatti</h2>
                            <p>Contattaci</p>
                        </div>
                        <div class="row">
                            <div class="mt-5 col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="info w-100">
                                    <div class="icon">
                                        <i class="bi bi-geo-alt"></i>
                                    </div>
                                    <h4>SEDI</h4>
                                    <p>Bisceglie</p>
                                    <p>Margherita Di Savoia</p>
                                    <p>Marina di Lesina</p>
                                </div>
                            </div>

                            <div class="mt-5 col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="info w-100">
                                    <div class="icon">
                                        <i class="bi bi-envelope"></i>
                                    </div>
                                    <h4>EMAIL</h4>
                                    <p><a href="mailto:casartelli.lunapark@hotmail.com">casartelli.lunapark@hotmail.com</a></p>
                                </div>
                            </div>

                            <div class="mt-5 col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="info w-100">
                                    <div class="icon">
                                        <i class='bx bx-phone'></i>
                                    </div>
                                    <h4>RECAPITI TELEFONICI</h4>
                                    <p>Bisceglie <a href="tel:+393277431296">+39 327 743 1296</a></p>
                                    <p>Margherita di Savoia <a href="tel:+393880719622">+39 388 071 9622</a></p>
                                    <p>Marina di Lesina <a href="tel:0719300500">071 9300500</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- End Contact Section -->`;

  document.body.insertAdjacentHTML('beforeend', contactHTML);
});
