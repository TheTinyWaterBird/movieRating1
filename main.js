const ratingElement = [
    document.getElementById("star1"),
    document.getElementById("star2"),
    document.getElementById("star3"),
    document.getElementById("star4"),
    document.getElementById("star5")
];

let rating = 0;
let originalElement = null;
let movie = null;
let arrRatings = [];
let starRating = null;
const getMovieInfo = {
    title: document.getElementById("title"),
    year: document.getElementById("year"),
    genre: document.getElementById("genre")
};

localStorage.setItem("movieList", JSON.stringify(getMovieInfo));

const ratings = [
    function rateMovie1(event) {
        if (event.isTrusted) {
            rating = 1;

            for (let i = 0; i < rating; i++)
                ratingElement[i].querySelector("p").textContent = "⭐";

            return rating;
        }
        else
            return rating;
    },

    function rateMovie2(event) {
        if (event.isTrusted) {
            rating = 2;

            for (let i = 0; i < rating; i++)
                ratingElement[i].querySelector("p").textContent = "⭐";

            return rating;
        }
        else
            return rating;
    },

    function rateMovie3(event) {
        if (event.isTrusted) {
            rating = 3;

            for (let i = 0; i < rating; i++)
                ratingElement[i].querySelector("p").textContent = "⭐";

            return rating;
        }
        else
            return rating;
    },

    function rateMovie4(event) {
        if (event.isTrusted) {
            rating = 4;

            for (let i = 0; i < rating; i++)
                ratingElement[i].querySelector("p").textContent = "⭐";

            return rating;
        }
        else
            return rating;
    },

    function rateMovie5(event) {
        if (event.isTrusted) {
            rating = 5;

            for (let i = 0; i < rating; i++)
                ratingElement[i].querySelector("p").textContent = "⭐";

            return rating;
        }
        else
            return rating;
    }
];

for (x = 0; x < 5; x++) {
    arrRatings[x] = ratings[x];
}

for (b = 0; b < 5; b++) {
    if (arrRatings[b] > 0) {
        starRating = arrRatings[b];
        break;
    }
}