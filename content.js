function replaceIframeHandler() {
  var id = this.title;  
  this.innerHTML = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/'+id+'" frameborder="0" allowfullscreen></iframe>';
  this.removeEventListener('click', replaceIframeHandler, false);
}

var videos = [];
videos = document.querySelectorAll('#ytVideo');

videos.forEach(function(video){
  var links = video.querySelectorAll('a');

  links.forEach(function(link){
    link.target = '';
    link.href = '#';

    var div = document.createElement('div');
    div.innerHTML = link.innerHTML;

    link.parentNode.replaceChild(div, link);
  });

  video.addEventListener('click', replaceIframeHandler, false);
});