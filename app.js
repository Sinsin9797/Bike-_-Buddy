
const translations = {
    en: {
        title: "Live Cycling Map",
        weatherTitle: "Weather Alerts",
        repairTitle: "Nearby Repair Stations",
        footer: "Made for Netherlands Cyclists"
    },
    nl: {
        title: "Live Fietskaart",
        weatherTitle: "Weeralarmen",
        repairTitle: "Dichtstbijzijnde Reparatiestations",
        footer: "Gemaakt voor Nederlandse Fietsers"
    }
};

let lang = localStorage.getItem("lang") || "en";
applyTranslations();

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function toggleLanguage() {
    lang = lang === "en" ? "nl" : "en";
    localStorage.setItem("lang", lang);
    applyTranslations();
}

function applyTranslations() {
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("weatherTitle").innerText = translations[lang].weatherTitle;
    document.getElementById("repairTitle").innerText = translations[lang].repairTitle;
    document.querySelector("footer").innerText = translations[lang].footer;
    loadWeather();
    loadRepairStations();
}

function loadWeather() {
    document.getElementById("weather").innerText = lang === "en" ? "Sunny, 18°C" : "Zonnig, 18°C";
}

function loadRepairStations() {
    const stations = [
        "CycleFix – 300m away",
        "BikeDoctor – 500m away",
        "WheelCare – 750m away"
    ];
    const list = document.getElementById("stations");
    list.innerHTML = "";
    stations.forEach(station => {
        const li = document.createElement("li");
        li.innerText = station;
        list.appendChild(li);
    });
}
