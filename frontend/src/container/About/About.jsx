import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './About.scss'
import { images } from '../../constants'

const abouts = [
  { title: 'Desenvolvimento Front-end', description: 'Criação de sites', imgUrl: images.about04},
  { title: 'Desenvolvimento Back-End', description: 'Integração de APIs', imgUrl: images.about03},
  { title: 'UI/UX', description: 'Criação de designs no Figma', imgUrl: images.about02},
  { title: 'Animações Web', description: 'Animações de interfaces', imgUrl: images.about01}
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>"Nunca desista dos seus <span>sonhos</span>"
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt='about.title' />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About