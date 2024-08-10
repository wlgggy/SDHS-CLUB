const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

function performSearch() {
  const query = searchInput.value.trim();
  if (query) {
    window.location.href = `https://search.naver.com/search.naver?query=${encodeURIComponent(query)}`;
  }
}

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

searchIcon.addEventListener("click", performSearch);
