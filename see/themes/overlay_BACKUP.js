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
