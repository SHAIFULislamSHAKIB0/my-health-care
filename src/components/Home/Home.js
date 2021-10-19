import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Events from '../Events/Events';
import NotFound from '../NotFound/NotFound';
import Services from '../Services/Services';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import MenuBar from '../Shared/MenuBar/MenuBar';
import WorkProcess from '../WorkProcess/WorkProcess';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Contact></Contact>
            {/* <WorkProcess></WorkProcess> */}
            {/* <Events></Events> */}


        </div>
    );
};

export default Home;