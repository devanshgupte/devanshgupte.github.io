---
title: "Ledgerly billing & inventory app"
summary: "A web app for small shops to create GST invoices, track stock and see daily sales in one dashboard."
image: /uploads/projects/ledgerly.svg
category: "Web application"
kind: "Concept project"
tags: [React, Node.js, PostgreSQL, REST API]
featured: true
order: 5
---
## The idea
Many small businesses still bill by hand or in spreadsheets, and lose track of stock. Ledgerly is a concept for a simple billing and inventory app that runs in the browser on any device.

## What it does
- Creates GST-ready invoices and shares them as PDF or on WhatsApp
- Updates stock automatically when an invoice is made, with low-stock alerts
- Keeps a customer list with payment dues
- Shows daily, weekly and monthly sales reports

## How it's built
- **Frontend:** React with a component library, so the interface stays consistent
- **Backend:** a Node.js REST API with authentication and roles for owner and staff
- **Database:** PostgreSQL, with the schema designed for multiple shops (multi-tenant)

## Why it matters
This is the kind of custom business software that replaces three different tools with one, built around how the business actually works.
