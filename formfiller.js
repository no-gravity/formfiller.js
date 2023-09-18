var params = new URLSearchParams(window.location.search);
var fields = document.querySelectorAll('form [name]'); // without form it would match stuff like <meta name="viewport"...>
fields.forEach(function(field) {
    var p=params.get(field.name);
    if (p) field.value=p;
});
