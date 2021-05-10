import CPX from '../assets/CircuitPlayground.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Sass/landingPage.scss';

const LandingPage = () => {
  return (
    <div className='container'>
      <motion.div
        className='cpx-container'
        initial={{ x: '-100%', opacity: '0%', rotate: '-180deg' }}
        animate={{ x: '0%', opacity: '100%', rotate: '0deg' }}
        transition={{ duration: 1.9 }}
        exit={{ x: '100%' }}
      >
        <img src={CPX} alt='CPX MPOD' />
      </motion.div>

      <motion.div
        className='headline-container'
        initial={{ opacity: '0%' }}
        animate={{ opacity: '100%' }}
        transition={{ duration: 2.4 }}
      >
        <h1>MPod Luminous</h1>
        <h3>Take your music experience to a whole new level</h3>
        <Link className='link' to='/home'>
          Learn More
        </Link>
      </motion.div>
    </div>
  );
};

export default LandingPage;
