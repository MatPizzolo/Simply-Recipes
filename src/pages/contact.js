import React from 'react';
import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';
import SEO from '../components/SEO';

import { graphql } from 'gatsby';

const Contact = ({ data:{allContentfulRecipe:{nodes:recipes}} }) => {
    return (
        <Layout>
        <SEO title="contact"/>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                    <h3>Want to Get In Touch</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nunc sit amet ante ultrices ultricies non eu lacus. Praesent at mollis urna. Nunc eget rutrum augue. Ut faucibus sapien diam, id tempor dui consequat vel. </p>
                    <p> Aliquam ut ex nunc. Aliquam quis velit eget risus sagittis iaculis nec eget ligula. Integer suscipit elit id ligula interdum, sed posuere justo blandit. Integer iaculis placerat est vel tempor.</p>
                    <p> Maecenas facilisis lectus sem, in malesuada turpis fringilla sit amet.</p>
                </article>
                <article>
                    <form className="form contact-form" action="https://formspree.io/f/mknkdzyp" method="POST">
                        <div className="form-row">
                            <label htmlFor="name">your name</label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">your email</label>
                            <input type="text" name="email" id="email"/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="message">message</label>
                            <textarea name="message" id="message"></textarea>
                        </div>
                        <button type="submit" className="btn block">Submit</button>
                    </form>
                </article>
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

export default Contact
