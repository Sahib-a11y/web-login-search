
const validUsername = "admin";
const validPassword = "1234";

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  if (user === validUsername && pass === validPassword) {
    window.location.href = "profile.html";
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
}


async function searchHero() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Searching...";

  try {
    const response = await fetch("data.json");
    const heroes = await response.json();

    const hero = heroes.find(h => h.name.toLowerCase() === input);

    if (hero) {
      resultDiv.innerHTML = `
        <div class="card">
          <h3>${hero.name}</h3>
          <img src="${hero.image}" alt="${hero.name}" />
          <p><strong>Tagline:</strong> ${hero.tagline}</p>
          <p>${hero.description}</p>
        </div>
      `;
    } else {
      resultDiv.innerHTML = `<p>No superhero found with that name.</p>`;
    }
  } catch (error) {
    resultDiv.innerHTML = "Failed to load superhero data.";
  }
}
