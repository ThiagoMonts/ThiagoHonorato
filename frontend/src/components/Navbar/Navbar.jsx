import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../../constants';

import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <p>Thiago<span>Monts</span></p>
      </div>
      <ul className="app__navbar-links">
        {['início', 'sobre', 'projetos', 'habilidades/experiência', 'contato'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['início', 'sobre', 'projetos', 'habilidades/experiência', 'contato'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar