import React from 'react'
import PropTypes from 'prop-types'

const Page = (props) => (
    <section>
        <h1>{props.title}</h1>
        <div dangerouslySetInnerHTML={{
            __html: props.body
        }}/>
    </section >
)

export default Page