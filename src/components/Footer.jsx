import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='py-5 bg-neutral text-center shadow-inner'>
            <span className='text-lg text-primary font-medium'> 
              <a href="https://billypentester.github.io/" target='_blank' className='link-secondary'>billypentester </a>
              &copy;   
              {' ' + new Date().getFullYear()}
            </span>
        </div>
    </footer>
  )
}

export default Footer
