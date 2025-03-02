/*
(function() {
// Dodavanje fonta i CSS promenljivih
var fontStyle = document.createElement("style");
fontStyle.innerHTML = `
    @font-face {
        font-family: 'JetBrainsMono';
        src: url('https://dragokatic.github.io/fonts/JetBrainsMono-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    
    :root {
        --white-color: #ffffff;
        --primary-color: #ff911c;
        --secondary-color: #0d1321;
        --dark-color: #050a14;
        --p-color: #171230;

        --body-font-family: 'JetBrainsMono', sans-serif;

        --p-font-size: 16px;
        --menu-font-size: 12px;
        --copyright-font-size: 14px;

        --border-radius-large: 20px;

        --font-weight-normal: 400;
        --font-weight-bold: 700;
    }

    .overlay-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--secondary-color);
        opacity: 0.8;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        border-radius: var(--border-radius-large);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    .overlay-bar {
        color: var(--primary-color);
        font-weight: var(--font-weight-normal);
        font-size: var(--p-font-size);
        font-family: var(--body-font-family);
        text-align: center;
        margin-bottom: 12px;
    }

    .custom-link {
        background-color: var(--primary-color);
        color: var(--white-color);
        padding: 12px 24px;
        border-radius: var(--border-radius-large);
        font-weight: var(--font-weight-bold);
        text-decoration: none;
        display: inline-block;
        transition: all 0.3s ease-in-out;
    }

    .custom-link:hover {
        background-color: var(--dark-color);
    }
`;
document.head.appendChild(fontStyle);

// Kreiranje glavnog kontejnera za tekst i dugme
var overlayContainer = document.createElement("div");
overlayContainer.className = "overlay-container";

// Kreiranje teksta
var overlayBar = document.createElement("div");
overlayBar.className = "overlay-bar";
overlayBar.innerHTML = '<p>This is a demo website.<br>Visit <a href="https://dragokatic.github.io" style="color: var(--primary-color); text-decoration: none;">dragokatic.github.io</a> to learn more.</p>';

// Kreiranje dugmeta
var buttonLink = document.createElement("a");
buttonLink.href = "#section_2";
buttonLink.className = "custom-link";
buttonLink.innerText = "Let's begin";

// Dodavanje elemenata u glavni kontejner
overlayContainer.appendChild(overlayBar);
overlayContainer.appendChild(buttonLink);

// Dodavanje kontejnera u telo dokumenta
document.body.appendChild(overlayContainer);
})();

*/
(function() {
    // Dodavanje fonta
    var fontStyle = document.createElement("style");
    fontStyle.innerHTML = `
        @font-face {
            font-family: 'JetBrainsMono';
            src: url('https://dragokatic.github.io/fonts/JetBrainsMono-Regular.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
        }
        .overlay-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(13, 19, 33, 0.8);
            padding: 16px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            z-index: 9999;
        }
        .overlay-text {
            color: #ff911c;
            font-family: 'JetBrainsMono', sans-serif;
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 16px;
        }
        .custom-link {
            background-color: #ff911c;
            color: #0d1321;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 100px;
            font-size: 16px;
            font-weight: 700;
            display: inline-block;
            text-align: center;
            transition: all 0.3s ease-in-out;
            border: 1px solid #ff911c;
        }
        .custom-link:hover {
            background: #ff911c;
            color: #ffffff;
            border: 1px solid #ff911c;
            text-decoration: none;
        }
    `;
    document.head.appendChild(fontStyle);

    // Kreiranje kontejnera
    var overlayContainer = document.createElement("div");
    overlayContainer.className = "overlay-container";
    
    // Tekst unutar kontejnera
    var overlayText = document.createElement("p");
    overlayText.className = "overlay-text";
    overlayText.innerHTML = "Demo content<br>for display purposes only.<br>Need a custom web solution?";

    // Dugme
    var buttonContainer = document.createElement("p");
    buttonContainer.className = "mb-4";
    var buttonLink = document.createElement("a");
    buttonLink.className = "custom-link";
    buttonLink.href = "https://dragokatic.github.io/index.html#section_5";
    buttonLink.innerText = "Let's begin";
    
    buttonContainer.appendChild(buttonLink);
    
    // Dodavanje elemenata u kontejner
    overlayContainer.appendChild(overlayText);
    overlayContainer.appendChild(buttonContainer);
    
    // Dodavanje kontejnera u body
    document.body.appendChild(overlayContainer);
})();
