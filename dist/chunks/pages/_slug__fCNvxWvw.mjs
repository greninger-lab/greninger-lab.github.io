/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, g as addAttribute, l as renderSlot } from '../astro_lVcXK-oS.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection, c as createSlug } from './__1_ZImer5.mjs';
import { $ as $$Image, a as $$BaseLayout } from './404_QZvUI8RI.mjs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat.js';

const $$Astro$1 = createAstro("https://astrofy-template.netlify.app");
const $$PostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { title, description, pubDate, updatedDate, heroImage, badge, tags = [] } = Astro2.props;
  dayjs.extend(localizedFormat);
  const displayDate = dayjs(pubDate).format("ll");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "image": heroImage, ",": true, "ogType": "article" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="md:flex md:justify-center"> <article class="prose prose-lg max-w-[750px] prose-img:mx-auto"> ${heroImage && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "width": 750, "height": 422, "format": "webp", "src": heroImage, "alt": title, "class": "w-full mb-6" })}`} <h1 class="title my-2 text-4xl font-bold">${title}</h1> ${pubDate && renderTemplate`<time>${displayDate}</time>`} <br> ${badge && renderTemplate`<div class="badge badge-secondary my-1">${badge}</div>`} ${tags && tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag}`, "href")} class="badge badge-outline ml-2 no-underline"> ${tag} </a>`)} ${updatedDate && renderTemplate`<div> ${" "}
Last updated on <time>${updatedDate}</time>${" "} </div>`} <div class="divider my-2"></div> ${renderSlot($$result2, $$slots["default"])} </article> </main> ` })}`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/layouts/PostLayout.astro", void 0);

const $$Astro = createAstro("https://astrofy-template.netlify.app");
async function getStaticPaths() {
  const postEntries = await getCollection("blog");
  return postEntries.map((entry) => ({
    params: { slug: createSlug(entry.data.title, entry.slug) },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const post = entry.data;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { "title": post.title, "description": post.description, "pubDate": post.pubDate, "heroImage": post.heroImage, "updatedDate": post.updatedDate, "badge": post.badge, "tags": post.tags }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };
