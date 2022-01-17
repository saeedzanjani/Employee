export const pagination = (arr: any, currentPage: number, perPage: number) => {
    let startIndex = (currentPage - 1) * perPage
    let endIndex = currentPage * perPage
    return arr.slice(startIndex, endIndex)
}