'use strict';

var topValue = document.getElementById('topValue'),
    bottomValue = document.getElementById('bottomValue'),
    result = document.getElementById('result'),
    resultArr = [];

/* Получаем с инпутов значение */
function getActiveButton(data) {
    var resultNumbers = '';

    if (topValue.value === '' || bottomValue.value === '') {
        console.log('заполните оба поля');
        return false;
    }

    resultNumbers = eval(topValue.value + data + bottomValue.value);

    console.log('переменная', resultNumbers);

    var changeSymbol = renderingNumber(resultNumbers);

    console.log('Изменнённая переменная', changeSymbol);

    topValue.value = '';
    bottomValue.value = '';
    result.value = changeSymbol;
    result.style.cssText = 'background: rgba(131, 232, 50, 0.88); \ opacity: 1; \  border-radius: 4px; color: black;';
    setTimeout(function () {
        result.style.cssText = 'opacity: 0.7; \ color: #fff;';
    }, 3000);
    resultArr = []; // Очищаем массив
}

/* рендерим числа */
var renderingNumber = function (number) {
    console.log('входящие символы', number);

    if (String(number).length < 1) {
        console.log('Малое значение [0 - 9]');

        if (number === '1') {
            foundSymbol = 'I';
        }
        if (number === '2') {
            foundSymbol = 'II';
        }
        if (number === '3') {
            foundSymbol = 'III';
        }
        if (number === '4') {
            foundSymbol = 'IV';
        }
        if (number === '5') {
            foundSymbol = 'V';
        }
        if (number === '6') {
            foundSymbol = 'VI';
        }
        if (number === '7') {
            foundSymbol = 'VII';
        }
        if (number === '8') {
            foundSymbol = 'VIII';
        }
        if (number === '9') {
            foundSymbol = 'IX';
        }

        resultArr.push(foundSymbol);
    } else {
        console.log('Большое значение [ > 10] ');
        for (var letter = 0; letter < String(number).length; letter++) {
            var foundSymbol = String(number)[letter];

            if (foundSymbol[letter] === '1') {
                foundSymbol = 'I';
            }
            if (foundSymbol[letter] === '4') {
                foundSymbol = 'IV';
            }
            if (foundSymbol[letter] === '5') {
                foundSymbol = 'V';
            }
            if (foundSymbol[letter] === '9') {
                foundSymbol = 'IX';
            }
            if (foundSymbol[letter] === '10') {
                foundSymbol = 'X';
            }
            if (foundSymbol[letter] === '20') {
                foundSymbol = 'XX';
            }
            if (foundSymbol[letter] === '30') {
                foundSymbol = 'XXX';
            }
            if (foundSymbol[letter] === '40') {
                foundSymbol = 'XL';
            }
            if (foundSymbol[letter] === '50') {
                foundSymbol = 'L';
            }
            if (foundSymbol[letter] === '60') {
                foundSymbol = 'LX';
            }
            if (foundSymbol[letter] === '70') {
                foundSymbol = 'LXX';
            }
            if (foundSymbol[letter] === '80') {
                foundSymbol = 'LXXX';
            }
            if (foundSymbol[letter] === '90') {
                foundSymbol = 'XC';
            }
            if (foundSymbol[letter] === '100') {
                foundSymbol = 'C';
            }
            if (foundSymbol[letter] === '500') {
                foundSymbol = 'D';
            }
            if (foundSymbol[letter] === '1000') {
                foundSymbol = 'M';
            }

            resultArr.push(foundSymbol);
        }
    }

    console.log('resultArr', resultArr);

    return number;
};

