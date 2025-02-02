import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Contact() {

    return (
        <div id='contacts'>
            <div className='items-container'>
                <h1>Contacts</h1>
                <div className='contacts-container'>
                    <p>
                        Daniel Ponturo<br />
                        Liverpool<br />
                        United Kingdom<br />
                        <span><LocalPhoneIcon />&nbsp;+44(0)7842473844</span>
                        <span><EmailIcon />&nbsp;<a href='mailto:daniel.ponturo99@gmail.com'>daniel.ponturo99@gmail.com</a></span>
                    </p>
                    <div className='cv-download ' >
                        <a href='../assets/documents/cv-daniel-ponturo.pdf' download>
                            <FontAwesomeIcon icon={faDownload} size='3x' />
                            <p>Download my CV</p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;