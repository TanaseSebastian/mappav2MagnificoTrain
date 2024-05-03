document.addEventListener("DOMContentLoaded", function() {
  var whatsappCallToActionHTML = `
    <!-- ======= Cta Section ======= -->
    <section class="">
      <div class="" data-aos="zoom-in">

        <div class="text-center">
          <a href="https://api.whatsapp.com/send?phone=+393880719622&text=Ciao, posso ricevere maggiori informazioni sui servizi offerti?" class="whatsapp-button-light">
            <i class="ri-whatsapp-line"></i> Contattaci
          </a>
        </div>

      </div>
    </section><!-- End Cta Section -->`;

  document.body.insertAdjacentHTML('beforeend', whatsappCallToActionHTML);
});
