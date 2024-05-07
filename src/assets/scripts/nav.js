var currentPage = getCurrentPageName();
console.log(currentPage);

function getCurrentPageName() {
  var pathArray = window.location.pathname.split('/');
  var currentPage = pathArray[pathArray.length - 1]; // Obtenim el nom de la ruta actual
  currentPage = currentPage.replace(".html", ""); // Elimina la extensió .html
  return currentPage;
}

var navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks);

navLinks.forEach(function(link) {
    var href = link.getAttribute('href').replace(".html", "");;
    var baseRoute = href.substring(href.lastIndexOf('/') + 1);
    console.log(baseRoute);
    console.log(link);
    link.classList.remove('active');
    if (currentPage === baseRoute) {

        link.classList.add('active');
        console.log(link);
    }
});


