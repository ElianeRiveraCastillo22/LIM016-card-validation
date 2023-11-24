export const Header = () =>{
    const header = document.createElement("header");
    header.innerHTML=`
        <section>
            <figure>
                <img src="#" alt="logo verify card"/>
            </figure>
            <p><span>Verify</span>card</p>
        </section>
        `
    return header
}