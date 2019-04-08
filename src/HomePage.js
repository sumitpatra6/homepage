import React from 'react'
import Services from './components/Services';
import Contact from './components/Contact';
import Vision from './components/Vision';
import Copyright from './components/copyright'
import About from './components/About'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div >
                <Vision />
                <Services />
                <About />
                <Contact />
                <Copyright />
            </div>

        );
    }
}

export default HomePage;