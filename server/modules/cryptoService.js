const CryptoBlockchain = require("./crypto");

let smashingCoin = new CryptoBlockchain();

module.exports = function main() {
    return new Promise((resolve) => {
        console.log("smashingCoin mining in progress....");

        smashingCoin.addNewBlock(1, "01/06/2020", {
            sender: "Iris Ljesnjanin",
            recipient: "Cosima Mielke",
            quantity: 50,
        });
        
        smashingCoin.addNewBlock(2, "01/07/2020", {
            sender: "Vitaly Friedman",
            recipient: "Ricardo Gimenes",
            quantity: 100,
        });
        
        smashingCoin.addNewBlock(2, "01/07/2020", {
            sender: "Vitaly Friedman",
            recipient: "Ricardo Gimenes",
            quantity: 100,
        });

        resolve(smashingCoin)

        // console.log(JSON.stringify(smashingCoin, null, 4));
    })   
}
