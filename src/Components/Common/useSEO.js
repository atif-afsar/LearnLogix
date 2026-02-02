import { useEffect } from "react";

export default function useSEO({ 
  title, 
  description, 
  keywords, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  canonical,
  structuredData 
}) {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update description
    if (description) {
      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    // Update keywords
    if (keywords) {
      let meta = document.querySelector("meta[name='keywords']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "keywords";
        document.head.appendChild(meta);
      }
      meta.content = keywords;
    }

    // Update Open Graph title
    if (ogTitle) {
      let meta = document.querySelector("meta[property='og:title']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", "og:title");
        document.head.appendChild(meta);
      }
      meta.content = ogTitle;
    }

    // Update Open Graph description
    if (ogDescription) {
      let meta = document.querySelector("meta[property='og:description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", "og:description");
        document.head.appendChild(meta);
      }
      meta.content = ogDescription;
    }

    // Update Open Graph image
    if (ogImage) {
      let meta = document.querySelector("meta[property='og:image']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", "og:image");
        document.head.appendChild(meta);
      }
      meta.content = ogImage;
    }

    // Update canonical URL
    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Add structured data
    if (structuredData) {
      // Remove existing structured data
      const existingScript = document.querySelector("script[type='application/ld+json']");
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical, structuredData]);
}
