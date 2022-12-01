import React from "react"
import Layout from "../components/Layout";
import Allrecipes from "../components/Allrecipes";
import SEO from "../components/SEO";

import { StaticImage } from "gatsby-plugin-image";


const Home = () => {
    return(
      <Layout>
      <SEO title="Home" description="This is home page"/>
        <main className="page">
          <header className="hero">
            <StaticImage src="../assets/images/main.jpeg" alt="eggs"
              className="hero-img" layout="fullWidth" placeholder="tracedSVG"
            />
            <div className="hero-container">
              <div className="hero-text">
                <h1>Simply Recipes</h1>
                <h4>no fluff, just recipes</h4>
              </div>
            </div>
          </header>
          
          <Allrecipes />
        </main>
      </Layout>
    )
}

export default Home;