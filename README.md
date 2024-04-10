# Greninger Laboratory Website Github
This is a guide for anyone who works on and updates the website in the future.

This page was written with [Astro](https://astro.build/) and base on the template [Astrofy](https://github.com/manuelernestog/astrofy) by Manuel Ernesto Garcia.

For any part not covered in the guides please refer the guides for the plugins I used:
* [Astrofy](https://github.com/manuelernestog/astrofy): _Used as template base_
* [Astro](https://astro.build/): _Html/CSS website building tool_ 
* [Tailwind](https://tailwindui.com/): _Useful components used in the website_

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
```
src/pages
├── 404.astro
├── blog
│   ├── [...page].astro
│   └── [slug].astro
├── contact.astro 
├── index.astro
├── people.astro
├── publications.astro
├── research.astro
│   ├── license.md
│   └── readme.md
├── software.astro
└── store
    ├── [...page].astro
    └── [slug].astro
```

Adding or modifying pages should be done by editing the _SideBarMenu.astro_ file held in **src/components/SideBarMenu.astro**
```
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
├── SideBarMenu.astro
└── cv
    └── TimeLine.astro
```
The five main pages you may want to update are:
* contact.astro
* index.astro
* people.astro
* publications.astro
* research.astro
