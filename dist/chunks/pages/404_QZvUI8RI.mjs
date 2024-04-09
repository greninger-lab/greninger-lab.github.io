/* empty css                           */
import '@astrojs/internal-helpers/path';
import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, m as maybeRenderHead, A as AstroError, h as ImageMissingAlt, s as spreadAttributes, i as defineScriptVars, j as renderComponent, k as renderHead, l as renderSlot } from '../astro_lVcXK-oS.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_TM0zkWQY.mjs';

const $$Astro$9 = createAstro("https://astrofy-template.netlify.app");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const {
    title,
    description,
    image = "/social_img.webp",
    ogType = "website"
  } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg" href="/bxs-virus.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/components/BaseHead.astro", void 0);

const $$Astro$8 = createAstro("https://astrofy-template.netlify.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div class="sticky lg:hidden top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm"> <div class="navbar"> <div class="navbar-start"> <label for="my-drawer" class="btn btn-square btn-ghost"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </label> </div> <div class="navbar-center"> <a class="btn btn-ghost normal-case text-xl" href="/">Greninger Lab</a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path d="M21 11h-.17c-1.053 0-1.958-.669-2.357-1.644l-.021-.049c-.408-.977-.249-2.097.5-2.846l.119-.119a.999.999 0 1 0-1.414-1.414l-.119.119c-.749.749-1.869.908-2.846.5l-.049-.021C13.669 5.128 13 4.218 13 3.165v-.081C13 2.447 12.553 2 12 2s-1 .447-1 1v.036c0 1.096-.66 2.084-1.673 2.503l-.006.003a2.71 2.71 0 0 1-2.953-.588l-.025-.025a.999.999 0 1 0-1.414 1.414l.036.036a2.69 2.69 0 0 1 .583 2.929l-.027.064A2.638 2.638 0 0 1 3.085 11h-.001C2.447 11 2 11.447 2 12s.447 1 1 1h.068a2.66 2.66 0 0 1 2.459 1.644l.021.049a2.69 2.69 0 0 1-.583 2.929l-.036.036a.999.999 0 1 0 1.414 1.414l.036-.036a2.689 2.689 0 0 1 2.929-.583l.143.06A2.505 2.505 0 0 1 11 20.83v.085c0 .638.447 1.085 1 1.085s1-.448 1-1v-.17c0-1.015.611-1.93 1.55-2.318l.252-.104a2.508 2.508 0 0 1 2.736.545l.119.119a.999.999 0 1 0 1.414-1.414l-.119-.119c-.749-.749-.908-1.869-.5-2.846l.021-.049c.399-.975 1.309-1.644 2.362-1.644h.08c.638 0 1.085-.447 1.085-1s-.447-1-1-1zM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-4.5a2 2 0 1 1 .001-4.001A2 2 0 0 1 14 12z"></path></svg> </div> <div class="navbar-end"></div> </div> </div>`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/components/Header.astro", void 0);

