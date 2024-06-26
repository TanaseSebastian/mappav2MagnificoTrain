(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" +
        selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
        ")"
    );
    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .last()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            "background-image",
            "url(" +
              $(this)
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();





/*

parte di javascript per la mappa*/

//--------------------------
//--------------------------
// Controlla la larghezza della finestra per determinare se è desktop o mobile
const isDesktop = window.innerWidth >= 992; // Usa la larghezza minima per desktop (es. 992px)



// Initialize and add the map
let map;
const contentString = `<div id="content">
  <figure>
  <img src="../img/cover.jpg"">
  <figcaption>Listen to the T-Rex:</figcaption>
<!--  <audio controls src="../media/audio.mp3">
  </audio>-->
  </figure>
  </div>`



async function initMap() {
  const myLatLng = { lat: 40.473187425126454, lng: 17.23316609859467 };
  // The location of Taranto
  const position_taranto = { lat: 40.469219, lng: 17.240061 };

  //location of 1st step
  const position_8 = {lat: 40.473477, lng: 17.238421};
  const position_4 = { lat: 40.470849, lng: 17.238052 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  if(isDesktop){
    // The map, centered at Taranto
    map = new Map(document.getElementById("map"), {
      zoom: 15,
      center: position_8,
      mapId: "DEMO_MAP_ID",
      /*gestureHandling: "greedy",*/
      disableDefaultUI: true,
    });
  }else{
    // The map, centered at Taranto
    map = new Map(document.getElementById("map"), {
      zoom: 14,
      center: position_4,
      mapId: "DEMO_MAP_ID",
      /*gestureHandling: "greedy",*/
      disableDefaultUI: true,
    });
  }


  map.setMapTypeId('satellite');


  // Imposta la variabile 'size' in base al tipo di visualizzazione
  let size = isDesktop ? 70 : 50;
  /*
  let withScreen = screen.width;
  console.log(withScreen);
  let prev_infowindow =false;

  if(withScreen<400) size = 200;
  else if (withScreen < 600) size = 180;
  else size = 120;
*/


  const icon = {
    url: "STATIC/assets/img/bisceglie/img/0.png", // url
    scaledSize: new google.maps.Size(size, size), // scaled size
    size: new google.maps.Size(size,size), //size
    //origin: null, //origin
    //anchor: null, //anchor
    //scale: new google.maps.Size(8,8) //scale
    //origin: new google.maps.Point(0,0), // origin
    //anchor: new google.maps.Point(0, 0) // anchor
  };
  const tourStops = [
    [{ lat: 40.473200, lng: 17.235387 }, "Ponte Girevole di San Francesco di Paola"],
    [{ lat: 40.47250185304242, lng: 17.239217162132267 }, "Palazzo Archita"],
    [{ lat: 40.471873, lng: 17.235655 }, "Monumento al Marinaio"],
    [{ lat: 40.470849, lng: 17.238052 }, "Palazzo del Governo"],
    [{ lat: 40.469160, lng: 17.248284 }, "Chiesa di San Francesco di Paola"],
    [{ lat: 40.469641, lng: 17.252364 }, "Arsenale Militare Marittimo"],
    [{ lat: 40.473885, lng: 17.242067 }, "Villa Peripato"],
    [{ lat: 40.473477, lng: 17.238421 }, "Museo Archeologico Nazionale di Taranto"],
    [{ lat: 40.476113, lng: 17.231093 }, "Parrocchia San Giuseppe"],
    [{ lat: 40.478982, lng: 17.228322 }, "Pensilina Liberty"],
    [{ lat: 40.480108, lng: 17.226752 }, "Ponte di Pietra"],
    [{ lat: 40.480447, lng: 17.224630 }, "Porto Mercantile"],
    [{ lat: 40.476432, lng: 17.224428 }, "Porto Turistico"],
    [{ lat: 40.478749, lng: 17.227618 }, "Torre dell'Orologio"],
    [{ lat: 40.478011, lng: 17.227098 }, "Chiesa di San Domenico Maggiore"],
    [{ lat: 40.476023, lng: 17.228755 }, "Cattedrale di San Cataldo"],
    [{ lat: 40.474603, lng: 17.230144 }, "Museo Ipogeo Spartano di Taranto"],
    [{ lat: 40.474171, lng: 17.231036 }, "Palazzo D'ayala Valva"],
    [{ lat: 40.47346491659913, lng: 17.23264038562775 }, "Palazzo del Comune"],
    [{ lat: 40.473767, lng: 17.233031 }, "Colonne Doriche"],
    [{ lat: 40.472763, lng: 17.234099 }, "Castello Aragonese"],
    /*    [{ lat: 40.470849, lng: 17.238052 }, "Palazzo del Governo"],*/
  ];




  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    let icon = {
      url: "STATIC/assets/img/bisceglie/img/"+(i+1)+".png", // url
      scaledSize: new google.maps.Size(size, size), // scaled size
      size: new google.maps.Size(size,size), //size
    };
    const  marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      //label: `${i + 1}`,
      optimized: false,
      icon:icon,
    });


    // Create an info window to share between markers.
    let infowindow = new google.maps.InfoWindow({

      // content: null
    });

    // Add a click listener for each marker, and set up the info window.
    /*marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(contentString);
      infoWindow.open(marker.getMap(), marker);
    });

*/
    google.maps.event.addListener(marker, 'click', function () {
      const targetDataText = marker.title;
      const targetElement = document.querySelector(`.timeline-item[data-text="${targetDataText}"]`);
      /*const targetElement = document.querySelector('.timeline__content-title:contains("' + targetDataText + '")');*/
      console.log(marker.position);
      map.setZoom(17);
      map.panTo(marker.position);
      targetElement.scrollIntoView({ behavior: 'smooth' });
      //map.setZoom(20);
      if( prev_infowindow ) {
        pauseTrack()
        prev_infowindow.close();
      }
      prev_infowindow = infowindow;
      //infowindow.open(map, marker);
      //doEveryThing();
    });
    infowindow.close();
    /*google.maps.event.addListener(map, 'click', function() {
      pauseTrack();
      infowindow.close();
    });
    google.maps.event.addListener(infowindow,'closeclick',function(){
      pauseTrack();
      //currentMark.setMap(null); //removes the marker
      // then, remove the infowindows name from the array
    });*/
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "CAPOLINEA",
    icon: icon,
    optimized: false,
  }).addListener("click", () => {
    infoWindow.close();
    infoWindow.setContent("CAPOLINEA");
    infoWindow.open(marker.getMap(), marker2);
  });

}


await initMap();


