const API_KEY = '9685132CF9DAD5B34F3089AD140821FE'; // Вставлен ваш API-ключ

function getProfileInfo() {
    const steamLink = document.getElementById('steamLink').value;
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = "Загрузка...";

    if (steamLink.includes("steamcommunity.com/id/") || steamLink.includes("steamcommunity.com/profiles/")) {
        let steamID;

        if (steamLink.includes("steamcommunity.com/id/")) {
            const idStart = steamLink.indexOf("steamcommunity.com/id/") + "steamcommunity.com/id/".length;
            steamID = steamLink.substring(idStart);
        } else {
            const idStart = steamLink.indexOf("steamcommunity.com/profiles/") + "steamcommunity.com/profiles/".length;
            steamID = steamLink.substring(idStart);
        }

        steamID = steamID.replace("/", "");

        // Функция для получения и обработки данных профиля Steam
        fetchSteamData(steamID)
            .then(profileData => {
                displayProfileData(profileData);
               return fetchOwnedGames(steamID);
            })
            .then(gameData => {
                displayGameData(gameData)
            })
            .catch(error => {
                resultDiv.innerHTML = `Ошибка при получении данных: ${error}`;
            });


    } else {
        resultDiv.innerHTML = "Пожалуйста, введите корректную ссылку на профиль Steam.";
    }
}


// Функция для получения данных о профиле Steam с использованием Steam API
async function fetchSteamData(steamID) {
    const apiEndpoint = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${API_KEY}&steamids=${steamID}`;

    try {
       const response = await fetch(apiEndpoint);
      
        if (!response.ok) {
             const message = `Ошибка: ${response.status}`;
             throw new Error(message)
          
        }

       const data = await response.json();

        if(data.response.players.length > 0)
            return data.response.players[0]
        else
           throw new Error("Профиль не найден");

    } catch(error) {
        throw new Error (`Произошла ошибка при запросе: ${error.message}`);
    }
}

async function fetchOwnedGames(steamID) {
    const apiEndpoint = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${API_KEY}&steamid=${steamID}&include_appinfo=true&include_played_free_games=true`;
  
    try {
        const response = await fetch(apiEndpoint);
        if(!response.ok) {
            const message = `Ошибка: ${response.status}`;
            throw new Error(message);
        }

      const data = await response.json();
    
       if (data.response && data.response.games) {
          return data.response.games;
        }
        else
           throw new Error("У пользователя нет игр");

    } catch(error) {
        throw new Error(`Произошла ошибка при запросе списка игр: ${error.message}`);
    }
}


function displayProfileData(profileData) {
    const resultDiv = document.getElementById('result');
    if (profileData) {
        resultDiv.innerHTML = `
        <img src="${profileData.avatarfull}" alt="Avatar">
        <p><strong>Никнейм:</strong> ${profileData.personaname}</p>
        <p><strong>Профиль:</strong> <a href="${profileData.profileurl}" target="_blank">Открыть Steam-профиль</a></p>
        <hr>
        <p><strong>Список игр:</strong></p>
        <ul id="game-list"></ul>
     `;
    } else {
        resultDiv.innerHTML = "Не удалось получить информацию о профиле";
    }
}

function displayGameData(gameData) {
    const gameList = document.getElementById('game-list');
    let totalCost = 0;
  
    if(gameData && gameData.length > 0 )
        {
          
        gameData.forEach(game => {
            const listItem = document.createElement('li');
          
            let priceText = "";
            if(game.price_overview) {
             priceText = ` - ${game.price_overview.final_formatted}`;
               totalCost += game.price_overview.final;

            }
            else {
              priceText = " - цена не найдена"
            }
            listItem.textContent = `${game.name}${priceText}`;
            gameList.appendChild(listItem);
          });
           const totalCostElement = document.createElement('p');
           totalCostElement.innerHTML = `<strong>Примерная общая стоимость:</strong> ${totalCost / 100} $`
           gameList.parentNode.appendChild(totalCostElement);

      }  else {
        const listItem = document.createElement("li");
        listItem.textContent = "У пользователя нет игр";
        gameList.appendChild(listItem);
    }
}