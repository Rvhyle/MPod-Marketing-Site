import CPX from '../assets/CircuitPlayground.png';
import '../Sass/landingPage.scss';
import '../Sass/productPage.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { motion } from 'framer-motion';
import FeatureCards from '../Components/featCards';

const features = {
  lights: {
    img: 'img', //img goes here
    title: 'Bright Lights',
    desc:
      'With state of ther art Neo Pixels you can experience a beautiful lightshow as you listen to your music',
  },
  func: {
    img: 'img', //img goes here
    title: 'Functionality',
    desc:
      "Tired of the song you're listening to? CPX MPod next and previous functionality will allow you to skip songs or go back to the previous one",
  },
  sounds: {
    img: 'img', //img goes here
    title: 'Quality Sounds',
    desc:
      'Listening to music just got better with the MPod Luminous speakers. Crafted perfectly to give you quality sound ',
  },
};

const ProductPage = () => {
  return (
    <div className='main-container'>
      <div className='container product-container'>
        <motion.div
          className='cpx-container'
          initial={{ opacity: '0%' }}
          animate={{ opacity: '100%' }}
          transition={{ duration: 2 }}
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
          <h3>Illuminating Your Music</h3>
          <a className='link' href='#feat-heading'>
            <KeyboardArrowDownIcon fontSize='large' />
          </a>
        </motion.div>
      </div>

      {/* Features */}
      <h2 id='feat-heading'>Built To Perfection</h2>
      <div className='features-container'>
        <FeatureCards
          img={CPX}
          title={features.lights.title}
          desc={features.lights.desc}
        />
        <FeatureCards
          img={CPX}
          title={features.func.title}
          desc={features.func.desc}
        />
        <FeatureCards
          img={CPX}
          title={features.sounds.title}
          desc={features.sounds.desc}
        />
      </div>

      <div className='form-container'>
        <h1 id='contact-heading'>Be The First To Know</h1>
        <div className='input-container'>
          <label>Name</label>
          <input type='text' placeholder='John Doe' />
        </div>
        <div className='input-container'>
          <label>Email</label>
          <input type='email' placeholder='John.Doe@email.com' />
        </div>
        <button>Notify Me</button>
        <span>*Button is not functional*</span>
      </div>

      <footer>
        <span>Site Created By Ryle Urcia</span>
      </footer>
    </div>
  );
};

export default ProductPage;
