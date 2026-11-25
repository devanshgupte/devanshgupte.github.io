---
title: "Shri Sai Vidhya Niketan school ERP & parent app"
summary: "A complete school management system running live: students, exams, fees with UPI payments, attendance, payroll and parent communication on WhatsApp, plus a mobile app for parents and staff on Android and iOS."
image: /uploads/projects/ssvn-erp.svg
category: "ERP & mobile app"
kind: "Client project"
tags: [PHP, MySQL, React Native, Expo, WhatsApp API, UPI]
featured: true
order: 1
---
## The client
Shri Sai Vidhya Niketan is a higher secondary school affiliated to the Madhya Pradesh Board (MPBSE), with classes up to 11 and 12 across streams. The school already had a PHP ERP and app, but they had grown piece by piece. They needed a consistent redesign, a cleaner and more scalable structure, and the features that were missing: **online fee payment, parent communication, exam planning and online TC requests.**

## What I built

### One system, with access by role
- Separate access for **admin, principal, teachers, guest lecturers, finance staff and parents**, with per-person page access overrides set by the admin
- Staff login with **OTP over WhatsApp and email**, plus a log of all logins and app activity
- An admin dashboard with a KPI strip, status colours, today's birthdays and a layout each admin can customise

### Students, exams and academics
- Student profiles, bulk editing, ID cards and certificates
- **Class promotion with a dry run and undo**, so year-end changes can be checked before they're applied
- Marks setup, marks entry, results and marks status, with the option to unlock marks
- New report cards for 2026–27 and admit cards
- **An exam date sheet planner** that builds the schedule automatically, checks for clashes, handles holidays per class, and prints in colour or black and white
- Timetables that support combined streams

### Fees with direct UPI payments
- Fee structures, fee collection and receipts, including old dues
- **Online fee payment straight to the school's UPI**, with a button for each app (GPay, PhonePe, Paytm, BHIM) and no payment-gateway charges
- Payments matched using UTR numbers and bank statement CSVs
- Fee reminders sent by WhatsApp, voice call or app notification

### Staff, attendance and payroll
- Teacher records, payroll and leave management
- Staff attendance punch emails sent automatically on a schedule

### Talking to parents
- **Reach Parents:** WhatsApp and SMS messages sent in batches, with Hindi support
- **A WhatsApp bot** with an admin inbox for replies
- **Automated voice calls in Hindi** using text-to-speech
- Online TC applications with email OTP verification, and a page to verify issued documents

### The mobile app
- "Shri Sai Vidhya Niketan - ERP" for **Android and iOS**, built with React Native and Expo
- **Parents** log in with an OTP and see notices, homework, a notification inbox, fee payment links and TC applications
- **Staff** get a dashboard, homework tools and quick actions on the go

### Across the whole system
English and Hindi, a dark theme, a fully responsive layout, and redesigned print layouts for receipts, report cards and certificates.

## Challenges I solved
- **Two marks systems at once.** The older marks system still serves 2025–26, while the new one handles 2026–27 onwards. The ERP switches between them automatically by academic session.
- **Hosting limits.** Shared hosting caps database connections per hour, so I cut background polling right down and only refresh dashboards while they're visible on screen.
- **UPI links opening the wrong app.** A plain UPI link sometimes opened WhatsApp instead of a payment app, so I switched to a separate pay button for each UPI app.
- **SMS links being blocked.** Phone operators drop links in SMS, so SMS messages became link-free and payment links go out on WhatsApp instead.
- **App Store review.** I set up demo parent and staff logins so Apple's reviewers can test the app without a real school account.
- **Security hardening:** tighter access controls on sensitive pages and scripts, secret keys kept out of the code repository, and India time used consistently everywhere.

## Status
The redesigned web ERP is **live** and used by the school every day. The Android app is published, and the iOS version is in App Store review.
