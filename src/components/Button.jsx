import React from 'react'

const Button = ({ text, className, id, href }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById('counter');
        target.scrollIntoView({ behavior: 'smooth' });

        if(target && id){
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: 'smooth'})
        }
      }}
      id={id}
      href={href}
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className="cta-button group">
        <span className="bg-circle"></span>
        <span className="text">{text}</span>
        <span className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </span>
      </div>
    </a>
  )
}

export default Button