function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return attempts;
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        const tries = fiveHeadsSync();
        if (tries < 100){
            resolve(`It takes ${tries} attempts to get five heads straight`);
        } else {
            reject(`It takes so long (${tries} attempts) to get five heads straight`);
        }
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");
