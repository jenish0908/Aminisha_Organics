# Aminisha Organics LLP Website

A professional chemical company website built with React, TypeScript, and Vite.

## Features

- **Multi-page Navigation**: Home, About Us, Products, Certifications, Contact Us
- **Product Showcase**: Detailed pages for Ammonium Persulfate and Sodium Persulfate
- **Contact Form**: Automatic email sending with product inquiry selection
- **PDF Certificates**: Downloadable ISO certification documents
- **Responsive Design**: Optimized for mobile and desktop
- **Professional UI**: Clean, modern design with smooth animations

## Email Configuration

The contact form uses Supabase Edge Functions to send emails automatically. To configure:

1. Set up your email service (EmailJS, SendGrid, etc.)
2. Update the email service configuration in `supabase/functions/send-contact-email/index.ts`
3. Replace the placeholder service IDs with your actual credentials

## PDF Certificates

Upload your ISO certificate PDFs to the `public/pdfs/` folder:
- `iso-9001-certificate.pdf`
- `iso-14001-certificate.pdf`
- `iso-45001-certificate.pdf`

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```
