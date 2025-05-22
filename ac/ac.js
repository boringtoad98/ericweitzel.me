function setBackground() {
  let today = new Date();
  let month = today.getMonth();
  let date = today.getDate();
  var img, themeColor;

  switch (month) {
  case 0:
    img = "snow";
    themeColor = "#c2d5ed";
    break;
  case 1:
    if (date < 25) {
      img = "snow";
      themeColor = "#c2d5ed";
    } else {
      img = "spring";
      themeColor = "#458a43";
    }
    break;
  case 2:
    /* FALLTHROUGH */
  case 3:
    /* FALLTHROUGH */
  case 4:
    img = "spring";
    themeColor = "#458a43";
    break;
  case 5:
    /* FALLTHROUGH */
  case 6:
    /* FALLTHROUGH */
  case 7:
    img = "summer";
    themeColor = "#39825d";
    break;
  case 8:
    if (date < 22) {
      img = "fall1";
      themeColor = "#557a3b";
    } else {
      img = "fall2";
      themeColor = "#827b43";
    }
    break;
  case 9:
    if (date < 13) {
      img = "fall2";
      themeColor = "#827b43";
    } else {
      img = "fall3";
      themeColor = "#8c5d63";
    }
    break;
  case 10:
    if (date < 25) {
      img = "fall3";
      themeColor = "#8c5d63";
    } else {
      img = "winter";
      themeColor = "#605352";
    }
    break;
  case 11:
    if (date < 10) {
      img = "winter";
      themeColor = "#605352";
    } else {
      img = "snow";
      themeColor = "#c2d5ed";
    }
    break;
  }

  $('body').css('background-image', `url("img/${img}.png")`);
  $('meta[name=theme-color]').attr('content', `${themeColor}`);
}
