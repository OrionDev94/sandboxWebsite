"use strict";

(function () {
    const apiUrl =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const SEARCHAPI =
        "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    const genreUrl =
        "https://api.themoviedb.org/3/genre/movie/list?api_key=04c35731a5ee918f014970082a0088b1&language=de";
    const discoverUrl =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1&with_genres=";

    const main = document.getElementById("main");
    const form = document.getElementById("form");
    const search = document.getElementById("search");
    const genreButtons = document.getElementById("genreButtons");
    showMovies(apiUrl);

    function showMovies(url, id) {
        // () => is an Arrow Function
        // console.log(id);
        if (id) {
            fetch(url + id)
                .then((res) => res.json())
                .then(function (data) {
                    // console.log(data.results);
                    data.results.forEach((element) => {
                        const el = document.createElement("div");
                        const image = document.createElement("img");
                        const text = document.createElement("h2");

                        text.innerHTML = `${element.title}`;
                        image.src = IMGPATH + element.poster_path;
                        image.classList.add("movie");
                        el.appendChild(image);
                        el.appendChild(text);
                        main.appendChild(el);
                    });
                });

        } else {
            fetch(url)
                .then((res) => res.json())
                .then(function (data) {
                    // console.log(data.results);
                    data.results.forEach((element) => {
                        const el = document.createElement("div");
                        const image = document.createElement("img");
                        const text = document.createElement("h2");

                        text.innerHTML = `${element.title}`;
                        image.src = IMGPATH + element.poster_path;
                        image.classList.add("movie");
                        el.appendChild(image);
                        el.appendChild(text);
                        main.appendChild(el);
                    });
                });
        }
    }

    function showGenres(url) {
        fetch(url)
            .then((res) => res.json())
            .then(function (data) {
                console.log(data.genres);
                data.genres.forEach((element) => {
                    const el = document.createElement("div");
                    const button = document.createElement("button");
                    button.innerHTML = `${element.name}`;
                    button.name = `${element.name}`;
                    button.dataset.id = `${element.id}`;

                    button.classList.add("btn", "btn-warning", "m-1");
                    el.appendChild(button);
                    genreButtons.appendChild(el);

                    button.addEventListener(
                        "click",
                        function () {
                            var genreId = element.id.toString();
                            main.innerHTML = "";
                            showMovies(discoverUrl, genreId);
                        },
                        false
                    );
                });
            });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        main.innerHTML = "";
        const searchTerm = search.value;
        console.log(search.value);

        if (searchTerm) {
            showMovies(SEARCHAPI + searchTerm);

            search.value = "";
        }
    });

    showGenres(genreUrl);
})();
