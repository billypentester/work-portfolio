import React from 'react';

const ArticleStructuredData = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://billypentester.medium.com/ultimate-10-stages-to-master-frontend-development-9b075b904835"
    },
    "headline": "Ultimate 10 Stages to Master Frontend Development",
    "description": "A step-by-step guide to getting a job as a good frontend developer",
    "image": "https://miro.medium.com/v2/resize:fit:720/format:webp/0*G8F1DxHCLPe1KInb.png",  
    "author": {
      "@type": "Person",
      "name": "Bilal Ahmad",
      "url": "https://work.billypentester.vercel.app/"
    },  
    "publisher": {
      "@type": "Organization",
      "name": "Level Up Coding",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pbs.twimg.com/profile_images/890968592530915328/RlvONHUj_400x400.jpg"
      }
    },
    "datePublished": "2021-10-26",
    "dateModified": "2023-10-26"
  }

  return <script type="application/ld+json">{JSON.stringify(structuredData)}</script>;

};

export default ArticleStructuredData;