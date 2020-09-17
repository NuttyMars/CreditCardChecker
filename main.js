// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

const validateCred = myArray => {
    let arrayCopy = [...myArray];
    //console.log(arrayCopy);
    let counter = 1;
    for (let i = arrayCopy.length-1; i >=0; i--) {
        let doubleIndex = arrayCopy[i]*2;
        //console.log(`doubleIndex: ${doubleIndex}`);
        //console.log(`counter: ${counter}`);
        if (counter%2 === 0) {
            arrayCopy[i] = doubleIndex;
            //console.log(`even index: ${arrayCopy[i]}`);
            if (doubleIndex > 9) {
                arrayCopy[i] = doubleIndex - 9;
                //console.log(`even index adjusted: ${arrayCopy[i]}`);
            }
        }
        else {
            arrayCopy[i] = arrayCopy[i];
            //console.log(`odd index: ${arrayCopy[i]}`);
        }
        counter++;
    };
    //console.log(`arrayCopy: ${arrayCopy}`);
    let arraySum = 0;
    for (let j = 0; j < arrayCopy.length; j++) {
        arraySum = arraySum + arrayCopy[j];
    }
    //console.log(`arraySum: ${arraySum}`);
    if (arraySum%10 === 0) {
        return true;
    }
    else {
        return false;
    }
};
//validateCred(valid1);
//console.log(validateCred(invalid1));

let invalidCards = [];
const findInvalidCards = nestedArray => {
    for (let k = 0; k < nestedArray.length; k++) {
        if (validateCred(nestedArray[k]) === false) {
            invalidCards.push(nestedArray[k])
        }
    }
    return invalidCards;
}
//console.log(validateCred(valid1));
//console.log(findInvalidCards(batch));
findInvalidCards(batch);
//console.log(invalidCards);

const idInvalidCardCompanies = invalidArray => {
    let invalidCardCompany = [];
    for (let m = 0; m < invalidArray.length; m++) {
        switch (invalidArray[m][0]) {
            case 3:
            invalidCardCompany.push('Amex');
            break;
            case 4:
            invalidCardCompany.push('Visa');
            break;
            case 5:
            invalidCardCompany.push('Mastercard');
            break;
            case 6:
            invalidCardCompany.push('Discover');
            break;
        }
    }
    //console.log(invalidCardCompany);
    for (let n = 0; n < invalidCardCompany.length; n++) {
        //console.log(`nextIndex: ${nextIndex}`);
        for (let p = n+1; p < invalidCardCompany.length; p++) {
            if (invalidCardCompany[n] === invalidCardCompany[p]) {
            invalidCardCompany.splice(p, 1)
            }
        }
    }
    console.log(invalidCardCompany);
    return invalidCardCompany;
}
idInvalidCardCompanies(invalidCards);
