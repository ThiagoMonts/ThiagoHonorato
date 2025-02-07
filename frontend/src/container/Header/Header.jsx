import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaCloudDownloadAlt } from 'react-icons/fa'

import { AppWrap } from '../../wrapper'
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-info-content app__flex">
        <p className="p-text">Olá, Meu nome é </p>
        <h1 className='head-text'>Thiago
          <TypeAnimation
            sequence={[' Honorato', 1700, ' Monts', 2000]}
            style={{ fontSize: '1em' }}
            repeat={Infinity}
          /></h1>
        <p className='p-text'>Sou Desenvolvedor Front-End com experiência em React, JavaScript e Python. Meu objetivo é criar interfaces intuitivas, responsivas e escaláveis, sempre focando em performance e usabilidade. Com conhecimento em Node.js, APIs e metodologias ágeis, também trago uma visão estratégica para otimização de processos. Busco constantemente inovação e novos desafios.</p>

      </div>
      <div className='app__header-info-button app_flex'>
        <div className='app__header-info-button1'>
          <a href="https://github.com/ThiagoMonts" target='_blank'>
            <button type='button'>
              <FaGithub /> <p>Github</p>
            </button>
          </a>
        </div>
        <div className='app__header-info-button2'>
          <a href="https://github.com/ThiagoMonts/ThiagoHonorato/raw/main/frontend/.github/curriculo.pdf" target='_blank'>
            <button type='button'>
              <FaCloudDownloadAlt /> <p>Currículo</p>
            </button>
          </a>
        </div>

      </div>
    </motion.div>
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
  </div>
);

export default AppWrap(Header, 'início');