import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div>
                <a href='https://github.com/danielponturo' target='_blank' rel='noreferrer'><GitHubIcon /></a>
                <a href='https://www.linkedin.com/in/daniel-ponturo/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
            </div>
            <p>Daniel Ponturo, {currentYear}</p>
        </footer>
    );
}

export default Footer;