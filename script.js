function gotoBottom(id){
  var scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}
$('.carousel').carousel({
  interval: false;
  ride: 'true';
})
