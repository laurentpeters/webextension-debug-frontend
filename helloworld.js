

// Select all forms on the page
var forms = document.querySelectorAll('form');

forms.forEach(function(form) {

    // add style to body
    document.body.style.border = "5px solid red";

    // add a new element to the DOM after body
    var p = document.createElement("p");
    p.textContent = "submit link modified to be relative to the current page.";
    document.body.insertBefore(p, document.body.firstChild);

    // Get the action attribute of the form
    var actionURL = form.getAttribute('action');

    // Create a new URL object using the action attribute value
    var url = new URL(actionURL);

    // Extract the pathname and search from the URL object to get the relative path with query parameters
    var relativePath = url.pathname + url.search;

    // Set the form's action attribute to the new relative path
    form.setAttribute('action', relativePath);
});
