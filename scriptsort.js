/*jslint plusplus: true, browser: true, devel: true */
function sortmass() {
    "use strict";
    var n, arr, k, i, r, j, s;
    n = prompt('введите длину массива', 1);
    arr = [];
    if (n > 0) {
        //заполняем массив
        for (k = 0; k < n; k++) {
            arr[k] = parseFloat(prompt('введите число -  ' + (k + 1) + '-ый элемент массива'));
            if (isNaN(arr[k]) === true) {
                alert('не является числом!!!');
                k--;
            }
        }
        /*
        метод сортировки включением
        */
        for (i = 1; i < arr.length; i++) {
            r = arr[i];
            j = i - 1;
            while (j >= 0 && arr[j] > r) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = r;
        }
        s = '';
        for (k = 0; k < arr.length; k++) {
            s = s + ' ' + arr[k];
        }
        alert('массив ' + s);
    } else {
        alert('массив пустой');
    }
}