const $$Astro$7 = createAstro("https://astrofy-template.netlify.app");
const $$SideBarFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SideBarFooter;
  return renderTemplate`${maybeRenderHead()}<div class="block sticky pointer-events-none bottom-10 bg-base-200 justify-center h-12 [mask-image:linear-gradient(transparent,#000000)]"></div> <div class="social-icons px-4 pb-5 pt-1 flex self-center justify-center sticky bottom-0 bg-base-200" "> <a href="https://github.com/greninger-lab" target="_blank" class="mx-1" aria-label="Github" title="Github"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path> </svg> </a> <a href="https://twitter.com/greningerlab?lang=en" target="_blank" class="mx-7" aria-label="Twitter" title="Twitter"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path> </svg> </a> <label class="swap swap-rotatex"> <!-- this hidden checkbox controls the state --> <input type="checkbox" class="theme-controller" value="dracula"> <!-- sun icon --> <svg class="swap-on fill-current w-6 h-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 600" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <g> <path d="M320.107,196.181c-9.173-12.224-11.136-27.947-10.773-36.181c0-16.043-17.728-28.587-42.667-31.403V10.667
                C266.667,4.779,261.888,0,256,0c-5.888,0-10.667,4.779-10.667,10.667v117.931c-24.939,2.816-42.667,15.403-42.667,31.893
                c0.363,7.787-1.6,23.467-10.773,35.691c-47.061,6.784-53.227,18.389-53.227,27.819c0,29.696,89.813,32,117.333,32
                s117.333-2.304,117.333-32C373.333,214.592,367.168,202.987,320.107,196.181z M245.333,202.667
                c0,5.888-4.779,10.667-10.667,10.667S224,208.555,224,202.667v-21.333c0-5.888,4.779-10.667,10.667-10.667
                s10.667,4.779,10.667,10.667V202.667z M288,202.667c0,5.888-4.779,10.667-10.667,10.667s-10.667-4.779-10.667-10.667v-21.333
                c0-5.888,4.779-10.667,10.667-10.667S288,175.445,288,181.333V202.667z"></path> <path d="M325.653,268.288c-4.992-3.115-11.584-1.621-14.699,3.392l-41.941,67.093l-13.397-53.547
                c-1.173-4.693-5.333-8-10.176-8.085c-15.552-0.235-29.781-1.024-42.347-2.304c-3.413-0.405-6.869,1.003-9.152,3.627
                c-2.261,2.624-3.115,6.187-2.283,9.557l32,127.979l-20.672,82.752c-0.811,3.179-0.085,6.571,1.941,9.152
                c2.027,2.581,5.12,4.096,8.405,4.096h85.333c3.285,0,6.379-1.515,8.405-4.096c2.027-2.581,2.731-5.952,1.941-9.152
                l-32.811-131.243l52.843-84.544C332.16,277.995,330.645,271.424,325.653,268.288z"></path> </g> </g> </g> </svg> <!-- moon icon --> <svg class="swap-off fill-current w-6 h-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 600" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M320.107,196.181c-9.173-12.224-11.157-27.925-10.773-36.181c0-16.043-17.728-28.587-42.667-31.403V10.667
			C266.667,4.779,261.888,0,256,0c-5.888,0-10.667,4.779-10.667,10.667v117.931c-24.939,2.816-42.667,15.403-42.667,31.893
			c0.363,7.787-1.6,23.467-10.773,35.691c-47.061,6.805-53.227,18.411-53.227,27.819c0,13.909,19.755,21.76,43.541,26.24
			L223.637,416l-20.672,82.752c-1.429,5.696,2.048,11.499,7.765,12.928c0.875,0.213,1.749,0.32,2.603,0.32
			c4.8,0,9.131-3.221,10.325-8.085l21.333-85.333c0.427-1.685,0.427-3.477,0-5.163l-39.979-159.915
			c7.253,0.747,14.421,1.301,21.141,1.685l62.187,248.725c1.195,4.864,5.547,8.085,10.325,8.085c0.853,0,1.728-0.107,2.603-0.32
			c5.717-1.429,9.195-7.211,7.765-12.928l-32.853-131.435c0.043-0.107,0.149-0.128,0.192-0.235l53.077-116.779
			c23.936-4.459,43.883-12.331,43.883-26.304C373.333,214.571,367.168,202.965,320.107,196.181z M267.904,334.187l-19.563-78.251
			c2.837,0.043,5.504,0.064,7.659,0.064c10.176,0,28.907-0.32,48.448-2.219L267.904,334.187z M280.341,234.048
			C284.736,232.725,288,228.8,288,224v-21.333c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667V224
			c0,5.227,3.84,9.365,8.789,10.283c-6.165,0.235-12.587,0.384-19.456,0.384c-6.869,0-13.291-0.149-19.456-0.384
			c4.949-0.917,8.789-5.056,8.789-10.283v-21.333c0-5.888-4.779-10.667-10.667-10.667S224,196.779,224,202.667V224
			c0,4.821,3.264,8.747,7.659,10.069c-33.344-1.557-55.829-6.059-66.325-10.005c5.973-2.24,16.491-5.056,33.557-7.296
			c2.539-0.341,4.864-1.557,6.571-3.477c14.741-16.491,19.243-38.613,18.56-53.291c0-2.645,11.371-10.667,32-10.667
			s32,8.021,32,10.176c-0.704,15.168,3.797,37.291,18.539,53.781c1.707,1.92,4.032,3.136,6.571,3.477
			c17.067,2.24,27.563,5.077,33.536,7.296C336.149,227.989,313.664,232.491,280.341,234.048z"></path> </g> </g> </svg> </label> </div>`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/components/SideBarFooter.astro", void 0);

