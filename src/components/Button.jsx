import React from 'react'

const Button = ({ text, className, id, href = "#" }) => {
  return (
    <a
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