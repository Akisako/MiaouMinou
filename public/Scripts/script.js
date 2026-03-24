"use strict";

(() => {
    const variants = [
        "angry",
        "default",
        "flustered",
        "pout",
        "smug",
        "talk"
    ]
    function onReady() {
        let variant = variants[Math.floor(Math.random() * variants.length)];
        let imgEl = document.getElementById("myaonya");
        imgEl.src = `Assets/Placeholder/Placeholder-Myaonya-${variant}.png`;
    }
    document.addEventListener("DOMContentLoaded", onReady);
})();