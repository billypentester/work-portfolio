import React from 'react';

const ArticleStructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bilal Ahmad',
    jobTitle: 'Software Engineer',
    url: 'https://work.billypentester.vercel.app/',
    sameAs: [
      'https://www.linkedin.com/in/billypentester',
      'https://github.com/billypentester'
    ],
    knowsAbout: [
        'React js',
        'Next js',
        'Vue js',
        'Node js',
        'Nest js',
        'Express js',
        'MongoDB',
        'MySQL',
        'Postgresql',
        'Redis'
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
    hasOccupation: 'Full Stack Developer',
    offers: {
      '@type': 'OfferCatalog',
      name: 'Services Offered',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: 'Web App Development',
          description: 'I will be creating beautiful, responsive and fast web apps for you.',
          price: '1000',
          availability: 'https://schema.org/InStock',
        }
      ],
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