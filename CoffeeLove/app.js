const button = document.querySelector('.generate-btn');
const img = document.getElementById('coffee-img');
const poemDiv = document.getElementById('coffee-poem')

const coffeePoems = [
  `Steam rises, a fragrant kiss,
Dark liquid, my morning bliss.
Awake, my soul begins to dance,
In every sip, a sweet romance.
Coffee, you’re my heart’s insistence.`,

  `In your warmth, I find my muse,
A gentle hug I cannot refuse.
Bittersweet, yet full of cheer,
Your aroma draws me near.
Coffee, my love, I daily choose.`,

  `Golden liquid, dark and deep,
Into your embrace, I leap.
Moments linger, hearts entwined,
Joy and calm I always find.
Coffee, in you, my soul does keep.`,

  `A shot of you, my heartbeat starts,
Rich and strong, you steal my heart.
Morning whispers, subtle delight,
You hold me through the quiet night.
Coffee, you are my work of art.`,

  `Cup in hand, the world feels right,
Bittersweet warmth through morning light.
In each swirl, a story told,
A liquid hug when days are cold.
Coffee, you make my spirit bright.`,

  `Mornings break with your dark charm,
You fill my senses, keep me warm.
Every sip, a gentle hug,
Life flows easy, coffee mug.
In your steam, I find my calm.`,

  `Bitter, sweet, a perfect blend,
My faithful, ever-loyal friend.
In your depths, I see the sun,
Daily rituals just begun.
Coffee, you’re my constant trend.`,

  `Drip by drip, my mind awakes,
Magic in the cup it takes.
A swirl of cream, a gentle stir,
Life is brighter when you’re near.
Coffee, my heart, I do concur.`,

  `Tiny mug, yet vast delight,
Keeps me dreaming through the night.
Dark as night, yet full of cheer,
With every sip, the world is clear.
Coffee, you make life so bright.`,

  `Steam curls like a morning song,
You keep my focus all day long.
Bittersweet and full of grace,
Every sip a warm embrace.
Coffee, you belong where I belong.`
];


function displayPoem() {
    if (poemDiv) {
        poemDiv.innerHTML = "";    
        const poemText = getRandomPoem();
        const lines = poemText.split("\n")
        lines.forEach(line => {
            const p = document.createElement("p");
            p.textContent = line;
            poemDiv.appendChild(p);
        });
    }
}

function getRandomPoem() {
    const randomIndex = Math.floor(Math.random() * coffeePoems.length)
    return coffeePoems[randomIndex]
}


function loadCoffee() {
    const url = `https://coffee.alexflipnote.dev/random?${Date.now()}`;

    img.onerror = () => {
        img.alt = 'Fehler beim Laden!'
    }
    img.src = url;

    displayPoem();
}


if (button) {
button.addEventListener('click', loadCoffee);
}

const favBtn = document.querySelector(".favBtn")

if (favBtn) {
  favBtn.addEventListener("click", saveFavorit)
}

window.addEventListener("load", () => {
  loadCoffee()
  loadFavorites()
})