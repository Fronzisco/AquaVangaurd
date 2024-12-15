function handleSearch(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    const query = document.getElementById("search-query").value.toLowerCase();

    // Define a simple search result map
    const searchResults = {
        "home": "index.html",
        "about us": "about.html",
        "team": "team.html",
        "projects": "projects.html",
        "contact": "contact.html",
        "careers": "careers.html",
        "blog": "blog.html",
        "faq": "faq.html"
    };

    if (searchResults[query]) {
        window.location.href = searchResults[query]; // Redirect to the page
    } else {
        alert("Page not found! Please try searching for: Home, About Us, Team, etc.");
    }
}
