import { images } from "../constants";

// Give a not repetitive random number
let temp;
export const randomNumber = () => {
    const rndNumber = Math.floor(Math.random() * images.length)
    if (temp == rndNumber) {
        return randomNumber()
    }
    else {
        temp = rndNumber;
        return rndNumber
    }
}
// End

export const random = () => {
    const rndNumber = Math.floor(Math.random() * 255)
    return rndNumber
}

export const randomColor = () => {
    return `rgb(${random()}, ${random()}, ${random()})`
}