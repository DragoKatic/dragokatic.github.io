// head-meta-tracking-schema.js
// Central config + Viewport + Analytics + Tracking + JSON-LD + GDPR

(function () {
    "use strict";

    /* ===============================
       CENTRAL CONFIG
       =============================== */
    var SITE_CONFIG = {
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
        },

        analytics: {
            ga4: "G-L1P8VCRL9Y",
            clarity: "qwbz0zj2nw",
            metaPixel: "META_PIXEL_ID"
        }
    };

    /* ===============================
       GDPR CONSENT CHECK
       =============================== */
    function hasConsent() {
        // Primeri: localStorage, cookie, CMP hook
        return localStorage.getItem("cookie_consent") === "accepted";
    }

    /* ===============================
       VIEWPORT (Instagram WebView)
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
       JSON-LD (AUTO Person / Org)
       =============================== */
    (function injectSchema() {
        var data;

        if (SITE_CONFIG.schemaType === "organization") {
            data = {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": SITE_CONFIG.organization.name,
                "url": SITE_CONFIG.organization.url,
                "logo": SITE_CONFIG.organization.logo,
                "sameAs": SITE_CONFIG.organization.sameAs
            };
        } else {
            data = {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": SITE_CONFIG.person.name,
                "jobTitle": SITE_CONFIG.person.jobTitle,
                "url": SITE_CONFIG.person.url,
                "image": SITE_CONFIG.person.image,
                "description": SITE_CONFIG.person.description,
                "sameAs": SITE_CONFIG.person.sameAs
            };
        }

        var s = document.createElement("script");
        s.type = "application/ld+json";
        s.text = JSON.stringify(data);
        document.head.appendChild(s);
    })();

    /* ===============================
       TRACKING (CONSENT-AWARE)
       =============================== */
    if (hasConsent()) {

        /* Google Analytics */
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        window.gtag = gtag;

        gtag("js", new Date());
        gtag("config", SITE_CONFIG.analytics.ga4, { anonymize_ip: true });

        var ga = document.createElement("script");
        ga.async = true;
        ga.src = "https://www.googletagmanager.com/gtag/js?id=" + SITE_CONFIG.analytics.ga4;
        document.head.appendChild(ga);

        /* Microsoft Clarity */
        (function (c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", SITE_CONFIG.analytics.clarity);

        /* Meta Pixel */
        (function(f,b,e,v,n,t,s){
            if(f.fbq)return;
            n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version="2.0";
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s);
        })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

        fbq("init", SITE_CONFIG.analytics.metaPixel);
        fbq("track", "PageView");
    }

})();