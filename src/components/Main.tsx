import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar-circle.jpg';
import '../assets/styles/Main.scss';

function Main() {

    return (
        <div id='main' className='container'>
            <div className='about-section'>
                <div className='image-wrapper'>
                    <img src={avatar} alt='Avatar' />
                </div>
                <div className='content'>
                    <div className='social_icons'>
                        <a href='https://github.com/danielponturo' target='_blank' rel='noreferrer'><GitHubIcon /></a>
                        <a href='https://www.linkedin.com/in/daniel-ponturo/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
                    </div>
                    <h1>Daniel Ponturo</h1>
                    <p>Software Engineer</p>

                    <div className='mobile_social_icons'>
                        <a href='https://github.com/danielponturo' target='_blank' rel='noreferrer'><GitHubIcon /></a>
                        <a href='https://www.linkedin.com/in/daniel-ponturo/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;