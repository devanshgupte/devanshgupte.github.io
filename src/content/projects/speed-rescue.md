---
title: "Speed rescue: 38 to 96 on PageSpeed"
summary: "A performance audit of a slow demo WordPress site, documented step by step."
image: /uploads/projects/speed-rescue.svg
category: "Performance"
kind: "Concept project"
tags: [Core Web Vitals, Caching, Image optimization, Query Monitor]
featured: false
order: 9
---
## The idea
I built a deliberately slow WordPress site (a page builder, 30 plugins, uncompressed images) and then fixed it, documenting each step and its effect.

## What I did
- Audited it with PageSpeed Insights, Query Monitor and the browser's network panel
- Removed unused plugins and replaced two with a few lines of code
- Converted images to WebP and AVIF, and added proper sizes and lazy loading
- Set up page caching and object caching, and deferred non-critical scripts
- Fixed layout shift caused by fonts and ads

## Result
The mobile PageSpeed score went from 38 to 96, and Largest Contentful Paint dropped from 6.1 s to 1.4 s. These are numbers from my own test site, and the process is the same one I'd run on a client site.
