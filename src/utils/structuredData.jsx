import React from 'react';

const ArticleStructuredData = () => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Bilal Ahmad',
      url: 'https://work.billypentester.vercel.app/',
      image: 'https://work.billypentester.vercel.app/assets/lightPic-z2uj6qnq.webp',
      sameAs: [
        'https://work.billypentester.vercel.app',
        'https://github.com/billypentester',
        'https://www.linkedin.com/in/billypentester'
      ],
      jobTitle: 'Software Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Simplex Technology Solutions'
      },
      'address': {
        '@type': 'PostalAddress',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab'
      }
    };
      
    return <script type="application/ld+json">{JSON.stringify(structuredData)}</script>;
};

export default ArticleStructuredData;