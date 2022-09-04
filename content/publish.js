var plausibleSnippet = document.createElement('script');
plausibleSnippet.defer = true;
plausibleSnippet.setAttribute('data-domain', 'unchainedsays.com');
plausibleSnippet.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(plausibleSnippet);

var footer = document.getElementsByClassName("site-footer");
footer[0].hidden = 'true';
console.log(footer[0]);

var meta = document.createElement('meta');
meta.name = "keywords";
meta.content = "geopolitics";
console.log(meta)
document.head.appendChild(meta);

var tags1 = document.getElementsByClassName('tag');
console.log(tags1.length);

for(i = 0; i < tags1.length; i++){                                                       
var kw = tags1[i].href.split("#");                                                                                                    
console.log(kw[1]);                                                                                                                  
}

var tags = document.querySelector(".frontmatter-section-tags").childNodes;
console.log(tags.length);
for(i = 0; i < tags.length; i++){

var kw = tags[i].href.split("#");
console.log(kw[1]);
}
//console.log(tags[1].href);

