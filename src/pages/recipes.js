import React from 'react';
import Layout from '../components/Layout';
import Allrecipes from '../components/Allrecipes';
import SEO from '../components/SEO';

const Recipes = () => {
    return (
        <Layout>
        <SEO title="recipes"/>
            <main className="page">
                <Allrecipes />
            </main>
        </Layout> 
    )
}

export default Recipes
