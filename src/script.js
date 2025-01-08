document.addEventListener('DOMContentLoaded', function() {
    const startMatchButton = document.getElementById('startMatch');
    const resultDiv = document.getElementById('result');
    const winnerText = document.getElementById('winner');
    const matchScoreText = document.getElementById('matchScore');
    const probabilitiesText = document.getElementById('probabilities');
    const commentText = document.getElementById('comment');
    const matchLogDiv = document.getElementById('matchLog');
    const team1Select = document.getElementById('team1');
    const team2Select = document.getElementById('team2');
    const team1RosterDiv = document.getElementById('team1Roster');
    const team2RosterDiv = document.getElementById('team2Roster');
    const team1LogoDiv = document.getElementById('team1Logo');
    const team2LogoDiv = document.getElementById('team2Logo');
    const matchFormatSelect = document.getElementById('matchFormat');
    const team1RatingDiv = document.getElementById('team1Rating');
    const team2RatingDiv = document.getElementById('team2Rating');

    let team1Wins = 0;
    let team2Wins = 0;
    let matchFinished = false;

const playerRatings = {
        "sh1ro": 1.25, "donk": 1.35, "chopper": 1.05, "magixx": 1.0, "zont1x": 1.15,
        "malbsMd": 1.05, "huNter-": 1.15, "m0NESY": 1.30, "Snax": 0.95, "Нет игрока": 0,
        "aleksib": 1.0, "b1t": 1.20, "iM": 1.10, "jL": 1.15, "w0nderful": 1.25,
        "apEX": 1.0, "ZywOo": 1.40, "flameZ": 1.10, "Spinx": 1.25, "mezii": 1.15,
        "Jimpphat": 1.10, "torzsi": 1.20, "siuhy": 1.05, "Brollan": 1.15, "xertioN": 1.10,
        "karrigan": 1.0, "rain": 1.10, "broky": 1.25, "frozen": 1.20, "ropz": 1.30,
        "bLitz": 1.0, "Techno4K": 1.05, "910": 1.0, "mzinho": 1.05, "Senzu": 1.05,
        "NAF": 1.10, "jks": 1.15, "Twistzz": 1.25, "ultimate": 1.0, "NertZ": 1.15,
         "NiKo": 1.30,  "Magisk": 1.20, "TeSeS": 1.10, "degster": 1.15, "kyxsan": 1.05, "device": 1.03, "cadiaN": 0.85, "stavn": 1.11, "jabbi": 1.12, "Staehr": 1.06, "FalleN": 0.98, "chelo": 1.00, "yuurih": 1.12, "KSCERATO": 1.18, "skullz": 1.05, "exit": 1.05, "Lucaozy": 0.99, "saffee": 1.01, "drop": 0.97, "insani": 1.15
    };
const teamRosters = {
    spirit: ["sh1ro", "donk", "chopper", "magixx", "zont1x"],
    g2: ["malbsMd", "huNter-", "m0NESY", "Snax", "Нет игрока"],
    natus_vincere: ["aleksib", "b1t", "iM", "jL", "w0nderful"],
    vitality: ["apEX", "ZywOo", "flameZ", "Spinx", "mezii"],
    mouz: ["Jimpphat", "torzsi", "siuhy", "Brollan", "xertioN"],
    faze: ["karrigan", "rain", "broky", "frozen", "ropz"],
    the_mongolz: ["bLitz", "Techno4K", "910", "mzinho", "Senzu"],
    liquid: ["NAF", "jks", "Twistzz", "ultimate", "NertZ"],
    falcons: ["NiKo", "Magisk", "TeSeS", "degster", "kyxsan"],
    astralis: ["device", "cadiaN", "stavn", "jabbi", "Staehr"],
    furia: ["FalleN", "chelo", "yuurih", "KSCERATO", "skullz"],
    mibr: ["exit", "Lucaozy", "saffee", "drop", "insani"]
};
 const teamLogos = {
     spirit: 'url("https://img-cdn.hltv.org/teamlogo/syrtYYKR7sBRw3ZHy1YFX7.png?ixlib=java-2.1.0&w=100&s=8d98ab33e1c8139633132cb9eccda0af")',
      g2: 'url("https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=100&s=88aeba1564bc27de69fb2302e47e1a7c")',
       natus_vincere: 'url("https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c")',
        vitality: 'url("https://img-cdn.hltv.org/teamlogo/ogcHrcCdzRvxbYvAz04KAN.png?ixlib=java-2.1.0&w=100&s=c7577435f1641f0802c586934e6a4b6a")',
        mouz: 'url("https://img-cdn.hltv.org/teamlogo/IejtXpquZnE8KqYPB1LNKw.svg?ixlib=java-2.1.0&s=7fd33b8def053fbfd8fdbb58e3bdcd3c")',
        faze: 'url("https://img-cdn.hltv.org/teamlogo/zbcwVqDX-cVjB7EidzNoPd.png?ixlib=java-2.1.0&w=100&s=5d6488f42991807e0d921d0290c711ab")',
         the_mongolz: 'url("https://img-cdn.hltv.org/teamlogo/bRk2sh_tSTO6fq1GLhgcal.png?ixlib=java-2.1.0&w=100&s=1bd99148a19e1e706b543500206901d4")',
           liquid: 'url("https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62")',
            falcons: 'url("https://img-cdn.hltv.org/teamlogo/4eJSkDQINNM6Tbs4WvLzkN.png?ixlib=java-2.1.0&w=100&s=01e7f9dd30b34e66f429f43627c2e005")',
            mibr: 'url("https://img-cdn.hltv.org/teamlogo/sVnH-oAf1J5TnMwoY4cxUC.png?ixlib=java-2.1.0&w=100&s=8ace09ef5b2fac0eb7cd65213ad3cc85")',
            furia: 'url("https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c")',
            astralis: 'url("https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067")'
   
 }
  const teamRatings = {
        spirit: 996,
        g2: 842,
        natus_vincere: 810,
        vitality: 686,
        mouz: 631,
        faze: 578,
        the_mongolz: 446,
        liquid: 319,
        falcons: 274,
        astralis: 261,
        mibr: 220,
        furia: 309
    };

 const displayTeamRoster = (teamSelect, rosterDiv) => {
        const selectedTeam = teamSelect.value;
            rosterDiv.innerHTML = ''; // Очищаем предыдущий состав
             if (teamRosters[selectedTeam]) {
            const ul = document.createElement('ul');
                teamRosters[selectedTeam].forEach(player => {
                    const li = document.createElement('li');
                    li.textContent = player;
                    ul.appendChild(li);
                 });
                rosterDiv.appendChild(ul);
            }
        else {
               rosterDiv.textContent = `Временно недоступно.`;
            }

}
const displayTeamLogo = (teamSelect, logoDiv) => {
  const selectedTeam = teamSelect.value;
  logoDiv.style.backgroundImage = teamLogos[selectedTeam] || '';
}
 const displayTeamRating = (teamSelect, teamRatingDiv) => {
  const selectedTeam = teamSelect.value;
    teamRatingDiv.textContent = teamRatings[selectedTeam] || '';
}

    team1Select.addEventListener('change', () => {
        displayTeamRoster(team1Select, team1RosterDiv);
        displayTeamLogo(team1Select, team1LogoDiv);
          displayTeamRating(team1Select, team1RatingDiv);

    });
        team2Select.addEventListener('change', () => {
             displayTeamRoster(team2Select, team2RosterDiv);
            displayTeamLogo(team2Select, team2LogoDiv);
              displayTeamRating(team2Select, team2RatingDiv)
        });

    displayTeamRoster(team1Select, team1RosterDiv)
    displayTeamRoster(team2Select, team2RosterDiv)
    displayTeamLogo(team1Select, team1LogoDiv);
    displayTeamLogo(team2Select, team2LogoDiv)
    displayTeamRating(team1Select, team1RatingDiv);
    displayTeamRating(team2Select, team2RatingDiv);
    startMatchButton.addEventListener('click', function() {
        //Сбросить все данные
        matchLogDiv.innerHTML = '';
        team1Wins = 0;
        team2Wins = 0;
         matchFinished = false;
        resultDiv.style.display = 'none';

        const team1Name = document.getElementById('team1').value;
        const team2Name = document.getElementById('team2').value;
         const matchFormat = parseInt(matchFormatSelect.value, 10);



         const calculateTeamRating = (teamName) => {
            let totalRating = 0;
             const team = teamName.toLowerCase().replace(" ", "_")
            if(teamRosters[team]) {
                 teamRosters[team].forEach(player => {
                    totalRating += playerRatings[player] || 0; // Если нет рейтинга для игрока, использовать 0
                });
            }
             return totalRating;
        }

      const team1Rating = calculateTeamRating(team1Name);
      const team2Rating = calculateTeamRating(team2Name);


        if (!team1Name || !team2Name ) {
            alert('Пожалуйста, выберите команды.');
            return;
        }

        const totalRating = team1Rating + team2Rating;
        const probability1 = team1Rating / totalRating;
        const probability2 = team2Rating / totalRating;



        const logMatch = (message) =>{
            const logElement = document.createElement('p');
            logElement.textContent = message;
            matchLogDiv.appendChild(logElement);
        }

         const showMatchResult = (team1Wins, team2Wins) => {

             let winner = '';
             let comment = '';
             if (team1Wins > team2Wins) {
                 winner = `Победитель: ${team1Name}`;
                  comment = `Победа ${team1Name}, они оказались сильнее чем ${team2Name}`;
             } else if (team2Wins > team1Wins) {
                 winner = `Победитель: ${team2Name}`;
                    comment = `Победа ${team2Name}, они оказались сильнее чем ${team1Name}`;
             }
              else{
                   winner = "Коэффициенты равны, сложно предсказать победителя!";
                   comment = "Рейтинги на победу обеих команд равны.";
             }

             winnerText.textContent = winner;
             matchScoreText.textContent = `Счет: ${team1Name} ${team1Wins} - ${team2Wins} ${team2Name}`;
            probabilitiesText.textContent = `Вероятности:\n${team1Name}: ${(probability1 * 100).toFixed(2)}% \n${team2Name}: ${(probability2 * 100).toFixed(2)}%`;
            commentText.textContent = comment;
            resultDiv.style.display = 'block';
         }



    const playMap = (mapNum) => {
        let team1MapWins = 0;
        let team2MapWins = 0;
       logMatch(`--- Карта ${mapNum} ---`);


     const playRound = () => {

            const randomValue = Math.random();

            if (randomValue < probability1) {
                team1MapWins++;
              logMatch(`Раунд выиграла команда: ${team1Name}`);
            } else {
                team2MapWins++;
                 logMatch(`Раунд выиграла команда: ${team2Name}`);
            }

            if (team1MapWins === 13 || team2MapWins === 13 ) {
                if (team1MapWins > team2MapWins){
                    team1Wins++;
                    logMatch(`${team1Name} выиграла карту ${mapNum} со счетом ${team1MapWins} - ${team2MapWins}`);

                } else {
                    team2Wins++;
                     logMatch(`${team2Name} выиграла карту ${mapNum} со счетом ${team2MapWins} - ${team1MapWins}`);
                }


                if (team1Wins === Math.ceil(matchFormat / 2) || team2Wins === Math.ceil(matchFormat/ 2)) {
                   matchFinished = true;
                   showMatchResult(team1Wins, team2Wins)

                 }
                   else if (mapNum < matchFormat)
                   setTimeout(() => playMap(mapNum + 1), 1000);

            }
             else if (team1MapWins < 24 && team2MapWins < 24)
                setTimeout(playRound, 100);
        }
        playRound();
    }
      playMap(1);
    });
});