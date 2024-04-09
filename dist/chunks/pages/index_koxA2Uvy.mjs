/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_lVcXK-oS.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404_QZvUI8RI.mjs';
import { g as getCollection } from './__1_ZImer5.mjs';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  posts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-6 pt-10 lg:max-w-[900px] max-w-[100vw]"> <div class="pb-12 mt-5"> <div class="text-5xl font-bold" style="text-align: center; margin-top: 0px;">
Welcome to the Greninger Lab
</div> </div> <div class="py-2" style="text-align: center;"> <text class="text-lg"> <div class="prose lg:prose-xl" style="text-align: center; margin-top: 0px;">
We strive to understand viruses – how they are transmitted, how they
          evolve, and how they affect their hosts. We use a wide range of
          techniques including next-generation sequencing, culture models and
          screens, and biochemical/biophysical characterization of viral gene
          products. Our research is tightly integrated with the clinical
          laboratories of the University of Washington Medical Center.
</div> <div class="hero-content flex-col md:flex-row"> <div class="card w-96 bg-base-100 shadow-xl"> <figure class="px-15 pt-15"> <img src="/Pub_Images/Lab_Photo.webp" alt="Shoes" class="rounded-xl"> </figure> <div class="card-body items-center text-center"> <h2 class="card-title">
We are always looking for talented and motivated people to join
                the lab!
</h2> <p>Please reach out to Alex directly:</p> <div class="card-actions"> <button class="btn btn-primary"> <a href="/contact/"> Contact</a> </button> </div> </div> </div> </div></text> </div> </main> ` })}`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/pages/index.astro", void 0);

const $$file = "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };