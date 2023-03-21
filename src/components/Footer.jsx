import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from "../assets/img1.jpg"

const Footer = () => {
  return (
    <footer>
      <div>
      <img src={me} alt="Amol" />

        <h2>Amol Savare</h2>
        <p>“
Only time will tell who you are.”</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          
          <a href="https://github.com/amolssavare" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/amol-savare-32465421a" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/amol_savare45" target={"blank"}>
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
