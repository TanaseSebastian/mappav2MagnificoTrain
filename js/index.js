
//--------------------------
// Controlla la larghezza della finestra per determinare se è desktop o mobile
const isDesktop = window.innerWidth >= 992; // Usa la larghezza minima per desktop (es. 992px)



// Initialize and add the map
let map;
const contentString = `<div id="content">
  <figure>
  <img src="../img/cover.jpg"">
  <figcaption>Listen to the T-Rex:</figcaption>
  <audio controls src="../media/audio.mp3">
  </audio>
  </figure>
  </div>`


const templatePopup = `
  <div id="audio-player-container">
  <audio src="https://assets.codepen.io/4358584/Anitek_-_Komorebi.mp3" preload="metadata" loop></audio>
  <p>audio player ish</p>
  <button id="play-icon"></button>
  <span id="current-time" class="time">0:00</span>
  <input type="range" id="seek-slider" max="100" value="0">
  <span id="duration" class="time">0:00</span>
  <output id="volume-output">100</output>
  <input type="range" id="volume-slider" max="100" value="100">
  <button id="mute-icon"></button>
</div>`;



const templatePupup2 = `
   <div class="player">
       <div class="wrapper">
           <div class="details">
               <div class="now-playing">PLAYING x OF y</div>
               <div class="track-art"></div>
               <div class="track-name">Track Name</div>
               <div class="track-artist">Track Artist</div>
           </div>

           <div class="slider_container">
               <div class="current-time">00:00</div>
                <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
                <div class="total-duration">00:00</div>
           </div>



             <div class="playpause-track" onclick="playpauseTrack()">
                    <i class="fa fa-play-circle fa-5x"></i>
            </div>
            <!--
           <div class="buttons">
               <div class="random-track" onclick="randomTrack()">
                   <i class="fas fa-random fa-2x" title="random"></i>
               </div>
               <div class="prev-track" onclick="prevTrack()">
                    <i class="fa fa-step-backward fa-2x"></i>
                </div>
                <div class="playpause-track" onclick="playpauseTrack()">
                    <i class="fa fa-play-circle fa-5x"></i>
                </div>
                <div class="next-track" onclick="nextTrack()">
                    <i class="fa fa-step-forward fa-2x"></i>
                </div>
                <div class="repeat-track" onclick="repeatTrack()">
                    <i class="fa fa-repeat fa-2x" title="repeat"></i>
                </div>
           </div>
           -->

            <div id="wave">
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
            </div>
       </div>
   </div>`;

async function initMap() {
  const myLatLng = { lat: 40.473187425126454, lng: 17.23316609859467 };
  // The location of Taranto
  const position_taranto = { lat: 40.469219, lng: 17.240061 };

  //location of 1st step
  const position_8 = {lat: 40.473477, lng: 17.238421};
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
      gestureHandling: "greedy",
      disableDefaultUI: true,
    });
  }else{
    // The map, centered at Taranto
    map = new Map(document.getElementById("map"), {
      zoom: 14,
      center: myLatLng,
      mapId: "DEMO_MAP_ID",
      gestureHandling: "greedy",
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
    url: "./img/0.png", // url
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
    [{ lat: 40.469160, lng: 17.248284 }, "Parrocchia San Francesco di Paola"],
    [{ lat: 40.469641, lng: 17.252364 }, "Arsenale Militare Marittimo"],
    [{ lat: 40.473885, lng: 17.242067 }, "Villa Peripato"],
    [{ lat: 40.473477, lng: 17.238421 }, "Museo Archeologico Nazionale di Taranto (MArTa)"],
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
      url: "./img/"+(i+1)+".png", // url
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
      console.log(marker.position);
      map.setZoom(17);
      map.panTo(marker.position);

      //map.setZoom(20);
      if( prev_infowindow ) {
        pauseTrack()
        prev_infowindow.close();
      }
      prev_infowindow = infowindow;
      //infowindow.open(map, marker);
      doEveryThing();
    });
    infowindow.close();
    google.maps.event.addListener(map, 'click', function() {
      pauseTrack();
      infowindow.close();
    });
    google.maps.event.addListener(infowindow,'closeclick',function(){
      pauseTrack();
      //currentMark.setMap(null); //removes the marker
      // then, remove the infowindows name from the array
    });
  });




  //const image =
    //"./image/capolinea.png";
  //const partenzaMarker = new google.maps.Marker({
    //position: { lat: 40.471780, lng: 17.239286 },
    //map,
    //icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgheart.com%2Fproduct%2Ftrain-locomotive-silhouette-svg-file%2F&psig=AOvVaw2wLEWSh-C_TduhBcnYXGo1&ust=1681655724185000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCODJgfKNrP4CFQAAAAAdAAAAABAE",
  //});


  //const image ="../img/capolinea.png";
  //const image="./img/start.png"
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


  //when the map zoom changes, resize the icon based on the zoom level so the marker covers the same geographic area

  /*google.maps.event.addListener(map, 'zoom_changed', function() {
    var pixelSizeAtZoom0 = 8; //the size of the icon at zoom level 0
    var maxPixelSize = 100; //restricts the maximum size of the icon, otherwise the browser will choke at higher zoom levels trying to scale an image to millions of pixels

    var zoom = map.getZoom();
    var relativePixelSize = Math.round(pixelSizeAtZoom0*Math.pow(2,zoom)); // use 2 to the power of current zoom to calculate relative pixel size.  Base of exponent is 2 because relative size should double every time you zoom in

    if(relativePixelSize > maxPixelSize) //restrict the maximum size of the icon
      relativePixelSize = maxPixelSize;

    //change the size of the icon
    marker.setIcon(
      new google.maps.MarkerImage(
     marker.getIcon().url, //marker's same icon graphic
      null,//size
      null,//origin
      null, //origin
      null, //anchor
      new google.maps.Size(relativePixelSize, relativePixelSize) //changes the scale
      )
    );
  });


   */

  /*
  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
  });
  marker.addListener("click", () => {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });

  */












  // The marker, positioned at Uluru
  /*const marker = new AdvancedMarkerView({
    map: map,
    position: position_1,
    title: "Uluru",
  });*/
}


initMap();
