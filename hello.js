
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function getRandomDemical() {
  var demical = (Math.random() * (0.5 - 0.300) + 0.300).toFixed(1) * (-1)
  return demical;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
return color;
}

function colorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

return rgb;
}



$(window).load(function() {

    $('.marquee2').marquee({
      duration: 5000,
      direction: 'right'
    });

    $('.marqueeOld').marquee();

$(document).ready(function() {

  $(function() {
      $( "#poke, #currentPoke" ).sortable({
        connectWith: ".connectedSortable"
      }).disableSelection();
    } );

  //$('.marquee').marquee({
    //duration: 4000,
    //startVisible: false
  //});

  $('#rplimg').waterripple({arbitrary: 0, onmove: true, onclick: true})

    $("body").keypress(function() {

      $("body").css("background-color", colorLuminance(getRandomColor(), getRandomDemical()));

    });

  $("body").click(function() {

    $("body").css("background-color", colorLuminance(getRandomColor(), getRandomDemical()));

  });

});

});


//$("body").css("background-color", getRandomColor());
