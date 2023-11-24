export const Button = (text) => {
    const button= document.createElement("button")
    button.innerText=`${text}`
    return button
}