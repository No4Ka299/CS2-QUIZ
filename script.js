function getProfileInfo() {
    const steamLink = document.getElementById('steamLink').value;
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = "Загрузка...";

    // Это просто проверка, что ссылка имеет нужный формат.
    // Настоящее извлечение данных требует работы с API Steam или парсинга страницы,
    // что за пределами простого примера.
    if(steamLink.includes("steamcommunity.com/id/") || steamLink.includes("steamcommunity.com/profiles/")) {
       
        let steamID;
       
        if(steamLink.includes("steamcommunity.com/id/")) {
            const idStart = steamLink.indexOf("steamcommunity.com/id/") + "steamcommunity.com/id/".length;
            steamID = steamLink.substring(idStart);
        } else {
            const idStart = steamLink.indexOf("steamcommunity.com/profiles/") + "steamcommunity.com/profiles/".length;
            steamID = steamLink.substring(idStart);
        }

       
        steamID = steamID.replace("/", "");
        resultDiv.innerHTML = `Обрабатываем профиль Steam ID/Custom URL: ${steamID} <br><b>Примерная стоимость:</b>  невозможно определить без Steam API`;
       
    } else {
        resultDiv.innerHTML = "Пожалуйста, введите корректную ссылку на профиль Steam.";
    }
}