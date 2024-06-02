const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// Nav Items
const navElements = document.querySelectorAll('nav a')
// console.log(navElements)
for (let i = 0; i < navElements.length; i++) {
  let navItem = `nav-item-${i + 1}`;
  navElements[i].textContent = siteContent.nav[navItem];
  navElements[i].style.fontStyle = "italic"
}

// Images
const imgElements = document.querySelectorAll('img');
for (let img of imgElements) {
  if (img.id === 'middle-img') {
    img.id = 'accent-img'
  }
  img.src = siteContent.images[img.id]
}

// CTA Text
const ctaTextElements = Array.from(document.querySelector('.cta-text').children);
for (let element of ctaTextElements) {
  element.textContent = siteContent.cta[element.tagName.toLowerCase()]
}

// Content
const contentParent = [...document.querySelectorAll('.text-content')];
const contentElements = contentParent.map(item => [...item.children]).flat()
const contentArray = Object.keys(siteContent["main-content"])
for (let i = 0; i < contentElements.length; i++) {
  contentElements[i].textContent = siteContent["main-content"][contentArray[i]]
}

// Contact
const contactElements = Array.from(document.querySelector('.contact').children)
const contactArray = Object.keys(siteContent.contact)
for (let i = 0; i < contactElements.length; i++) {
  contactElements[i].textContent = siteContent.contact[contactArray[i]];
}

// Footer
const footerElement = document.querySelector('footer a');
footerElement.textContent = siteContent.footer.copyright;
footerElement.style.fontWeight = "bold";