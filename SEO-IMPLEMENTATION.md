# SEO Implementation Guide for rwxt.org

## Overview
Complete SEO structure implemented for rwxt.org, optimized for target keywords related to fractional CTO services, MVP development, and startup technical consulting.

## Target Keywords
Primary focus on UK market with these key terms:
- Fractional CTO UK
- MVP development for startups
- Startup technical audit / technical due diligence
- CTO for hire
- Tech stack consultant
- 90-day technical review
- Startup tech advisor
- MVP build service
- Prototype to production
- Startup engineering consultant

## Implementation Checklist

### ✅ 1. Meta Tags & Open Graph
**Location**: `/layouts/partials/seo.html`

**Features**:
- Unique page titles with consistent branding
- Optimized meta descriptions (160 characters)
- Complete Open Graph tags for Facebook/LinkedIn
- Twitter Card tags for Twitter sharing
- Canonical URLs to prevent duplicate content
- Proper language and locale tags (en-GB)
- Theme color and mobile optimization

**Usage**: Automatically included in all pages via theme header

### ✅ 2. Structured Data (JSON-LD Schema)
**Location**: `/layouts/partials/schema-*.html`

**Schemas Implemented**:

#### Organization Schema (`schema-organization.html`)
- Business name, description, logo
- Contact information
- Social media profiles (GitHub, LinkedIn)
- Service catalog with 3 tiers:
  - Spark: Prototype & Validate (£6k)
  - Launch: MVP Build (£18k)
  - Partner: Fractional CTO (£3k/month)
- Knowledge areas and expertise

#### Article Schema (`schema-article.html`)
- Applied to content pages (like 90-day checklist)
- Proper date published/modified
- Author attribution
- Article image and description

#### Breadcrumb Schema (`schema-breadcrumb.html`)
- Navigation hierarchy for SEO
- Helps Google understand site structure

### ✅ 3. Site Configuration
**Location**: `/config.toml`

**Updates**:
- Enhanced site title with keywords
- Comprehensive meta description
- 15 target keywords defined
- Language set to en-GB (UK English)
- Sitemap generation enabled
- Google Analytics integration maintained
- Social profile links configured

**Parameters Added**:
```toml
[params]
  author = "rwxt"
  keywords = [array of 15 target keywords]
  
[params.social]
  github = "Josh-moreton"
  linkedin = ""
  twitter = ""
```

### ✅ 4. Technical SEO

#### robots.txt
**Location**: `/static/robots.txt`
- Allows all crawlers
- Points to sitemap
- Ready for future disallow rules

