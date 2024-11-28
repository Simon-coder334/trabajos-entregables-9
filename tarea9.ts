function bubbleSortDesc(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}const arr: number[] = [5, 3, 8, 4, 2];
console.log("Arreglo original:", arr);
const ordenado = bubbleSortDesc(arr);
console.log("Arreglo ordenado (descendente):", ordenado);
