import React from 'react';

const CaseStudieSection = (props) => {
  return (
      <section>
        <i className="icon fas fa-home"></i>
        <div className="details">
          <span className="title">{props.title.toUpperCase()}</span>
          <span>{props.period}</span>
        </div>
        <p>{props.text}</p>
        <div className="bottom">
          <a href={props.link}>Read more</a>
        </div>
      </section>
  )
}

export default CaseStudieSection