#### Site Manifest
**Location**: `/site.webmanifest`
- Complete PWA metadata
- Proper name and description
- Theme color (#5783FC - brand blue)
- App categories defined
- Icons configured (192×192 and 512×512)

#### Sitemap
- Hugo auto-generates at `/sitemap.xml`
- Weekly changefreq default
- Priority set to 0.5 default
- Can be customized per page in frontmatter

### ✅ 5. Content Optimization

#### Homepage (`/content/_index.md`)
```yaml
title: "rwxt | Fractional CTO & MVP Development for Startups"
description: "Fractional CTO and MVP development for non-technical founders..."
keywords: [9 primary keywords]
ogImage: "/img/og-home.jpg"
ogType: "website"
```

#### 90-Day Checklist (`/content/90-day-checklist.md`)
```yaml
title: "Advanced 90-Day Tech Checklist for Startup Founders | rwxt"
description: "Deep, actionable, non-technical tech checklist..."
author: "rwxt"
keywords: [10 related keywords]
ogImage: "/img/og-checklist.jpg"
ogType: "article"
```

#### Book Call Page (`/content/book-call.md`)
```yaml
title: "Book a Free 20-Minute Tech Review | rwxt"
description: "Book a 20-minute scoping call with rwxt..."
keywords: [5 conversion-focused keywords]
ogImage: "/img/og-book-call.jpg"
ogType: "website"
```

### ⚠️ 6. Open Graph Images (ACTION REQUIRED)

**Status**: HTML templates created, JPG files need generation

**Required Images** (1200×630px):
- `/static/img/og-home.jpg`
- `/static/img/og-checklist.jpg`
- `/static/img/og-book-call.jpg`
- `/static/img/og-default.jpg`

**Generation Instructions**: See `/static/img/OG-IMAGES-README.md`

**Quick Options**:
1. Open HTML templates in browser, screenshot at 1200×630
2. Use Puppeteer script (included in README)
3. Design in Figma/Canva using brand colors

## Testing & Validation

### Test Your SEO Implementation

1. **Build and serve locally**:
   ```bash
   hugo server
   ```

2. **Check meta tags**:
   - View page source (Cmd+U / Ctrl+U)
   - Look for `<meta property="og:*">` tags
   - Verify structured data `<script type="application/ld+json">`

3. **Validate structured data**:
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Paste your URLs after deployment

4. **Test social sharing**:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

5. **Check sitemap**:
   - Visit `https://rwxt.org/sitemap.xml`
   - Verify all important pages are listed

6. **Monitor in Google Search Console**:
   - Add property for rwxt.org
   - Submit sitemap
   - Track impressions, clicks, and rankings

### Validation Checklist

- [ ] All pages have unique titles
- [ ] Meta descriptions are 150-160 characters
- [ ] OG images display correctly on social platforms
- [ ] JSON-LD validates without errors
- [ ] Sitemap is accessible and complete
- [ ] robots.txt allows crawling
- [ ] Canonical URLs are correct
- [ ] Mobile viewport tags present
- [ ] All internal links work

## Performance Optimization

### Current Considerations
- Hugo generates static HTML (fast)
- Inline critical CSS in header
- Google Fonts loaded with preconnect
- GSAP animations may affect load time

### Recommendations
1. **Image optimization**:
   - Compress OG images to <300KB
   - Use WebP format for hero images
   - Implement lazy loading for below-fold images

2. **JavaScript**:
   - Consider async/defer for non-critical scripts
   - Minimize GSAP bundle if possible

3. **CSS**:
   - Current inline styles are OK for above-the-fold
   - Consider extracting large style blocks to separate file

4. **Monitoring**:
   - Test with PageSpeed Insights
   - Aim for 90+ Core Web Vitals score
   - Monitor with Lighthouse in Chrome DevTools

## Content Strategy

### Recommended Next Steps

1. **Blog/Articles Section**:
   - Create `/content/blog/` directory
   - Write 5-10 articles targeting keywords:
     - "How to hire a fractional CTO"
     - "MVP development cost UK"
     - "Technical due diligence checklist"
     - "Signs you need a CTO"
     - "MVP vs prototype"

2. **Case Studies** (when available):
   - Create `/content/case-studies/` section
   - Use Review schema for testimonials
   - Include before/after metrics

3. **Expand Checklist**:
   - Current 90-day checklist is excellent
   - Consider shorter "quick audit" version
   - Create downloadable PDF version

4. **Video Content**:
   - Record walkthrough of checklist
   - Embed on page with VideoObject schema
   - Upload to YouTube with backlinks

5. **FAQ Section**:
   - Add FAQPage schema
   - Target "people also ask" queries
   - Include on homepage or dedicated page

## Local SEO (Optional)

If targeting specific UK regions:

1. **Update Organization schema** with:
   ```json
   "address": {
     "@type": "PostalAddress",
     "addressLocality": "London",
     "addressRegion": "England",
     "addressCountry": "GB"
   }
   ```

2. **Create location pages** if serving multiple cities

3. **List on directories**:
   - Google Business Profile
   - UK startup directories
   - Tech service listings

## Monitoring & Maintenance

### Monthly Tasks
- Review Google Search Console for errors
- Check top-performing keywords
- Monitor page load speed
- Update content based on user behavior

### Quarterly Tasks
- Audit backlinks
- Update structured data if services change
- Review competitor SEO strategies
- Refresh older content with new data

### Ongoing
- Publish new blog content (1-2x/month)
- Build quality backlinks through guest posts
- Engage on social media with link to content
- Monitor for broken links

## Support & Resources

### Hugo SEO Resources
- [Hugo SEO Best Practices](https://gohugo.io/templates/internal/#configure-google-analytics)
- [Hugo Internal Templates](https://gohugo.io/templates/internal/)

### Schema.org Documentation
- [Organization Schema](https://schema.org/ProfessionalService)
- [Article Schema](https://schema.org/Article)
- [Offer Schema](https://schema.org/Offer)

### Testing Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Questions or Issues?

If you encounter any issues with the SEO implementation:

1. Check the Hugo build logs for errors
2. Validate HTML templates in partials
3. Test JSON-LD with validator
4. Ensure all referenced files exist
5. Clear browser cache when testing

---

**Implementation Date**: 12 November 2025  
**Author**: GitHub Copilot  
**Status**: Core implementation complete, OG images need generation
