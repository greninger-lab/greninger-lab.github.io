# Greninger Laboratory Website Github
This is a guide for anyone who works on and updates the website in the future.

This page was written with [Astro](https://astro.build/) and base on the template [Astrofy](https://github.com/manuelernestog/astrofy) by Manuel Ernesto Garcia.

For any part not covered in the guides please refer the guides for the plugins I used:
* [Astrofy](https://github.com/manuelernestog/astrofy): _Used as template base_
* [Astro](https://astro.build/): _Html/CSS website building tool_ 
* [Tailwind](https://tailwindui.com/): _Useful components used in the website_
* [Daisy UI](https://daisyui.com/): Widgets used in website

## Modifiying website
I recommend working on the website locally and pushing changes to github as it takes a while to compile and publish new changes online.

>Download the repo 

``` Bash
git clone https://github.com/greninger-lab/greninger-lab.github.io.git
```

>Inside your downloaded repo run

```bash
pnpm install
```

```bash
pnpm run dev
```
>This will host a local version of the website that can be viewed in your browser for instantaneous updates to edits you make to the code. Copy the link generated in your terminal and paste into your browser to see.

## Hosting the website
The lab website is hosted on [github pages](https://pages.github.com/) as a static site. 

This was chosen as it is 
* Free
* Fast
* Standard for most of lab websites
* Not dependent on another platform so updates and changes are easier to maintain

Astro has a [guide](https://docs.astro.build/en/guides/deploy/github/) with deploying the site to a github pages site. The hard work has already been done here.

This theme does not use Jekyll and instead a custom action with a deploy.yml file held in 

```
└─── .github
│   └───workflows
	|   deploy.yml
```

> [!Note]
> The deploy.yml file differs from the astro example to point pnpm to the latest version, where a section of the code is 

```
package-manager: pnpm@latest
```

Each time there are pushes to the github site, the site recompiles before it is published. This runs in a virtual environment of github and can be monitored to debug any issues.

> [!CAUTION]
> Be wary of any packages you install to the website, something that compiles locally may not run on github. Make sure to compile the website before pushing to github to update package management folders and push all files including hidden files to the github if you choose to incorporate new libraries.

The _astro.config.mjs_ links to the site and may need to be update with domain changes.

```css
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://greninger-lab.github.io/', #site link, if domain is different than github.io name base: will need to be added to link to file paths correctly
  integrations: [mdx(), sitemap(), tailwind()]
});
```

## Images

Images for the site are held in the **public** folder with additional sub-directories to help organize the the images are held.
```
public
└── Pub_Images
    ├── BACTERIAL_GENOMICS
    ├── CLINICAL_VIROLOGY_AND_MICROBIOLOGY
    ├── People
    ├── REVIEWS_AND_COMMENTARY
    ├── VIRAL_GENOMICS_TRANSMISSION_AND_DISCOVERY
    └── VIRUS-HOST_INTERACTIONS
```
Images were converted to .webp as this is a compression format optimized for web.

## Updating Site

The pages for the website are held in **src/pages** folder.

src/pages
├── 404.astro
├── blog
│   ├── [...page].astro
│   └── [slug].astro
├── ==_contact.astro_== 
├── ==_index.astro_==
├── ==_people.astro_==
├── ==_publications.astro_==
├── ==_research.astro_==
│   ├── license.md
│   └── readme.md
├── software.astro
└── store
    ├── [...page].astro
    └── [slug].astro


Adding or modifying pages should be done by editing the _SideBarMenu.astro_ file held in **src/components/SideBarMenu.astro**

src/components
├── BaseHead.astro
├── Card.astro
├── Footer.astro
├── Header.astro
├── HorizontalCard.astro
├── HorizontalShopItem.astro
├── NavBar.astro
├── SideBar.astro
├── SideBarFooter.astro
├── ==_SideBarMenu.astro_==
└── cv
    └── TimeLine.astro

The pages of the website are:
* contact.astro
* index.astro
* people.astro
* publications.astro
* research.astro

### Home

The homepage is rendered from the _index.astro_ file.

>Contact button links to contact page and is held in a daisy UI [card](https://daisyui.com/components/card/) component:
```html
<div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
``` 

### Research

The research page is rendered from the _research.astro_ file.

 >Each group of articles is held in an [accordion](https://daisyui.com/components/accordion/) daisy UI widget:
```html
<div class="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
```

 > Each article is held in a daisy UI [horizontal card](https://daisyui.com/components/card/) widget:
``` html
<div class="divider my-0"></div>
<HorizontalCard
  title="Performance Characteristics of the Abbott Architect SARS-CoV-2" #title of card
  img="/Pub_Images/CLINICAL_VIROLOGY_AND_MICROBIOLOGY/Performance_Characteristics.webp" #image for card
  desc="Coronavirus disease 2019 (COVID-19), the novel..." #summary
  url="https://pubmed.ncbi.nlm.nih.gov/32381641/" #link to article
/>
```

### Publications

I experimented with importing  an RSS feed or having a website wrapper for the page to show publications for the lab, but didn't get results that looked maintainable.   

What other computational labs usually do is manually add their publications which also is a lot of work to maintain.

It is the least amount of effort to maintain to link directly to [Alex's google scholar site](https://scholar.google.com/citations?hl=en&user=6ndwvvsAAAAJ).

> [!NOTE]
> I left the _publications.astro_ file up, but it is not used for linking to the google scholar site. 

> The _SideBarMenu.astro_ file is where the page links the the google scholar site.

``` html
<li>
  <a class="py-3 text-base" id="publications" href="https://scholar.google.com/citations?hl=en&user=6ndwvvsAAAAJ"
    >Publications</a>
</li>
```

### People

This is the page that will likely use the most updates held in the _ people.astro_ file. Most images were taken by  [@cave42](https://github.com/Cave42)  its recommended to use high resolution images. Crop images to square to ease with reformatting. 

>Example lab member portrait with title:
```html
<div
  class="w-full rounded-lg p-12 flex flex-col justify-center items-center"
>
  <div class="mb-8">
    <img
      class="object-center object-cover rounded-md"
      width="300" #size of image
      src="/Pub_Images/People/Carlos.webp" #location of image
      alt="photo"
    />
  </div>
  <div class="text-center">
    <p class="text-xl font-bold mb-2">Carlos Avendaño, BS</p> #name
    <p class="text-base font-normal">Chef</p> #title
  </div>
</div>
</div> #seperators between lab members 
```
> [!HINT]
> Change rounded-md to rounded-full for circular images.

> To put more than on member on the same row change lg:grid-cols-[number] to the number of members you want on the same row. 

```html
<div
  class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6"
> # put in front of member group
</div> #put at end of last member you want on column
```

> Lab alumni are held in a daisy UI [table](https://daisyui.com/components/table/) widget:

```html
<tr>
  <td>Carlos Avendaño</td> #name
  <td>PhD at Juilliard School</td> #what they are up too
</tr>
```

### Contact

The contact information is held in _contact.astro_. 

>The google map is an embedded web link:
```html
<iframe
  width="100%"
  height="100%"
  frameborder="0"
  title="map"
  marginheight="0"
  marginwidth="0"
  scrolling="no"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.143529289069!2d-122.34501546819001!3d47.62334119668361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015d218d62f8d%3A0xca9d84637b97ffb6!2s850%20Republican%20St%2C%20Seattle%2C%20WA%2098109!5e0!3m2!1sen!2sus!4v1708568833242!5m2!1sen!2sus" #html link you can get from google maps
></iframe>
```  

> Contact information should be easy to update, cntrl+f to find the text you want to change in the file.

>Icons are held as svg images:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-5 h-5"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
  ></path>
</svg>
```
