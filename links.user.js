// ==UserScript==
// @name         WP
// @namespace    http://tampermonkey.net/
// @version      2024-10-19
// @description  try to take over the world!
// @author       @bagd1k
// @match        https://wildpolitics.ru/war/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wildpolitics.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const regions = {
        "IT-SAR": "42",
        "RU-SKF": "74",
        "UA-ZT": "67",
        "UA-KG": "72",
        "CER-CER": "45",
        "IT-CEN": "1",
        "PL-PK": "63",
        "SLO-SLO": "11",
        "MKD-MKD": "39",
        "RO-BU": "61",
        "UA-VN": "68",
        "RO-RO": "48",
        "FR-BB": "56",
        "UA-MY": "73",
        "TUR-CEN": "5",
        "FR-GE": "55",
        "SYR-SYR": "54",
        "TUR-EAS": "17",
        "HU-HU": "49",
        "FR-AA": "58",
        "MOL-MOL": "62",
        "GR-CRI": "41",
        "CRO-CRO": "47",
        "DE-RP": "59",
        "RU-KDK": "75",
        "SOS-SOS": "37",
        "IT-SIC": "21",
        "DE-HE": "3",
        "GR-GR": "2",
        "AZE-AZE": "16",
        "CH-CH": "50",
        "IT-SOU": "9",
        "CYP-CYP": "40",
        "BOS-HER": "44",
        "PL-SL": "25",
        "FR-KOR": "10",
        "UA-OD": "69",
        "TUR-SOU": "43",
        "ARM-ARM": "15",
        "TUR-NOR": "13",
        "IRA-CEN": "52",
        "ALB-ALB": "46",
        "UA-KII": "70",
        "PL-LB": "30",
        "PL-LD": "34",
        "DE-SA": "60",
        "PL-SK": "65",
        "UA-CK": "71",
        "DE-TH": "23",
        "DE-ST": "24",
        "DE-BB": "28",
        "DE-SN": "29",
        "PL-MZ": "64",
        "IT-NOR": "7",
        "ABK-ABK": "38",
        "TUR-WES": "6",
        "IRQ-IRQ": "53",
        "IRA-AZE": "51",
        "SK-SK": "36",
        "UA-IF": "66",
        "BG-BG": "8",
        "DE-BW": "14",
        "DE-BY": "22",
        "SER-SER": "4",
        "CZ-CZ": "27",
        "FR-AZ": "57",
        "GE-GE": "20",
        "RU-SPE": "12",
        "AT-AT": "26",
        "PL-DS": "31"
    }
    // Находим все картинки с нужным src
    const images = document.querySelectorAll('img[src*="/static/img/regions/"]');

    images.forEach(image => {
        const src = image.src;

        // Извлекаем код региона из src
        const regionCode = src.match(/regions\/(.*?)\.png/)[1];

        // Проверяем, есть ли код в объекте соответствия
        if (regions[regionCode]) {
            // Создаем ссылку
            const link = document.createElement('a');
            link.href = `https://wildpolitics.ru/region/${regions[regionCode]}/`;
            link.appendChild(image.cloneNode(true));

            // Заменяем картинку на ссылку с картинкой внутри
            image.parentNode.replaceChild(link, image);
        }
    });
})();

