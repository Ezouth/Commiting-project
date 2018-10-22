var bookSearch = document.getElementById('invisibleLoader').innerHTML;
var x = '';
$.get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&key=AIzaSyDcv4S4qWVritDGFPwMUKNRlVqs4G28UqQ`, function( data ) {
  x = data.items[0].volumeInfo.industryIdentifiers[1].identifier;
  console.log(data.items[0].volumeInfo.industryIdentifiers[1].identifier);
  // $().html( data );
  // alert( "Load was performed." );
});

google.books.load();

     function initialize() {
       console.log(x);
       var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
       viewer.load(`ISBN:${x}`);

     }

     google.books.setOnLoadCallback(initialize);
