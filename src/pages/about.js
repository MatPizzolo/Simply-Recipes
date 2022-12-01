import React from 'react';
import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';
import SEO from '../components/SEO';

import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';

const About = ({ data:{allContentfulRecipe:{nodes:recipes}} }) => {
    return (
        <Layout>
        <SEO title="About" description="This is about page"/>
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2> Lorem ipsum dolor sit amet. </h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices id nunc ac pretium. Donec sollicitudin purus non lorem maximus lacinia. Mauris ornare, augue e </p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices id nunc ac pretium.  </p>
                        <Link to="/contact" className="btn">
                            contact
                        </Link>
                    </article>
                    <StaticImage src="../assets/images/about.jpeg" alt="Person pouring salt in bowl" className="about-img" placeholder="blurred"/>
                </section>
                <section className="featured-recipes">
                    <h5>Look at this!</h5>
                    <RecipesList recipes={recipes}/>
                </section>
            </main>
        </Layout> 
    )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

export default About
