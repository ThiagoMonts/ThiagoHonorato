import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="https://www.linkedin.com/in/honoratothiago/" target={'_blank'}>
        <div>
          <FaLinkedin />
        </div>
      </a>
      <a href="https://twitter.com/thiagomonts" target={'_blank'}>
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://www.instagram.com/thiagomonts/" target={'_blank'}>
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia