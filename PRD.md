# CONCRETE — Architecture Without Apology

**Product Requirements Document (PRD)**

Version: 1.0  
Status: Initial specification  
Project type: Experimental editorial website / UI portfolio  
Primary objective: Demonstrate exceptional UI/UX design, frontend engineering, visual storytelling, and interaction design.

---

## 1. Product Overview

### 1.1 Product vision

CONCRETE is an independent digital architecture magazine exploring brutalist architecture, raw materials, monumental structures, and unconventional architectural forms.

The website presents buildings as architectural specimens through immersive photography, oversized typography, technical annotations, editorial storytelling, and carefully choreographed interactions.

CONCRETE is not intended to be a conventional architecture agency website, a functional e-commerce store, or a user-generated-content platform.

It is an art-directed digital experience designed to demonstrate how a distinctive visual identity can be translated into a polished, accessible, responsive, and interactive website.

### 1.2 Core concept

**Architecture without apology.**

The website embraces the visual principles of brutalism while maintaining enough structure and usability to feel intentional and professional.

The design should balance:

- Raw, confrontational visual composition.
- Strong editorial hierarchy.
- Monumental architectural imagery.
- Technical and documentary details.
- Restrained, purposeful motion.
- Functional, accessible navigation.

### 1.3 Problem statement

Many portfolio websites rely on familiar layouts, predictable cards, generic typography, and interchangeable visual styles.

CONCRETE addresses this by demonstrating a cohesive visual concept in which the content, layout, interactions, and technical details all reinforce one design philosophy.

### 1.4 Project goals

1. Create a visually memorable brutalist editorial website.
2. Demonstrate strong typography, composition, responsive design, and art direction.
3. Build reusable components and a maintainable frontend architecture.
4. Create a compelling architectural storytelling experience.
5. Implement meaningful interactions rather than decorative animation alone.
6. Achieve excellent usability across desktop, tablet, and mobile.
7. Deploy the finished project using free or low-cost services where practical.
8. Make the project presentable as a professional software development portfolio piece.

### 1.5 Non-goals

The initial release will not include:

- User registration or authentication.
- Comments, public submissions, or voting.
- A backend database.
- A content management system.
- E-commerce, payments, or subscriptions.
- User profiles, likes, or social feeds.
- AI-generated architecture descriptions presented as verified facts.
- Complex 3D rendering that compromises loading performance.

These features are outside the scope of the initial portfolio experience.

---

## 2. Target Audience

### Primary audience

- UI/UX designers exploring experimental editorial design.
- Frontend developers interested in visual implementation.
- Architecture and design enthusiasts.
- Recruiters and potential clients reviewing the developer's portfolio.

### Secondary audience

- Architecture students.
- Independent creatives and digital publishers.
- Visitors interested in brutalist architecture and architectural photography.

### User expectations

Visitors should be able to:

- Understand the website's identity within seconds.
- Discover visually compelling architectural projects.
- Explore a building's story without confusion.
- Navigate between the homepage, archive, and individual building pages.
- Experience the design without excessive waiting or intrusive effects.
- Use the website comfortably on a phone, tablet, or desktop.

---

## 3. Creative Direction

### 3.1 Design philosophy

**Hybrid brutalism:** architectural rigidity combined with editorial experimentation.

The website should feel like an independent architecture journal produced by an experimental design studio.

It should be visually aggressive but structurally disciplined.

The design must not resemble a generic corporate template with a dark background and red buttons.

### 3.2 Visual principles

1. Oversized typography as a structural element.
2. Full-width and edge-to-edge architectural photography.
3. Exposed grid lines, borders, and alignment systems.
4. Asymmetrical layouts with deliberate visual tension.
5. High contrast between headlines, body text, and technical metadata.
6. Minimal decorative effects.
7. Large differences in scale between visual elements.
8. Technical annotations that resemble architectural documentation.
9. Restrained use of electric red as an attention mechanism.
10. Deliberate imperfections without sacrificing readability.

### 3.3 Color system

