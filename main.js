$(document).ready(function() {
    let n = 2;
    $("#l").click(function() {
      n = n - 1;
      if (n === 0) {
        n = 4;
      }
      update();
    });
    $("#r").click(function() {
      n = n + 1;
      if (n === 5) {
        n = 1;
      }
      update();
    });
  
    function update() {
      let url;
      if (n === 1) {
        url = "./assets/back1.jpg";
      } else if (n === 2) {
        url = "./assets/back2.jpg";
      } else if (n === 3) {
        url = "./assets/back3.jpg";
      } else if (n === 4) {
        url = "./assets/back4.jpg";
      }
  
      $('body').animate({ opacity: 0 }, 1000, function() {
        $('body').removeClass('before-class');
        $('body').addClass('before-class-new');
        $('body').animate({ opacity: 1 }, 1000);
      });
    }
  });