/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_lVcXK-oS.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404_QZvUI8RI.mjs';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$Publications = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Publications;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Publications", "sideBarActiveItemID": "publications" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<iframe src="https://scholar.google.com/citations?hl=en&user=6ndwvvsAAAAJ"></iframe>  <div data-rss-feed="https://pubmed.ncbi.nlm.nih.gov/rss/search/1XWEJfKtgOHcBJAs1UWiSsWBrvAG-4B2PwYAXqcIfFfkik6c3d/?limit=100&utm_campaign=pubmed-2&fc=20240222210745" data-rss-link-titles="false" data-rss-title-wrapper="h3" data-rss-max="5"></div> <div data-rss-feed="https://binonabin.tumblr.com/rss" data-rss-link-titles="false" data-rss-title-wrapper="h3" data-rss-max="5"></div> ` })}`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/pages/publications.astro", void 0);

const $$file = "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/pages/publications.astro";
const $$url = "/publications";

export { $$Publications as default, $$file as file, $$url as url };