| Token | Color | Purpose |
|---|---|---|
| Concrete | #F2F1EC | Primary canvas background |
| Ink | #191A17 | Dominant text, structural borders, dark backings |
| Signal Red | #EF3D24 | Active routes, index badges, manifesto background, attention markers |
| Blueprint / Border Grey | #BDBDB4 | 1px editorial dividing rules, form borders |
| Secondary Surface | #E5E4DE | Material intelligence and spec panel surface backgrounds |
| Muted Ink | #66665F | Secondary editorial metadata, dates, technical labels |
| White | #FFFFFF | Pure contrast accents |

Rules:

- Ink (#191A17) and Concrete (#F2F1EC) establish the dominant visual identity.
- Signal Red (#EF3D24) provides punchy editorial emphasis and is the primary brand accent.
- Dividers and editorial rules strictly use 1px solid #BDBDB4 or #191A17.
- Secondary text (#66665F) maintains WCAG AA contrast against #F2F1EC.
- Colors must be implemented through centralized design tokens.
- Dark backings (#191A17 with #F2F1EC text) are used for contrast overlays, date tags, and card hover metadata.

### 3.4 Typography

Design typefaces (matched to Figma source):

- **Display & Headlines:** `Inter` (Font weight 900 / Black for masthead wordmark; 500 / Medium and 700 / Bold for editorial headlines).
- **Body & Captions:** `Inter` (Regular 400, Medium 500).
- **Technical Metadata & Navigation:** `IBM Plex Mono` (Regular 400).

Typography hierarchy:

- Display XXL: oversized masthead wordmark (e.g., 242px, tracking -16.94px on desktop).
- Display XL: section hero headlines (e.g., "The Archive" at 156px, "Barbican Estate" at 138px, Manifesto at 106px).
- Display L: featured statements (e.g., "A city within a city." at 88px, "An island of possibility..." at 61px).
- Heading M: building card titles (27px–34px).
- Body: readable narrative copy (16px–23px).
- Technical Mono: navigation (`01  INDEX`), coordinates (`51.5202° N 0.0939° W`), building records, detail indices (`01`, `02`, `03`), issue markers (`IN FOCUS / LONDON`), and footer metadata (10px–12px).

Typography should be responsive and fluid, using `clamp()` where appropriate.

Text must never become unreadable merely to preserve an experimental composition.

### 3.5 Shape and layout language

- Square corners as the default.
- Strong one-pixel or two-pixel borders, with thicker dividers where appropriate.
- No default soft-shadow card aesthetic.
- No excessive pill-shaped controls.
- Grid-based layouts with occasional intentional overflow.
- Asymmetric image sizing and varied column spans.
- Large, deliberate negative space.
- Clear visual relationships between images, captions, and annotations.

### 3.6 Reference principle

Use architectural publications, experimental editorial websites, brutalist graphic design, and architectural photography as inspiration.

References must inform composition and behavior rather than be copied directly.

---

## 4. Information Architecture

The website contains three primary routes and supporting interaction states.

### 4.1 Routes

- `/` — Index / homepage.
- `/archive` — Architectural archive.
- `/buildings/[slug]` — Individual building dossier.
- `/#about` — Editorial manifesto section.

The About section may be reached through an anchor rather than requiring a separate page.

### 4.2 Global navigation

Navigation layout (76px height, 1px bottom rule in #BDBDB4):

- **Left:** `CONCRETE®` wordmark (Inter Black 24px).
- **Center-left:** `AN INDEPENDENT ARCHITECTURE JOURNAL` (IBM Plex Mono 11px in #66665F).
- **Right nav links:**
  - `01  INDEX` (Active state in Signal Red #EF3D24 on homepage)
  - `02  DOSSIER` (Active state in Signal Red #EF3D24 on dossier pages)
  - `03  ARCHIVE ↗` (Active state in Signal Red #EF3D24 on archive page)

Requirements:

- The logo / wordmark returns to the homepage.
- The active route is highlighted in Signal Red #EF3D24.
- Navigation works with mouse, keyboard, and touch.
- Mobile navigation collapses into a dedicated accessible mobile menu without blocking layout.
- Anchor links account for any fixed header offset.
- Browser back and forward navigation work correctly.
- No dead links or placeholder destinations.

---

## 5. Page Requirements

### 5.1 Homepage — The Index

**Purpose:** Establish the brand and introduce visitors to the architectural collection.

#### Section A: Global navigation & editorial masthead

Content:

- Navigation bar with wordmark, journal tagline, and indexed links (`01  INDEX`, `02  DOSSIER`, `03  ARCHIVE ↗`).
- Giant display wordmark: `CONCRETE` (Inter Black, ~242px responsive scale).
- Editorial issue metadata line:
  - Left: `FORM. MATTER. HUMANITY.`
  - Center: `ISSUE 004 — THE COLLECTIVE`
  - Right: `EST. 2024 / VOL. IV`

#### Section B: Cover photograph (In Focus)

Content:

- Full-width framed photograph (1344 × 584px framed on 1440px canvas).
- Top-left accent badge: Signal Red (#EF3D24) block with `IN FOCUS / LONDON`.
- Bottom technical metadata:
  - Left: `FIG. 001 — BARBICAN ESTATE, LONDON` (IBM Plex Mono 11px #66665F).
  - Right: Geographic coordinates `51.5202° N 0.0939° W`.

#### Section C: Featured dossier

Content:

- Section tag: `001 / FEATURED DOSSIER` in Signal Red (#EF3D24).
- Statement headline: `A city within a city.` (Inter Medium 88px).
- Right-hand spec card:
  - Building title: `BARBICAN ESTATE` (Inter Bold 21px).
  - Attribution: `Chamberlin, Powell and Bon / London, United Kingdom / 1965–1976`.
  - Editorial hook: `A radical experiment in collective living. An enduring argument for the public realm.`
  - 1px divider rule in #191A17.
  - Action link: `OPEN THE DOSSIER ↗` navigating directly to `/buildings/barbican-estate`.

#### Section D: Selected stories (Field notes)

Content:

- Header bar: `SELECTED STORIES` (left) and `OBSERVATIONS FROM THE BUILT WORLD` (right) separated by a 1px rule.
- 3-column architectural stories grid:
  - **Item 002:** Trellick Tower (London, UK / 1972) — *"The architecture of ambition."*
  - **Item 003:** National Theatre (London, UK / 1976) — *"A stage for the everyday."*
  - **Item 004:** Habitat 67 (Montréal, CA / 1967) — *"A different kind of density."*
- Card elements: 432 × 308px photography, technical slug (`002 / LONDON, UK / 1972`), building name with arrow (`Trellick Tower ↗`), and editorial subline.
- Section footer: `EXPLORE ALL BUILDINGS` (left) and `THE ARCHIVE →` in Signal Red (#EF3D24) navigating to `/archive`.

#### Section E: Manifesto block

Content:

- Full-width high-contrast Signal Red (#EF3D24) block with Ink (#191A17) typography.
- Tag: `OUR POINT OF VIEW` (IBM Plex Mono 12px).
- Giant editorial statement: `More than buildings. Ways of living.` (Inter Medium 106px).
- Body copy:
  > "We document architecture that makes a statement. Not only in its form, but in the lives it holds. An independent record of concrete, culture and possibility."
- Link: `THE MANIFESTO ↗` (anchors to `/#about`).

#### Section F: Editorial footer

Content:

- Brand wordmark: `CONCRETE®`.
- Publication mission: `AN INDEPENDENT RECORD OF THE BUILT ENVIRONMENT.`
- Outbound links: `INSTAGRAM ↗    CONTACT ↗`.
- 1px rule divider (#BDBDB4).
- Copyright & motto: `© CONCRETE JOURNAL 2026` (left) and `BUILT TO LAST. DESIGNED TO QUESTION.` (right).

### 5.2 Building dossier — The Specimen

**Purpose:** Deliver the signature immersive architectural storytelling experience through a reusable template.

#### Section A: Immersive cover hero (820px)

Content:

- Full-bleed architectural photograph with subtle downward gradient overlay (`rgba(0,0,0,0.05)` to `rgba(0,0,0,0.8)`).
- Top-left badge: Signal Red (#EF3D24) block with dossier ID and city, e.g. `DOSSIER 001 / LONDON`.
- Top-right badge: Dark contrast backing (#191A17) with construction era, e.g. `1965—1976`.
- Monumental headline: Building title in Concrete (#F2F1EC), e.g. `Barbican Estate` (Inter Medium 138px).
- Bottom metadata line:
  - Left: Architect firm attribution (e.g. `CHAMBERLIN, POWELL AND BON`).
  - Right: Scroll prompt `SCROLL TO EXPLORE ↓`.

#### Section B: Story and specifications (650px)

Layout: 2-column split layout separated by whitespace and technical dividers.

- **Left column (Narrative):**
  - Section marker: `01 / THE STORY` in Signal Red (#EF3D24).
  - Editorial headline: e.g. `An island of possibility in the heart of London.` (Inter Medium 61px).
  - Long-form narrative paragraphs describing social, historical, and material context.
- **Right column (Building record):**
  - Header: `BUILDING RECORD / 001` (IBM Plex Mono 12px).
  - Clean specification table separated by 1px rules (#BDBDB4):
    - `ARCHITECT`: Chamberlin, Powell and Bon
    - `LOCATION`: London, United Kingdom
    - `COMPLETED`: 1976
    - `TYPOLOGY`: Residential / Cultural
    - `MATERIAL`: Bush-hammered concrete
    - `STATUS`: Grade II listed

#### Section C: Architectural details — Material Intelligence (740px)

Surface: Secondary Concrete surface (#E5E4DE).

- Header:
  - Section marker: `02 / MATERIAL INTELLIGENCE` in Signal Red (#EF3D24).
  - Headline: `The surface tells the story.` (Inter Medium 53px).
- **Interactive material study:**
  - High-resolution close-up photograph (886 × 480px) displaying concrete texture and form.
  - Numbered hotspot markers in Signal Red (`01`, `02`, `03`) positioned directly over architectural elements.
- **Annotation details list:**
  - Synchronized list items with corresponding numbers (`01`, `02`, `03`):
    - `01` EXPOSED AGGREGATE — *"The concrete was worked by hand to reveal the stone beneath."*
    - `02` SCULPTED PARAPETS — *"Curved balcony edges temper the estate’s formidable mass."*
    - `03` A PEDESTRIAN LANDSCAPE — *"Elevated routes separate daily life from the traffic below."*
  - Interactive sync: Activating or hovering a marker or list item highlights the corresponding region.
- Metadata footer: `FIG. 002 — A STUDY IN TEXTURE, MASS AND REPEATING ELEMENTS` | `DETAIL / 01–03`.

#### Section D: Dossier navigation

Content:

- 1px divider rule in #BDBDB4.
- Previous / Next dossier controls:
  - `← PREVIOUS DOSSIER`: Title, index, and location (e.g. `Habitat 67 / 004 / MONTRÉAL, CANADA`).
  - `NEXT DOSSIER →`: Title, index, and location (e.g. `Trellick Tower / 002 / LONDON, UNITED KINGDOM`).
- Center return link: `BACK TO THE ARCHIVE ↗`.

#### Section E: Editorial footer

Reusable global footer component.

---

### 5.3 Archive — The Index of Structures

**Purpose:** Comprehensive catalog of architectural specimens with instant client-side search and filtering.

#### Section A: Archive heading (300px)

- Section tag: `A LIVING RECORD / 1950—PRESENT` in Signal Red (#EF3D24).
- Page headline: `The Archive` (Inter Medium 156px) accompanied by live count badge in Signal Red, e.g. `09`.
- Subtitle: `Buildings that challenge convention. Ideas that endure.`
- Technical label: `EXPLORE BY FORM, PLACE OR TIME.`

#### Section B: Archive controls toolbar (142px)

Framed between two 1px editorial dividing rules (#191A17 top, #BDBDB4 bottom):

- **Live text search:**
  - Search icon `⌕` and input placeholder `Search buildings, architects, cities…`.
  - Filters across name, architect, city, country, and style in real time.
- **Filter dropdowns:**
  - `LOCATION ⌄` (Filter by country/city: London, Montréal, Boston, Marseille, San Diego, Preston, etc.).
  - `DECADE ⌄` (Filter by 1950s, 1960s, 1970s).
  - `BUILDING TYPE ⌄` (Filter by Residential, Civic, Cultural, Infrastructure, Education).
- **Status & View switcher:**
  - Counter text: `SHOWING 001–009 / 009 BUILDINGS` (IBM Plex Mono 10px).
  - View toggle: `VIEW  ▦  /  ≡` (Grid view vs. List view).

#### Section C: Building index grid

- 3-column responsive grid layout (432px card width on 1440px viewport).
- Default Card anatomy:
  - 432 × 270px architectural photograph.
  - Top-left red index tab: `001`, `002`, `003`... in Signal Red (#EF3D24).
  - Metadata line: `CITY, COUNTRY  /  YEAR` (e.g. `LONDON, UK  /  1976`).
  - Building title with arrow: e.g. `Barbican Estate ↗`.
  - 1px bottom rule divider in #BDBDB4.
- **Hover state overlay:**
  - Dark scrim (#191A17 at 89% opacity) overlays the photo smoothly.
  - Displays structured metadata: record number (`001 / BUILDING RECORD`), building name, architect, location, year, typology.
  - Primary button: full-width Signal Red bar with `OPEN DOSSIER ↗`.
- Grid footer:
  - Left: `END OF INDEX / ALWAYS IN PROGRESS`.
  - Right: `BACK TO TOP ↑`.

#### Section D: Editorial footer

Reusable global footer component.

---

## 6. Signature Interaction Specifications

### 6.1 Scroll-linked architectural storytelling

**Priority: P0**

The primary interaction of the website.

Behavior:

1. The visitor opens a building dossier.
2. The hero image and title establish the building's identity.
3. As the visitor scrolls, image crops, annotations, and text compositions evolve.
4. Technical facts appear alongside relevant photographs.
5. The experience concludes with related architecture.

Acceptance criteria:

- Normal page scrolling remains functional.
- Animation does not block access to content.
- Layout shifts are minimized.
- Reduced-motion preferences are respected.
- Mobile performance remains acceptable.
- The story remains coherent if animations fail.

### 6.2 Architectural annotations

**Priority: P1**

Interactive labels identify material, structural, or visual details.

Behavior:

- Hovering or focusing a label reveals a note.
- Activating a label displays the relevant description.
- Where possible, the associated image region is highlighted.
- Touch users can activate the same information.
- Keyboard users can reach, activate, and dismiss the interaction.

### 6.3 Archive filtering

**Priority: P0**

The archive updates based on selected filters without a page reload.

Acceptance criteria:

- Results match the selected criteria.
- Filter combinations work consistently.
- The interface displays the current result count.
- Empty states and reset controls work.
- No fake filtering behavior.

### 6.4 Navigation transitions

**Priority: P1**

Use subtle visual continuity between archive items and dossier pages where practical.

Examples:

- A restrained image reveal.
- A short editorial title transition.
- A subtle change in grid composition.

Transitions must not interfere with browser navigation, accessibility, or performance.

### 6.5 Hover and focus behavior

**Priority: P0**

- Images may change crop, scale, or overlay on hover.
- Text links use clear interactive states.
- Red indicates active or emphasized information, not every interaction.
- Hover-only information must also be accessible through focus or activation.
- Touch devices must not depend on hover.

---

## 7. Content and Asset Requirements

### 7.1 Initial content volume

Target:

- 1 homepage (Index).
- 1 archive with active search and filtering.
- 9 initial building records (matched to Figma source).
- 1 shared building dossier template.
- 1 editorial manifesto section.

The initial release includes the 9 specimens defined in the Figma design system:
1. `001` — Barbican Estate (London, UK / 1976 / Chamberlin, Powell and Bon)
2. `002` — Trellick Tower (London, UK / 1972 / Ernő Goldfinger)
3. `003` — National Theatre (London, UK / 1976 / Denys Lasdun)
4. `004` — Habitat 67 (Montréal, CA / 1967 / Moshe Safdie)
5. `005` — Boston City Hall (Boston, US / 1968 / Kallmann McKinnell & Knowles)
6. `006` — Robin Hood Gardens (London, UK / 1972 / Alison and Peter Smithson)
7. `007` — Geisel Library (San Diego, US / 1970 / William Pereira)
8. `008` — Unité d’habitation (Marseille, FR / 1952 / Le Corbusier)
9. `009` — Preston Bus Station (Preston, UK / 1969 / BDP - Keith Ingham & Charles Wilson)

### 7.2 Building data model

Each building record should support:

- `slug`
- `name`
- `location`
- `country`
- `architect`
- `completionYear`
- `buildingType`
- `architecturalStyle`
- `materials`
- `coordinates`
- `summary`
- `editorialText`
- `heroImage`
- `gallery`
- `imageCredits`
- `sourceReferences`
- `annotations`
- `featured`

Optional or uncertain facts must be nullable rather than fabricated.

### 7.3 Image manifest

Maintain a clear asset manifest documenting:

- Asset filename.
- Associated building.
- Image purpose.
- Source or creator.
- License or permission status.
- Required attribution.
- Alternative text.
- Preferred focal point.

### 7.4 Asset requirements

- Hero photography should be high quality and compositionally strong.
- Gallery images should represent genuine architectural details.
- Use responsive image sizes and modern formats where supported.
- Provide explicit image dimensions or aspect ratios to reduce layout shifts.
- Avoid excessive image downloads on initial page load.
- Load below-the-fold images lazily where appropriate.
- Prioritize the main hero image when it is the page's largest contentful element.

### 7.5 Content integrity

Use real buildings and factual architectural information in the initial release.

Potential subjects may include the Barbican Estate, Habitat 67, Boston City Hall, and other well-documented brutalist or related architectural works.

These are candidate subjects, not a finalized collection.

Before publication, verify each building's identity, architect, location, dates, and relevant descriptions using reliable sources.

Image licensing must be evaluated independently of factual verification. A building being publicly accessible does not automatically make its photographs free to reuse.

---

## 8. Technical Requirements

### 8.1 Proposed stack

- Next.js with App Router.
- React.
- TypeScript.
- Tailwind CSS.
- Local TypeScript data modules or structured JSON.
- CSS transitions and animations for simple interactions.
- GSAP or Motion only where they materially improve the experience.
- Git and GitHub for version control.
- Vercel or another suitable free-tier host for deployment.

The exact package versions should be selected at project setup based on current stable releases and compatibility.

### 8.2 Architecture principles

- Use reusable React components.
- Separate building data from presentation.
- Use one shared dossier template.
- Centralize design tokens.
- Keep client-side JavaScript limited to components that need interaction.
- Prefer CSS for simple transitions.
- Avoid adding dependencies without a clear benefit.
- Keep image assets organized by project or building.
- Keep routing, filtering, and content behavior testable.

### 8.3 Suggested component structure

- `SiteHeader`
- `MobileNavigation`
- `SiteFooter`
- `EditorialMasthead`
- `FeaturedBuilding`
- `FieldNotesGrid`
- `BuildingCard`
- `BuildingDossier`
- `DossierHero`
- `BuildingSpecifications`
- `ArchitecturalGallery`
- `AnnotationHotspot`
- `ArchiveFilters`
- `ArchiveGrid`
- `EmptyState`
- `SectionHeading`
- `ImageCredit`

These are proposed boundaries, not a requirement to create a separate component for every small visual element.

### 8.4 Suggested route structure

- `app/page.tsx`
- `app/archive/page.tsx`
- `app/buildings/[slug]/page.tsx`
- `app/globals.css`
- `components/`
- `data/buildings.ts`
- `lib/`
- `public/images/`
- `public/fonts/`, if self-hosted fonts are used.

Adjust the exact structure to the selected framework conventions.

### 8.5 Data handling

- Use a single source of truth for building records.
- Generate archive cards and dossier pages from the same records.
- Validate route slugs.
- Handle missing or invalid building routes gracefully.
- Do not duplicate building metadata across page components.
- Do not introduce a database unless a real requirement emerges.

---

## 9. Responsive Design Requirements

The experience must be intentionally designed for:

- Small mobile: approximately 320–374 px.
- Standard mobile: approximately 375–767 px.
- Tablet: approximately 768–1023 px.
- Desktop: approximately 1024–1439 px.
- Wide desktop: 1440 px and above.

These are testing bands, not rigid device-specific breakpoints.

### Mobile requirements

- The masthead must remain readable.
- Hero text must not obscure essential architectural features.
- Navigation must be usable with touch.
- Grid layouts must reflow naturally.
- Technical annotations must remain accessible.
- Large typography must scale down intelligently.
- Horizontal overflow must not occur accidentally.
- Motion must remain performant.
- Touch targets should generally be at least 44 × 44 CSS pixels where practical.

### Desktop requirements

- Use the additional space for composition rather than merely enlarging everything.
- Preserve a consistent grid.
- Avoid excessively long text lines.
- Use image scale and negative space deliberately.
- Ensure fixed or sticky elements do not obstruct content.

---

## 10. Accessibility Requirements

Target WCAG 2.2 AA where applicable.

Requirements:

- Semantic HTML and logical heading hierarchy.
- Keyboard-accessible navigation and controls.
- Visible keyboard focus states.
- Meaningful image alternative text.
- Sufficient text contrast.
- Proper labels for interactive controls.
- Reduced-motion support.
- No essential information conveyed through color alone.
- No essential interaction available only through hover.
- Functional browser zoom and text resizing.
- Accessible error, empty, and loading states.
- Appropriate accessible names for icon-only controls.
- No autoplaying audio.
- No forced scrolling or inaccessible animated content.

Brutalist visual styling must never be used as an excuse for inaccessible text or controls.

---

## 11. Performance and Loading

Performance is a core requirement, not a final optional polish step.

### Requirements

- Optimize and appropriately size architectural images.
- Avoid loading every archive image at once.
- Reserve image space to minimize layout shifts.
- Limit unnecessary client-side JavaScript.
- Avoid large animation libraries unless justified.
- Avoid excessive blur, filters, and continuously animated effects.
- Use appropriate font loading strategies.
- Ensure the page remains useful if an optional animation fails.
- Test on a mid-range laptop and a typical mobile device.

### Performance targets

Aim for the following Core Web Vitals thresholds at the 75th percentile when sufficient real-user data becomes available:

- LCP: 2.5 seconds or less.
- INP: 200 milliseconds or less.
- CLS: 0.1 or less.

During development, use lab measurements as diagnostic indicators rather than claiming that they guarantee real-user performance.

Target a Lighthouse performance score of 90 or higher on representative production pages when practical. Accessibility and SEO should also be measured and improved, rather than relying on a single aggregate score.

---

## 12. SEO and Sharing

- Unique page titles and descriptions.
- Meaningful URLs.
- Semantic content.
- Open Graph metadata for sharing.
- Descriptive image alternative text.
- Sitemap and robots configuration appropriate to the deployed site.
- Canonical URLs when applicable.
- Appropriate structured data only when the content qualifies.
- No fabricated reviews, ratings, or organization details.

Building pages should be indexable once published, subject to correct deployment configuration.

---

## 13. Testing and Quality Assurance

### Functional testing

- All navigation links work.
- Every building card opens the correct dossier.
- Invalid slugs return a suitable not-found page.
- Archive filters return correct results.
- Reset filters restore all entries.
- Previous/next dossier links work.
- Annotation controls reveal correct content.
- Browser back and forward navigation work.
- The site works without a backend.
- No visible control is nonfunctional.

### Visual testing

Check representative routes at:

- 320 px width.
- 375 px width.
- 768 px width.
- 1024 px width.
- 1440 px width.
- 1920 px width.

Inspect:

- Typography wrapping.
- Image focal points.
- Grid alignment.
- Accidental overflow.
- Navigation behavior.
- Loading transitions.
- Focus and hover states.
- Animation timing.
- Empty and error states.

### Technical checks

- Production build succeeds.
- TypeScript checks pass.
- Lint checks pass.
- No unresolved runtime errors.
- No broken images.
- No invalid internal links.
- No missing required metadata.
- No serious accessibility violations in automated checks.
- Manual keyboard and reduced-motion checks pass.

Existing project conventions and tooling should be inspected before adding new testing dependencies.

---

## 14. Implementation Roadmap

### Phase 1 — Project foundation

- Inspect the existing repository and development environment.
- Confirm framework and dependency versions.
- Establish the design tokens.
- Set up routes and global layout.
- Establish the content model.
- Configure version control.

**Exit criteria:** The project runs, routes resolve, and the initial structure is stable.

### Phase 2 — Static visual prototype

- Build the masthead.
- Implement the featured building.
- Create the field notes grid.
- Add the manifesto and footer.
- Establish the responsive grid and typography.

**Exit criteria:** The homepage communicates the intended visual identity before complex animation is introduced.

### Phase 3 — Content and routing

- Prepare 9 verified building records from Figma design.
- Organize photography and credits.
- Build the shared dossier template.
- Implement the archive and filtering.
- Handle invalid routes and empty states.

**Exit criteria:** All pages function using real local content.

### Phase 4 — Signature interactions

- Implement scroll-linked storytelling.
- Add annotation interactions.
- Refine hover and focus states.
- Add restrained transitions.
- Respect reduced-motion settings.

**Exit criteria:** Interactions improve comprehension and visual storytelling without blocking navigation.

### Phase 5 — Quality and polish

- Test responsive layouts.
- Audit keyboard accessibility.
- Optimize images and font loading.
- Inspect layout stability.
- Run production builds and automated checks.
- Correct visual inconsistencies.

**Exit criteria:** No known release-blocking defects remain.

### Phase 6 — Deployment

- Deploy to an appropriate hosting service.
- Test production routes and assets.
- Verify metadata and social previews.
- Confirm the project can be demonstrated on desktop and mobile.
- Document setup and deployment instructions.

**Exit criteria:** The public deployment is functional and suitable for portfolio presentation.

---

## 15. Acceptance Criteria

The project is ready for its initial release when:

1. The homepage, archive, and building dossiers are implemented.
2. The visual identity is cohesive and clearly brutalist.
3. Architectural photography and factual metadata are integrated.
4. All internal navigation works.
5. Archive filters function correctly.
6. The dossier storytelling experience works with and without motion.
7. The website is responsive across the specified viewport ranges.
8. Keyboard navigation and focus states are usable.
9. Image credits and licensing requirements are addressed.
10. No placeholder links or fake interactive controls remain.
11. The production build succeeds.
12. The site has no known critical functional or accessibility defects.
13. Performance has been measured and significant bottlenecks addressed.
14. Deployment and local setup instructions are documented.

---

## 16. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Visual concept becomes generic | Establish a distinct grid, typography hierarchy, and editorial composition before implementation. |
| Too much animation | Add motion only when it strengthens the storytelling. |
| Large images slow the site | Use optimized responsive images and lazy loading. |
| Inaccurate building information | Verify facts and omit uncertain details. |
| Copyright issues | Track source, license, and attribution for every image. |
| Mobile layout feels compromised | Design mobile compositions intentionally rather than merely stacking desktop elements. |
| Scope becomes too large | Defer backend, CMS, 3D, and nonessential features. |
| AI-generated implementation becomes inconsistent | Work in phases, review changes, run checks, and maintain one source of truth for design and content. |

---

## 17. Definition of Success

CONCRETE succeeds when a visitor can immediately recognize its design identity, explore compelling architectural stories, and experience meaningful interactions without fighting the interface.

The finished website should demonstrate:

- Strong visual direction.
- Intentional editorial composition.
- High-quality frontend implementation.
- Reusable architecture.
- Functional interactions.
- Responsive design.
- Accessibility awareness.
- Performance-conscious engineering.
- Professional deployment quality.

The final measure is not how many features the site contains.

It is how convincingly the design, content, and interaction work together as one coherent experience.

---

## 18. Guiding Principle

**Make it work → Make it fun → Make it look good → Expand.**

Build the structure first. Establish the visual identity second. Introduce motion after the composition works. Polish only after the experience is functional.

Do not sacrifice usability, accessibility, or performance for visual spectacle.

**CONCRETE — Architecture Without Apology.**