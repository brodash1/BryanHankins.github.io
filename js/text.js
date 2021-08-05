const textrow1 = document.querySelectorAll(".textrow1");
const textrow2 = document.querySelectorAll(".textrow2");
const textrow3 = document.querySelectorAll(".textrow3");
const textrow4 = document.querySelectorAll(".textrow4");
const loader = document.querySelectorAll(".loader-img");



// function foo( textrow2, textrow1) {
//  setTimeout(function() {
//    $(".textrow2 ").css({'color':'red'});
//    $(".textrow1 ").css({'color':'blue'});
//  }, 5000); 
//  setTimeout(function() {
//   $(".textrow2 ").css({'color':'yellow'});
//   $(".textrow1 ").css({'color':'black'});
// }, 6000);
// setTimeout(function() {
//     $(".textrow2 ").append("' gay'");
    
//   }, 7000);
//   setTimeout(function() {
//     $(".textrow2 ").empty(" gay");
//     $(".textrow1 ").remove("ley")
//   }, 12000);
//   setTimeout(function() {
//     $(".textrow2 ").append("' gay'");
//   }, 13000);
// }
// Above is for textrow1
function bar( textrow2, textrow1, textrow3, textrow4) {
  
  function doo(){
    $(".textrow2 ").hide({'color':'yellow'});
    $(".textrow4 ").hide({'color':'yellow'});
  }
doo();
  setTimeout(function() {
    $(".textrow2 ").css({'color':'red'});
    $(".textrow1 ").css({'color':'blue'});
    $(".textrow4 ").css({'color':'yellow'});
    $(".textrow3 ").css({'color':'green'});
  }, 1000); 
  setTimeout(function() {
   $(".textrow2 ").css({'color':'blue'});
   $(".textrow1 ").css({'color':'red'});
   $(".textrow4 ").css({'color':'green'});
   $(".textrow3 ").css({'color':'yellow'});
 }, 1500);
 setTimeout(function() {
     $(".textrow2 ").append("' gay'");
     $(".textrow4 ").append("' wow'");
   }, 3000);
   setTimeout(function() {
     $(".textrow2").hide(" gay");
     $(".textrow4").hide(" wow");

   }, 4000);
   setTimeout(function() {
     $(".textrow2 ").show("' gay'");
     $(".textrow4 ").show("' gay'");
   }, 5000);
 }
 bar();