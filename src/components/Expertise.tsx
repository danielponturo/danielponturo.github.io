import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    'React',
    'TypeScript',
    'Vite',
    'HTML5',
    'CSS3',
    'TailwindCSS',
];

const labelsSecond = [
    'Node.js',
    'Hapi.js',
    'JavaScript',
    'RESTful APIs',
    'Postman',
    'Redis'
];

const labelsThird = [
    'GitHub Actions',
    'Azure DevOps',
    'Docker',
    'Kubernetes'
];

function Expertise() {
    return (
        <div className='container' id='expertise'>
            <div className='skills-container'>
                <h1>Expertise</h1>
                <div className='skills-grid'>
                    <div className='skill'>
                        <FontAwesomeIcon icon={faReact} size='3x' />
                        <h3>Front-End Web Development</h3>
                        <p>I have experience building front-end web applications using technologies such as React and TailwindCSS.</p>
                        <div className='flex-chips'>
                            <span className='chip-title'>Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className='skill'>
                        <FontAwesomeIcon icon={faNodeJs} size='3x' />
                        <h3>Back-End Web Development</h3>
                        <p>I can build back-end applications in Node.js, such as RESTful APIS, and seamlessly integrate them with front-end clients.</p>
                        <div className='flex-chips'>
                            <span className='chip-title'>Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className='skill'>
                        <FontAwesomeIcon icon={faDocker} size='3x' />
                        <h3>DevOps & Automation</h3>
                        <p>I have experience working with CI/CD pipelines and consolidating them with various tools to provide useful stats in a DevOps environment.</p>
                        <div className='flex-chips'>
                            <span className='chip-title'>Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Expertise;