(function () {
    "use strict";

    /* ===============================
       CORE CONFIG (PERSONAL DATA)
       =============================== */
    var CORE_CONFIG = {
        schemaType: "person", // "person" | "organization"

        person: {
            name: "Drago Katić",
            jobTitle: "PHP Developer",
            url: "https://dragokatic.github.io",
            image: "https://dragokatic.github.io/images/drago-katic-php-developer.jpg",
            description: "PHP Developer with 20+ years of experience specializing in websites, CMS, and eCommerce.",
            sameAs: [
                "https://x.com/DragoKatic",
                "https://github.com/DragoKatic",
                "https://www.instagram.com/drago.katic.development",
                "https://www.tiktok.com/@drago.katic.development",
                "https://www.facebook.com/drago.katic.development",
                "https://www.linkedin.com/in/dragokatic"
            ]
        },

        organization: {
            name: "Drago Katić Development",
            url: "https://dragokatic.github.io",
            logo: "https://dragokatic.github.io/images/logo.png",
            sameAs: []
        }
    };

    /* ===============================
       VIEWPORT HANDLING
       =============================== */
    function isInstagramWebView() {
        return /Instagram/i.test(navigator.userAgent);
    }

    (function updateViewport() {
        var meta = document.querySelector('meta[name="viewport"]');

        if (!meta) {
            meta = document.createElement("meta");
            meta.name = "viewport";
            document.head.appendChild(meta);
        }

        meta.content = isInstagramWebView()
            ? "width=device-width, initial-scale=0.9, user-scalable=no"
            : "width=device-width, initial-scale=1, user-scalable=no";
    })();

    /* ===============================
       JSON-LD SCHEMA (AUTO)
       =============================== */
    (function injectSchema() {
        var data;

        if (CORE_CONFIG.schemaType === "organization") {
            data = {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": CORE_CONFIG.organization.name,
                "url": CORE_CONFIG.organization.url,
                "logo": CORE_CONFIG.organization.logo,
                "sameAs": CORE_CONFIG.organization.sameAs
            };
        } else {
            data = {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": CORE_CONFIG.person.name,
                "jobTitle": CORE_CONFIG.person.jobTitle,
                "url": CORE_CONFIG.person.url,
                "image": CORE_CONFIG.person.image,
                "description": CORE_CONFIG.person.description,
                "sameAs": CORE_CONFIG.person.sameAs
            };
        }

        var script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(data);
        document.head.appendChild(script);
    })();

})();