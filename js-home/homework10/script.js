function userCard (number) {
    let balance = 100;
    let transactionLimit = 100;
    let key;
    let time = new Date ();
    let objectOfInfo = {
        balance: balance,
        transactionLimit: transactionLimit,
        historyLogs: [],
        key: number
    };

    function getCardOptions() {
        // console.log (objectOfInfo);
        return objectOfInfo
    }

    function putCredits(money) {
        balance += money;
        objectOfInfo.historyLogs.push ({
            operationType: 'received credits',
            credits: balance,
            operationTime: time
        });
        return balance
    }

    function takeCredits(money) {
        if (balance > money && transactionLimit > money) {
            balance -= money;
            objectOfInfo.historyLogs.push ({
                operationType: 'widthdraw credits',
                credits: balance,
                operationTime: time
            });
            return balance
        } else {
            objectOfInfo.historyLogs.push ({
                operationType: 'failed widthdraw credits',
                credits: balance,
                operationTime: time
            });
            return console.log ('u have not enought money! or your transaction limit is over!')
        }
    }

    function setTransactionLimit(number) {
        transactionLimit = number;
        objectOfInfo.historyLogs.push ({
            operationType: 'transaction limit change',
            credits: balance,
            operationTime: time
        });
        return transactionLimit
    }

    function transferCredits(money, card) {
        money -= (0.5 / 100) * money;
        if (balance > money && transactionLimit > money) {
            return card.putCredits (money)
        }
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}


class User {
    constructor(nameOfUser) {
        this.name = nameOfUser;
        this.cards = [];
        this.addCard = function addCard(key) {
            let newCard = userCard(key);
            return this.cards.push(newCard);
        };
        this.getCardByKey = function getCardByKey(key) {
            for (let card of this.cards) {
                if (card.key = key) {
                    return card
                }
            }
        }
    }
};
let uss1 = new User('max');
uss1.addCard(1);
uss1.addCard(3);
uss1.addCard(2);
console.log (uss1.getCardByKey(3).getCardOptions());
console.log (uss1.cards[0].getCardOptions());

