/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_lVcXK-oS.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404_QZvUI8RI.mjs';
import { $ as $$HorizontalCard } from './__1_ZImer5.mjs';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$Software = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Software;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Software", "sideBarActiveItemID": "software" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-6 pt-10 lg:max-w-[900px] max-w-[100vw]"> <div> <div class="text-3xl w-full font-bold mb-5" style="text-align: center; margin-top: 0px;" ">
Software Modules
</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "REVICA", "desc": "Revica is a reference-based viral consensus genome assembly pipeline for some of the most common respiratory viruses.", "url": "https://github.com/greninger-lab/revica" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "LAVA", "desc": "LAVA is a simple command-line tool that allows dynamic and interactive visualization of viral genome evolution from longitudinal or linked samples. LAVA addresses the specific challenges posed by longitudinal sampling for viral infections.", "url": "https://github.com/greninger-lab/lava" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "VAPID", "desc": "VAPiD is a portable and lightweight command-line tool that supports annotation and NCBI GenBank deposition of nearly all unsegmented viral genomes. Instructions for downloading and installing VAPiD can be found at Github.", "url": "https://github.com/greninger-lab/VAPiD" })} <div class="divider my-0 hover:shadow-xl"></div> <div class="card w-100 bg-base-100 transition ease-in-out hover:scale-[102%] md:flex md:justify-right" style="margin-top: 22px;"> <figure> <a target="_blank" href="https://github.com/greninger-lab"> <img src="/bxl-github.svg" alt="More programs hosted on our github." width="200" height="200"></a> </figure></div> <div class="card-body items-center text-center"> <h2 class="card-title">Github</h2> <p>More programs hosted on our github!</p> </div> </main> ` })}`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/pages/software.astro", void 0);

const $$file = "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/pages/software.astro";
const $$url = "/software";

export { $$Software as default, $$file as file, $$url as url };
