const divide = arr => {
    const mitad = arr.length % 2 === 0 ? (Math.floor(arr.length) / 2) - 1 : Math.floor(arr.length / 2);
    return arr.slice(0, mitad);

}
let i = divide([2, 3]);
console.log(i);

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const mitad = Math.floor(arr.length / 2);

        izq = arr.splice(0, mitad);
        der = arr.shift()
        return izq;
    }
}
console.log(mergeSort([1, 2, 3, 4]));