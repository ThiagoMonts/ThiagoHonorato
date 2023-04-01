import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['início', 'sobre', 'projetos', 'habilidades/experiência', 'contato'].map((item, index) => (
                <a 
                    href={`#${item}`} 
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? {backgroundColor: '#1727D8'} : {}}
                    >
                </a>
            ))}
        </div>
    )
}

export default NavigationDots