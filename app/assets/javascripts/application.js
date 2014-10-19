// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {
  var gschoolDogs = {
    "dogs": [
      {
        "owner": "Kinsey",
        "name": "Harliegh",
        "preferences": [
          {"favoriteFood": "steak"},
          {"favoriteToy": "Frog"}
        ]
      },
      {
        "owner": "Bobby",
        "name": "I don't know",
        "preferences": [
          {"favoriteFood": "children"},
          {"favoriteToy": "children"}
        ]
      },
      {
        "owner": "Evan",
        "name": "Trixie",
        "preferences": [
          {"favoriteFood": "protien"},
          {"favoriteToy": "weights"}
        ]
      }
    ]
  };

  var createDogs = function(dog) {
    row = "<tr>";
    row += "<td>" + dog.owner + "</td>";
    row += "<td>" + dog.name + "</td>";
    row += "<td>" + dog.preferences[0].favoriteFood + "</td>";
    row += "<td>" + dog.preferences[1].favoriteToy + "</td>";
    return row

  };

  $(gschoolDogs.dogs).each(function() {
    $('#dogs').append(createDogs(this));
  });




//$.each(gschoolDogs, function( i, val) {
//  $.each(val, function(i, val2) {
//    $('.owner').append('<tr><td>' + val2['owner'] + '</td></tr>');
//
//  })
//
//})
//
//  $.each(gschoolDogs, function( i, val) {
//    $.each(val, function(i, val2) {
//      $('.name').append('<tr><td>' + val2['name'] + '</td></tr>');
//
//    })
//
//  })
//
//  $.each(gschoolDogs, function( i, val) {
//    $.each(val, function(i, val2) {
//      $.each(val2, function(i, val3) {
//        $('food').append('<tr><td>' + val3[0]['favoriteFood'] + '</td></tr>');
//        console.log(val3[0]['favoriteFood']);
//      })
//
//    })
//
//  })



//  $.each(gschoolDogs, function( i, val) {
//    $.each(val, function(i, val2) {
//      $('food').append('<tr><td>' + val2['preferences'][0]['favoriteFood'] + '</td></tr>');
//      console.log(val2['preferences'][0]);
//    })
//
//  })



//  console.log(gschoolDogs['dogs'][0]["name"]);

});

