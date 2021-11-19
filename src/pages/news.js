// pages/news.js
import React from "react"
import { graphql　} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage = ({ data }) => (
 <Layout>
   <SEO title="ニュース" />
   <h1>Hi from the news page 高畑です</h1>

   {data.allMicrocmsNews1.edges.map(edge => {
     const news1 = edge.node

       return (
        <React.Fragment key={news1.id}>
         <div>
             <h2>{news1.title}</h2>
         </div>
         <div>
            {news1.body}
         </div>
        <hr />
       </React.Fragment>
       )
   })}
 </Layout>
)

export const query = graphql`
 {
    allMicrocmsNews1(
     sort: { fields: [id], order: DESC }
   ) {
     edges {
       node {
         id
         title
         body
       }
     }
   }
 }
`

export default NewsPage
