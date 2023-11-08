import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    return <footer id="bottom_container">
    <a class="footer-link" href="https://www.linkedin.com/in/abioro-olamide-481727177/">LinkedIn</a>
        <a classNAme="footer-link" href="https://twitter.com/hollamyday02?t=kz7QS0-zx2zt9ZtS8QOqLA&s=08">Twitter</a>
        <a className="footer-link" href="https://Instagram.com/olamideabioro/">Instagram</a>
    <p>
        copyright © Abioro Olamide, {year}
    </p>
</footer>
}

export default Footer;