let arrNumber = [['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
    ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']];

module.exports = function toReadable (number) {
    let result = '';
    if (number <= 10) {
        result = arrNumber[0][number];
    } else if (number < 20) {
        result = arrNumber[1][number%10];
    } else if (number < 100) {
        if (number%10 == 0) {
            result = arrNumber[2][parseInt(number/10)-2];
        } else result = arrNumber[2][parseInt(number/10)-2] + ' ' + arrNumber[0][number%10];
    } else if (number < 1000) {
        if (number%100 == 0) {
            result = arrNumber[3][parseInt(number/100)-1];
        } else if ((number - parseInt(number/100)*100) <= 10) {
            result = arrNumber[3][parseInt(number/100)-1] + ' ' + arrNumber[0][number%100];
        } else if ((number - parseInt(number/100)*100) < 20) {
            result = arrNumber[3][parseInt(number/100)-1] + ' ' + arrNumber[1][number%10];
        } else {
            if (number%10 == 0) {
                result = arrNumber[3][parseInt(number/100)-1] + ' ' + arrNumber[2][number%100/10 - 2];
            } else result = arrNumber[3][parseInt(number/100)-1] + ' ' + arrNumber[2][parseInt(number%100/10) - 2] + ' ' + arrNumber[0][number%10];
        }
    }
    return result;
}
