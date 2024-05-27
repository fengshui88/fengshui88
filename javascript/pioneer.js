/* Tanggal Bocoran */
$(document).ready(function(){
    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];
  
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var thisDay = date.getDay(),
        thisDay = myDays[thisDay];
    var yy = date.getYear();
    var year = (yy < 1000) ? yy + 1900 : yy;
  
  
    $('.title-text').html(thisDay + ', ' + day + ' ' + months[month] + ' ' + year);
  });
  
  
  var lastTime = localStorage.getItem(provider+"_lastTime");
  var currentTime = new Date().getTime();
  
  var time_rand = [300000, 360000, 420000, 480000, 540000, 600000, 660000, 720000, 780000, 840000, 900000];
  var random_time = (Math.floor(Math.random() * time_rand.length-1) + 1);
  
  var time_to_refresh = localStorage.getItem(provider+"_time_to_refresh") == null ? time_rand[random_time] : localStorage.getItem(provider+"_time_to_refresh");
  if (localStorage.getItem(provider+"_time_to_refresh") == null) {localStorage.setItem(provider+"_time_to_refresh", time_to_refresh);}
  
  /* Nilai variable x pindah ke halaman html masing masing */
  /* Random RTP  */
  for (let i = 1; i < 370; i++) {
  
      if (!lastTime || (currentTime - lastTime) >= time_to_refresh) {
        localStorage.setItem(provider+"_time_to_refresh", time_rand[random_time]);
  
        var xx = Math.floor(Math.random() * 99 ) + 1;
  
        localStorage.setItem(provider+"_lastTime", currentTime);
        localStorage.setItem(provider+"_xx_"+i, xx);
  
        var random_val_1 = [10, 15, 20, 25, 30 ];
        var random_1 = random_val_1[Math.floor(Math.random() * random_val_1.length-1) + 1];
        localStorage.setItem("random_1_xx_"+provider+"_"+i, random_1);
  
        var random_val_2 = [10, 20, 30];
        var random_2 = random_val_2[Math.floor(Math.random() * random_val_2.length-1) + 1];
        localStorage.setItem("random_2_xx_"+provider+"_"+i, random_2);
  
        var random_val_3 = [3, 5, 7, 9];
        var random_3 = random_val_3[Math.floor(Math.random() * random_val_3.length-1) + 1];
        localStorage.setItem("random_3_xx_"+provider+"_"+i, random_3);
  
        var random_val_4 = [10, 20, 30, 35,];
        var random_4 = random_val_4[Math.floor(Math.random() * random_val_4.length-1) + 1];
        localStorage.setItem("random_4_xx_"+provider+"_"+i, random_4);
      }else{
        var xx = localStorage.getItem(provider+"_xx_"+i);
        
        var random_1 = localStorage.getItem("random_1_xx_"+provider+"_"+i);
        var random_2 = localStorage.getItem("random_2_xx_"+provider+"_"+i);
        var random_3 = localStorage.getItem("random_3_xx_"+provider+"_"+i);
        var random_4 = localStorage.getItem("random_4_xx_"+provider+"_"+i);
      }
      
      const as = "percent-bar-" + i;
      const asd = "percent-txt-" + i;
      var percentTxt = document.getElementById("percent-txt-" + i);
      var bar = document.getElementById("percent-bar-" + i);
      const bartext = document.getElementById("card-title" + i);
      if (!percentTxt || !bar) continue;
      
 
      $("#"+asd).parent().parent().parent().attr("onclick", "show_popup('"+asd+"', '"+random_1+"', '"+random_2+"', '"+random_3+"', '"+random_4+"')");
  }
  
  /* Menampilkan Popup Pola Main*/
  function show_popup(id_percent, random_1, random_2, random_3, random_4) {
      var number_txt = $("#"+id_percent).html();
      var percent = number_txt.replace("%", "").replace("RTP ", "");
  
      if (percent < 30) {
        $("#popup-container-bad").fadeIn(500);
        
      }else{
        $("#popup-container-win").fadeIn(500);
  
        $("#tips_number_1").html(random_1);
        $("#tips_number_2").html(random_2);
        $("#tips_number_3").html(random_3);
        $("#tips_number_4").html(random_4);
      }
  }
  
  function close_popup() {
      $(".popup-container").fadeOut(500);
  }
  
  
  /* Menampilkan Popup Ads Lowongan Admin*/
  /* $(document).ready(function () {
    $("#popup-container-ads").fadeIn(0);
  }); */
  
  
  
  /* Slide Show Menu Mobile*/
  var slides = document.getElementsByClassName("mySlides");
  
  var slideIndex = 1;
  var x = window.matchMedia("(max-width: 992px)")
  media(x) // Call listener function at run time
  x.addListener(media) // Attach listener function on state changes
  
  function media(x){
      if(x.matches){
          showSlides(slideIndex);
      }else{
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
      }
  }
  
  function plusSlides(n) {
      
    var slides = document.getElementsByClassName("mySlides");
      if(slideIndex <= slides.length - 4 || slideIndex >= 1){
          
    showSlides(slideIndex += n);
      }
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  
  var x = window.matchMedia("(max-width: 992px)")
  console.log(x)
  
  function showSlides(n) {
    var i;
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
  }
  
  
  
  /* Slide Show Images */
  var slideIndexImages = 1;
  showSlidesImages(slideIndexImages);
  
  // Next/previous controls
  function plusSlidesImages(n) {
    showSlidesImages(slideIndexImages += n);
  }
  
  // Thumbnail image controls
  function currentSlideImages(n) {
    showSlidesImages(slideIndexImages = n);
  }
  
  function showSlidesImages(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow-images");
    var dots = document.getElementsByClassName("dot-slideshow-images");
    if (n > slides.length) {slideIndexImages = 1}
    if (n <= 0) {slideIndexImages = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-slideshow-images", "");
    }
    slides[slideIndexImages-1].style.display = "block";
    /*dots[slideIndexImages-1].className += " active-slideshow-images";*/
  }