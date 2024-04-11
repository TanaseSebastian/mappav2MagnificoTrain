document.addEventListener("DOMContentLoaded", function() {
  var contactHTML = `
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Contatti</h2>
                <p>Contattaci</p>
            </div>
            <div class="row mt-5">
                <div class="col-lg-4">
                    <div class="info">
                        <div class="address">
                            <i class="bi bi-geo-alt"></i>
                            <h4>SEDI</h4>
                            <p>Margherita Di Savoia</p>
                            <p>Lesina</p>
                        </div>
                        <div class="email">
                            <i class="bi bi-envelope"></i>
                            <h4>EMAIL</h4>
                            <p><a href="mailto:casartelli.lunapark@hotmail.com">casartelli.lunapark@hotmail.com</a></p>
                        </div>
                        <div class="phone">
                            <i class='bx bx-phone'></i>
                            <h4>RECAPITI TELEFONICI</h4>
                            <p><a href="tel:+393880719622">+39 388 071 9622</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 mt-5 mt-lg-0">
                    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Il tuo nome" required>
                            </div>
                            <div class="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" class="form-control" name="email" id="email" placeholder="La tua email" required>
                            </div>
                        </div>
                        <div class="form-group mt-3">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Oggetto" required>
                        </div>
                        <div class="form-group mt-3">
                            <textarea class="form-control" name="message" rows="5" placeholder="Messaggio" required></textarea>
                        </div>
                        <div class="my-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Il tuo messaggio è stato inviato. Grazie!</div>
                        </div>
                        <div class="text-center"><button type="submit">Invia Messaggio</button></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- End Contact Section -->`;

  document.body.insertAdjacentHTML('beforeend', contactHTML);
});