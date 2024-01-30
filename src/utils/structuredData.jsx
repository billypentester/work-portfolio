import React from 'react';

const ArticleStructuredData = () => {

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bilal Ahmad',
    jobTitle: 'Software Engineer',
    url: 'https://work.billypentester.vercel.app/',
    image: 'https://work.billypentester.vercel.app/assets/lightPic-z2uj6qnq.webp',
    sameAs: [
      'https://www.linkedin.com/in/billypentester',
      'https://github.com/billypentester'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'COMSATS University Islamabad',
      sameAs: 'https://lahore.comsats.edu.pk',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Simplex Technology Solutions',
      url: 'https://simplexts.net/',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'Pakistan',
    },
  };
      
  return <script type="application/ld+json">{JSON.stringify(structuredData)}</script>;

};

export default ArticleStructuredData;