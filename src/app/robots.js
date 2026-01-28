const robots = () => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://www.globaltimepro.com/sitemap.xml',
  };
};

export default robots;
