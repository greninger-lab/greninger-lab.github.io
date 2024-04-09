/* empty css                           */
import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_lVcXK-oS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"simple-rss-embed-plugin\">Simple RSS Embed Plugin</h1>\n<h2 id=\"about\">About</h2>\n<p>This plugin allows you to embed content from an RSS feed on to your website using only <code>data</code> attributes directly in the HTML.</p>\n<h2 id=\"usage\">Usage</h2>\n<p>Add the plugin to your page, just before the <code>&#x3C;/body></code> tag.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">script</span><span style=\"color:#B392F0\"> src</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"path/to/simple-rss.js\"</span><span style=\"color:#E1E4E8\">>&#x3C;/</span><span style=\"color:#85E89D\">script</span><span style=\"color:#E1E4E8\">></span></span></code></pre>\n<p>Create the container for the RSS feed to show in, and pass options in via <code>data</code> attributes.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">div</span><span style=\"color:#E1E4E8\"> </span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">    data-rss-feed</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"http://binonabin.tumblr.com/rss\"</span><span style=\"color:#E1E4E8\"> </span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">    data-rss-link-titles</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"false\"</span><span style=\"color:#E1E4E8\"> </span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">    data-rss-title-wrapper</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"h3\"</span><span style=\"color:#E1E4E8\"> </span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">    data-rss-max</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"5\"</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;/</span><span style=\"color:#85E89D\">div</span><span style=\"color:#E1E4E8\">></span></span></code></pre>\n<p><a href=\"http://codepen.io/nickmoreton/pen/pEZggP\">Example</a></p>\n<h3 id=\"options\">Options</h3>\n<h4 id=\"data-rss-feed-required\">data-rss-feed (required)</h4>\n<p>Specifies the RSS feed to pull content from</p>\n<h4 id=\"data-rss-link-titles-optional\">data-rss-link-titles (optional)</h4>\n<p>Specifies whether to link the titles to the original post.</p>\n<p><em>default: true</em></p>\n<h4 id=\"data-rss-title-wrapper-optional\">data-rss-title-wrapper (optional)</h4>\n<p>Specifies the HTML element to wrap the titles.</p>\n<p><em>default: h2</em></p>\n<h4 id=\"data-rss-max-optional\">data-rss-max (optional)</h4>\n<p>Specifies the number of entries to output</p>\n<p><em>default: 10</em></p>";

				const frontmatter = {};
				const file = "/Users/greningerlab-macbook-4/Desktop/Lab_Website/src/pages/simple-rss-master/readme.md";
				const url = "/simple-rss-master/readme";
				function rawContent() {
					return "# Simple RSS Embed Plugin\n\n## About\n\nThis plugin allows you to embed content from an RSS feed on to your website using only `data` attributes directly in the HTML.\n\n## Usage\n\nAdd the plugin to your page, just before the `</body>` tag.\n\n```html\n<script src=\"path/to/simple-rss.js\"></script>\n```\n\nCreate the container for the RSS feed to show in, and pass options in via `data` attributes.\n\n```html\n<div \n    data-rss-feed=\"http://binonabin.tumblr.com/rss\" \n    data-rss-link-titles=\"false\" \n    data-rss-title-wrapper=\"h3\" \n    data-rss-max=\"5\">\n</div>\n```\n\n[Example](http://codepen.io/nickmoreton/pen/pEZggP)\n\n### Options\n\n#### data-rss-feed (required)\n\nSpecifies the RSS feed to pull content from\n\n#### data-rss-link-titles (optional)\n\nSpecifies whether to link the titles to the original post.\n\n_default: true_\n\n#### data-rss-title-wrapper (optional)\n\nSpecifies the HTML element to wrap the titles.\n\n_default: h2_\n\n#### data-rss-max (optional)\n\nSpecifies the number of entries to output\n\n_default: 10_\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"simple-rss-embed-plugin","text":"Simple RSS Embed Plugin"},{"depth":2,"slug":"about","text":"About"},{"depth":2,"slug":"usage","text":"Usage"},{"depth":3,"slug":"options","text":"Options"},{"depth":4,"slug":"data-rss-feed-required","text":"data-rss-feed (required)"},{"depth":4,"slug":"data-rss-link-titles-optional","text":"data-rss-link-titles (optional)"},{"depth":4,"slug":"data-rss-title-wrapper-optional","text":"data-rss-title-wrapper (optional)"},{"depth":4,"slug":"data-rss-max-optional","text":"data-rss-max (optional)"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
