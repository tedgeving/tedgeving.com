import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Page from '../components/page'
import Work from '../components/work'


const IndexPage = ({data}) => (
  <Layout>
    <Page title={data.informationPage.title}  body={data.informationPage.content}/>
    <Work work={data.allWordpressPost.edges} />
    <Page title={data.previousPage.title}  body={data.previousPage.content}/>
  </Layout>
)

export default IndexPage


export const query = graphql`
query allPages {

  informationPage: wordpressPage(wordpress_id: {eq: 2}) {
    title
    content
  }
  previousPage: wordpressPage(wordpress_id: {eq: 12}) {
    title
    content
  }
  allWordpressPost {
    edges {
      node {
        id
        slug
        title
        content
        acf{
          url
        }
        
      }
    
    }
  }

}
`