/**
 * 
 * @param {string} txt - The input text to be sliced
 * @param {number} [max=50] - The maximum length before truncation
 * @returns - A slice of the given string with a max length and an ellipsis if necessary.
 */
export function txtslicer (txt:string , max:number = 50) {
    if(txt.length >= 50){return `${txt.slice(0,max)}...`}
    return txt
}