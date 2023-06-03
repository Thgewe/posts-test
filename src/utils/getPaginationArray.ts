export function getPaginationArray(totalPages: number): number[] {
    const arr: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
        arr.push(i);
    }
    return arr;
}