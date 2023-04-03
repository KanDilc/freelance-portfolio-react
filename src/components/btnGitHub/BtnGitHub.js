import "./style.css";
import githubIcon from "../../img/icons/gitHub-black.svg";

const BtnGitHub = () => {
    return ( 
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-outline">
            <img src={githubIcon} alt="" />
            GitHub repo
        </a>

     );
}
 
export default BtnGitHub;