import { Card } from "../components/Card.js"
import { Header } from "../components/Header.js"
import { ValidationStatus } from "../atoms/ValidationStatus.js"
import { Button } from "../atoms/Button.js"

export const ValidatedCard = () => {
    const template = document.createElement("div")
    template.append(Header())
    template.append(Card())
    template.append(ValidationStatus())
    template.append(Button())
    return template
}