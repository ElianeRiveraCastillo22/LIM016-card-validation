import { Card } from "../components/Card.js"
import { FormHome } from "../components/FormHome.js"
import { Header } from "../components/Header.js"
import { TextWelcome } from "../atoms/TextWelcome.js"
import { Button } from "../atoms/Button.js"


export const Home = () => {
    const template = document.createElement("div")
    template.append(Header())
    template.append(TextWelcome)
    template.append(Card())
    template.append(FormHome())
    template.append(Button())

    return template

}