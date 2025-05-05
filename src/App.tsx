import { useState } from 'react';
import {
    Main,
    Timeline,
    Expertise,
    Contact,
    Navigation,
    Footer,
} from './components';
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
                <Main />
                <Expertise />
                <Timeline />
                <Contact />
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;