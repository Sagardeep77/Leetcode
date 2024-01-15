//Solution - 1 =============> O(n^2)

function findWinners(matches: number[][]): number[][] {
    const loserMapCount = {};
    const notALoser = [];
    const oneTimeLoser = [];
    for (const [winner, loser] of matches) {
        loserMapCount[loser] = loserMapCount[loser] ? loserMapCount[loser] + 1 : 1;
    }

    for (const [winner, loser] of matches) {
        // winning all matches === not losing a single match, i.e loserMapCount does not have any property
        if (!loserMapCount.hasOwnProperty(winner) && !notALoser.includes(winner)) {
            notALoser.push(winner);
        }
    }

    for (const loser in loserMapCount) {
        //only include the loser which lost only one time
        if (loserMapCount[loser] === 1) {
            oneTimeLoser.push(loser);
        }
    }

    return [notALoser.sort((a, b) => a - b), oneTimeLoser.sort((a, b) => a - b)];
}


// Solution - 2 ===============>  O(matches)


function findWinners2(matches: number[][]): number[][] {
    const playerStats = {};
    const neverLost: number[] = [];
    const oneTimeLoser: number[] = [];
    for (const [winner, loser] of matches) {

        //update the statistics of player for winner
        if (playerStats.hasOwnProperty(winner)) {
            playerStats[winner].win++;
        }
        else {
            playerStats[winner] = {
                win: 1,
                lost: 0
            }
        }

        //update the statistics of player for loser
        if (playerStats.hasOwnProperty(loser)) {
            playerStats[loser].lost++;
        }
        else {
            playerStats[loser] = {
                win: 0,
                lost: 1
            }
        }
    }

    for (const key in playerStats) {
        const [win, lose] = [playerStats[key].win, playerStats[key].lost];

        if (lose === 0)
            neverLost.push(Number(key));

        if (lose === 1)
            oneTimeLoser.push(Number(key));
    }

    return [neverLost, oneTimeLoser];
}
