import { Home } from "../templates/Home.js"
import { InvalidCard } from "../templates/invalidCard.js"
import { ValidatedCard } from "../templates/validatedCard.js"

export const Router = (root) => {
    let {hash} = location
    console.log(hash)
    switch(hash){
        case "":
        case "#":
        case "#/":{
            return root.append(Home())
            break;
        };
        case "#/card/invalid":{
            return root.append(InvalidCard());
            break;
        };
        case "#/card/valid":{
            return root.append(ValidatedCard())
            break;
        };
        default:
    }
}