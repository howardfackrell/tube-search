$(function(){
  

  $("#search-form").submit(function(event) {
    event.preventDefault();
    
    var searchTerm = $("#query").val();
    getRequest(searchTerm);
  });
})


var getRequest = function(searchTerm) {
  var params = {
    q : searchTerm, 
    key : 'AIzaSyBtppDiv-07wlyGLatKViaYqjOMXMHs68Q',
    part : 'snippet'
  };
  var url = 'https://www.googleapis.com/youtube/v3/search';
  $.getJSON(url, params, function(data){
      showResults(data.items);
  });
}

var showResults = function(results) {
  var displayArea = $('#search-results');
  $(results).each(function(index, value) {
    displayArea.append(formatSnippet(value));  
  });

}

var formatSnippet = function(vid) {
  var h = "";
  h+="<li><div>";
  h+="<img src='" +vid.snippet.thumbnails.medium.url +"'/>";
  h+="<h3>"+vid.snippet.title+"</h3>";
  h+="<p>"+vid.snippet.description+"</p>";
  h+="</div></li>";
  return h;
}