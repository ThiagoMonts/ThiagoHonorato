import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://www.linkedin.com/in/honoratothiago/" target={'_blank'}><FaLinkedin/></a>
        </div>
        <div>
            <a href="https://twitter.com/thiagomonts" target={'_blank'}><BsTwitter /></a>
        </div>
        <div>
            <a href="https://www.instagram.com/thiagomonts/" target={'_blank'}><BsInstagram />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia