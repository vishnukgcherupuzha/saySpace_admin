import logo from './logo.png';
import homeHero from './home/hero.png'
import aboutHero from './about/hero.png'
import servicesHero from './services/hero.jpg'
import whyIndiaHero from './whyIndia/hero.jpeg'
import Era from './about/Era.jpeg'
import Pankaj from './about/pankaj.jpeg'
import arun from './about/arun.jpeg'
import CareerHero from './career/hero.png'
import ContactHero from './contact/hero.jpg'

export const imageConstants = {
    LOGO : logo,
    HOME : {
        HERO : homeHero
    },
    ABOUT : {
        HERO : aboutHero,
        ERA : Era,
        PANKAJ: Pankaj,
        ARUN: arun,
    },
    SERVICES : {
        HERO : servicesHero
    },
    WHY_INDIA : {
        HERO : whyIndiaHero
    },
    CAREER : {
        HERO : CareerHero
    },
    CONTACT : {
        HERO : ContactHero
    }
}