const apiUrl = "https://movies-api.accel.li/api/v2/list_movies.json";

const movieContainer = document.getElementById("movieContainer");

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        data.data.movies.forEach(function(movie) {

            const card = document.createElement("div");

            card.className = "w-50 overflow-hidden";

            card.innerHTML = `
                <div class="h-80 overflow-hidden relative group rounded-sm border-4 border-white">

                    <img 
                        src="${movie.medium_cover_image}" 
                        alt="${movie.title}"
                        class="w-full h-full object-cover"
                    >

                    <div class="absolute inset-0 flex flex-col gap-2 items-center justify-center text-center invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/70">

                        <span class="text-lime-700 text-4xl">
                            <i class="fa-regular fa-star"></i>
                        </span>

                        <p class="text-2xl font-bold text-white">
                            ${movie.rating}/10
                        </p>

                        <p class="text-xl font-bold text-white">
                            ${movie.genres[0]}
                        </p>

                        <div class="mt-4">
                            <a href="movie-detail.html?id=${movie.id}" class="px-5 py-2 text-white font-bold border border-lime-700 bg-lime-600 rounded-md">
                                View Detail
                            </a>
                        </div>

                    </div>

                </div>

                <p class="text-lg text-white font-bold">
                    ${movie.title}
                </p>

                <span class="block text-gray-600 text-md font-bold">
                    ${movie.year}
                </span>
            `

            movieContainer.appendChild(card);

        });

    });