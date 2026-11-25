---
title: "Shri Sai Vidhya Niketan school website"
summary: "A complete redesign of a higher secondary school's website: custom-built, animated, bilingual (English and Hindi), with OTP-verified online admission forms and an admin panel the school runs itself."
image: /uploads/projects/ssvn-website.svg
category: "School website"
kind: "Client project"
tags: [WordPress, Custom Gutenberg blocks, PHP, JavaScript, Polylang, WhatsApp OTP]
featured: true
order: 2
---
## The client
Shri Sai Vidhya Niketan is a higher secondary school. Its old website was slow and hard to manage: it scored **30 on Google PageSpeed**, and the main content took about **14 seconds** to appear on mobile. The cause was dozens of huge, uncompressed result photos and no caching.

The school wanted a fully custom, modern site that still loads fast, works in English and Hindi, takes admissions online securely, and can be updated by the school staff.

## What I built

### A custom design, built from scratch
- A custom WordPress block theme and my own blocks plugin, with **no page builder**
- Hand-built blocks for every section, in a midnight-indigo and marigold colour scheme
- Scroll animations on sections and cards, including connected timeline animations, kept light so they don't slow the site down
- On phones, long lists turn into swipeable sliders and the menu becomes a card-style panel

### Fully bilingual
- English by default and Hindi under `/hi/`, with every block working in both languages
- Hindi gets its own font (Hind) and spacing, so it reads naturally instead of looking like a translation squeezed into an English layout

### Online forms with OTP verification
- One multi-step form system for **admissions, transfer certificates and careers**, in English and Hindi
- Applicants verify their **email with an OTP** and their **mobile number with an OTP on WhatsApp** before submitting
- File uploads are type-checked, size-limited and stored in a private folder
- Applicants get a receipt, and the office reviews every submission in a **Forms Inbox** inside the admin panel
- Five branded email templates (OTP, receipt, office notification, status update and call-back), each in both languages

### Content the school manages itself
- **Results** and **gallery albums** are their own content types. Homepage toppers are pulled automatically from the results.
- A rebuilt result checker, a news and blog section with a magazine layout, plus Olympiad, leadership, testimonials and FAQ sections
- Links into the school's ERP for online services and TC applications, so parents move between the website and the ERP easily
- A rebranded admin panel with the school's own login page, colours, and a dashboard showing counts and quick actions

### Speed
- All photos converted to WebP, page caching added, and 11 unused plugins and 4 old themes removed
- Local mobile Lighthouse tests: **82 on the homepage** and up to **94 on the admission form**, with **100** for Accessibility, Best Practices and SEO

## Launching without losing live data
The live site kept getting new photos and posts while I worked. Instead of overwriting its database, I wrote a one-time **updater plugin** that brings in the new pages, Hindi versions, results and form data, and leaves the live photos, posts and users untouched.

## Status
The new site is complete in English and Hindi and is being rolled out on the school's live domain.
