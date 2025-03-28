let bookData = []; // Global array to store book data

// Fetch book data from Google Apps Script Web App
//fetch("https://script.google.com/macros/s/AKfycbxd0O9uboKnv2DDuJpE7AnG82iZTS8hIA9OaFi_BIHQd4Kpx2JYrpx0VEh-MiKxyfwcXA/exec")
fetch("https://script.google.com/macros/s/AKfycbzzLgt5dOjY_Et5xoLxuGAeImgvnxlu5BvP9ElSxPLc/dev")
    .then(response => response.json())
    .then(data => {
        bookData = data; // Store the fetched data
        displayBooks(bookData); // Display all books initially
    })
    .catch(error => console.error("Error fetching data:", error));

// Function to display books in a table
function displayBooks(data) {
    let tableHTML = "<table border='1'><tr><th>Title</th><th>Author</th><th>Genre</th></tr>";

    data.forEach(row => {
        tableHTML += `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`;
    });

    tableHTML += "</table>";
    document.getElementById("bookTable").innerHTML = tableHTML;
}

// Function to filter books by genre
function filterByGenre() {
    let selectedGenre = document.getElementById("genreSelect").value;
    
    if (selectedGenre === "All") {
        displayBooks(bookData); // Show all books if "All" is selected
    } else {
        let filteredBooks = bookData.filter(row => row[2] === selectedGenre);
        displayBooks(filteredBooks);
    }
}
