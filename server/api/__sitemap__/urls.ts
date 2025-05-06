export default defineSitemapEventHandler(async () => {
  try {
    const allProducts = await $fetch<
      { id: string; img: string; name: string }[]
    >('/api/getSitemapProducts', {
      method: 'POST',
    });

    return [
      {
        loc: '/',
        changefreq: 'monthly',
        priority: 1,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/onas',
        changefreq: 'yearly',
        priority: 0.7,
        lastmod: '2025-04-15',
      },
      {
        loc: '/badania',
        changefreq: 'yearly',
        priority: 0.6,
        lastmod: '2025-03-21',
      },
      {
        loc: '/produkty',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      ...allProducts.map((product) => ({
        loc: `/produkt?id=${product.id}`,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
        images: [
          {
            loc: `/images/products/${product.img}`,
            caption: `Zdjęcie produktu ${product.name}`,
            title: `Produkt: ${product.name}`,
          },
        ],
      })),
    ];
  } catch (error) {
    console.log('Sitemap error: ', error);
  }
});