const $$Astro$6 = createAstro("https://astrofy-template.netlify.app");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/node_modules/.pnpm/astro@4.0.2/node_modules/astro/components/Image.astro", void 0);

const $$Astro$5 = createAstro("https://astrofy-template.netlify.app");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/node_modules/.pnpm/astro@4.0.2/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/greningerlab-macbook-4/Desktop/Lab_Website/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://astrofy-template.netlify.app");
const $$SideBarMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SideBarMenu;
  const { sideBarActiveItemID } = Astro2.props;
  const activeClass = "bg-base-300";
  return renderTemplate(_a || (_a = __template(["", '<ul class="menu grow shrink menu-md overflow-y-auto"> <li><a class="py-3 text-base" id="home" href="/">Home</a></li> <li><a class="py-3 text-base" id="research" href="/research">Research</a></li> <li> <a class="py-3 text-base" id="publications" href="https://scholar.google.com/citations?hl=en&user=6ndwvvsAAAAJ">Publications</a> </li> <li><a class="py-3 text-base" id="software" href="/software">Software</a></li> <li><a class="py-3 text-base" id="people" href="/people/">People</a></li> <li><a class="py-3 text-base" id="contact" href="/contact">Contact</a></li> </ul> <script>(function(){', "\n  const activeItemElem = document.getElementById(sideBarActiveItemID);\n  activeItemElem && activeItemElem.classList.add(activeClass);\n})();<\/script>"])), maybeRenderHead(), defineScriptVars({
    sideBarActiveItemID,
    activeClass
  }));
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/components/SideBarMenu.astro", void 0);

const $$Astro$3 = createAstro("https://astrofy-template.netlify.app");
const $$SideBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideBar;
  const { sideBarActiveItemID } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="drawer-side z-40"> <label for="my-drawer" class="drawer-overlay"></label> <aside class="px-2 pt-2 h-auto min-h-full w-[19rem] bg-base-200 text-base-content flex flex-col"> <div class="w-fit mx-auto mt-5 mb-6"> <a href="/"> <div class="avatar transition ease-in-out hover:scale-[102%] block m-auto"> <div class="w-[8.5rem]"> ${renderComponent($$result, "Image", $$Image, { "class": "mask mask-circle", "format": "webp", "width": 300, "height": 300, "src": "/Virus_No_Backround.png", "alt": "Profile image" })} </div> </div> </a> </div> ${renderComponent($$result, "SideBarMenu", $$SideBarMenu, { "sideBarActiveItemID": sideBarActiveItemID })} ${renderComponent($$result, "SideBarFooter", $$SideBarFooter, {})} </aside> </div>`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/components/SideBar.astro", void 0);

const $$Astro$2 = createAstro("https://astrofy-template.netlify.app");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/node_modules/.pnpm/astro@4.0.2/node_modules/astro/components/ViewTransitions.astro", void 0);

const SITE_TITLE = "Greninger Lab";
const SITE_DESCRIPTION = "Greninger Lab Website";

const $$Astro$1 = createAstro("https://astrofy-template.netlify.app");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    image,
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    includeSidebar = true,
    //includeNavBar = true,
    sideBarActiveItemID,
    //NavBarActiveItemID,
    ogType
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-theme="emerald"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image, ",": true, "ogType": ogType })}${renderTemplate`${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}`}${renderHead()}</head> <body> <div class="bg-base-100 drawer lg:drawer-open"> <input id="my-drawer" type="checkbox" class="drawer-toggle"> <div class="drawer-content bg-base-100"> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })} <div class="md:flex md:justify-center"> <main class="p-6 pt-10 lg:max-w-[2000px] max-w-[100vw]"> ${renderSlot($$result, $$slots["default"])} </main> </div> </div> ${includeSidebar && renderTemplate`${renderComponent($$result, "SideBar", $$SideBar, { "sideBarActiveItemID": sideBarActiveItemID })}`} </div> </body> </html>`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404: Not Found", "includeSidebar": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center"> <h1 class="text-9xl font-bold mb-4">🏝</h1> <h1 class="text-9xl font-bold mb-2">404</h1> <h3 class="text-2xl">The page you're looking for couldn't be found.</h3> <a class="btn btn-accent mt-9" href="/">Home</a> </div> ` })}`;
}, "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/pages/404.astro", void 0);

const $$file = "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, _404 as _, $$BaseLayout as a };
