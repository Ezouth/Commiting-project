var ISBN = document.getElementById('ISBNNumber').innerText;
console.log(ISBN);
var x = '';



$.get(`https://www.googleapis.com/books/v1/volumes?q=${ISBN}&key=AIzaSyDcv4S4qWVritDGFPwMUKNRlVqs4G28UqQ`, function( data ) {
  x = data.items[0].volumeInfo.industryIdentifiers[1].identifier;

});

google.books.load();
console.log(ISBN);
     function initialize() {
       var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
       viewer.load(`ISBN:${x}`);

     }

     google.books.setOnLoadCallback(initialize);
