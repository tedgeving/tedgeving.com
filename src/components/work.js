import React from 'react'
import PropTypes from 'prop-types'

const Work = (props) => (
    <>
        <h1>Recent Work</h1>
        <ul className="recent-projects">
            {props.work.map(p => <li key={p.node.id}>
                <a href={p.node.acf.url}>{p.node.title}</a>
                
                <div  className="inline" dangerouslySetInnerHTML={{ __html: p.node.content}} />
            </li>)}
        </ul>
    </>	
    
)

export default Work