# DesignOnCue — Real Client Intake Example
**Date:** October 18, 2025
**Client Type:** Lawyer Website (via Jason referral)
**Purpose:** Map actual client conversation to formalized intake system

---

## The Current Process (Manual)

### What You're Asking Clients Today (via Text/Email):

From your conversation with Jason about the lawyer client:

**Information Requested:**

1. ✅ **Logo and materials needed for the site**
   - "I would need the logos and all the materials needed for the site"

2. ✅ **Existing color scheme**
   - "If she already has a color scheme"

3. ✅ **Existing marketing materials**
   - "Any materials (business cards, brochures, etc.) could help make it work"

4. ✅ **Form requirements**
   - "What would she want the form to be?"

5. ✅ **Calendly setup**
   - "Could help guide her through getting Calendly set up"

6. ✅ **Domain name status**
   - "Is there already a domain name purchased for this? If not I can help suggest the best places to that"

7. ✅ **Work email**
   - "Does she already have a work email?"

8. ✅ **Inspiration sites**
   - "Also 3 other sites she likes in her field to give me an idea of what would be in line with what she is looking for"

9. ✅ **Next step: Contract & payment**
   - "Once get some of this together I can get a doc for you guys to sign with all the info with payment schedule and everything"

---

## How This Maps to Our Intake System

### Phase 1: Pre-Agreement Questionnaire

**Questions from our spec that this client would answer:**

| Your Question | Intake Form Question # | Form Section |
|--------------|------------------------|--------------|
| "What industry are you in?" | Q4 | Project Basics |
| "Do you need a logo?" | Q10 | Website Projects |
| "Do you have existing brand assets?" | Q10 | Website Projects |
| "What features do you need?" | Q8 | Website Projects |
| → Contact form | ✅ Checkbox: Contact form | Features |
| → Calendly booking | ✅ Checkbox: Appointment booking | Features |
| "Do you have a domain name?" | Q14 | Technical Details |
| "Do you have a work email?" | Q16 | Technical Details |

**Estimate Generated:**
Based on answers, the form would show:
```
Estimated Investment: $6,000 - $9,000

This includes:
- 4-5 page website (Home, About, Services, Contact)
- Contact form integration
- Calendly appointment booking setup
- WordPress or Webflow build
- Mobile-responsive design
- Basic SEO setup

Timeline: 4-6 weeks
```

---

### Phase 2: Post-Agreement Asset Collection

**After she agrees and pays deposit, she'd fill out:**

| Your Question | Intake Form Question # | Form Section |
|--------------|------------------------|--------------|
| "I would need the logos" | Q3 | Brand Assets |
| → Upload logo files | File upload (AI, SVG, PNG) | Brand Assets |
| "Color scheme" | Q5 | Brand Assets |
| → List hex codes or colors | Text input | Brand Assets |
| "Business cards, brochures" | Q4 | Brand Assets |
| → Upload brand guidelines | File upload | Brand Assets |
| "3 sites she likes in her field" | Q7 | Visual Inspiration |
| → 3 URLs + what she likes | 3 URL inputs + textareas | Visual Inspiration |
| "What form does she want?" | Q8 | Content & Copy |
| → Form requirements | Conditional questions | Project-Specific |
| "Help with Calendly setup" | Q18-19 | Integrations |
| → Calendly account status | Yes/No + account info | Integrations |
| "Domain name purchased?" | Q14 | Technical Details |
| → Domain ownership | Yes/No + domain input | Technical Details |
| "Work email?" | Q16 | Technical Details |
| → Email hosting needs | Multiple choice | Technical Details |

---

## Comparing Manual vs. Automated Intake

### Current Manual Process (What You Did):

**Pros:**
- ✅ Personal, conversational
- ✅ Can adapt questions based on responses
- ✅ Builds rapport with referral source (Jason)

**Cons:**
- ❌ Time-consuming (multiple back-and-forth messages)
- ❌ Easy to forget to ask something
- ❌ Information scattered across text threads
- ❌ Client may not have answers ready, causing delays
- ❌ No automatic estimate/pricing
- ❌ Manual contract creation after gathering info

**Time Investment:**
- Initial inquiry: 5 minutes
- Back-and-forth clarifications: 15-30 minutes over 1-3 days
- Creating proposal/contract: 30-45 minutes
- **Total: 50-80 minutes** before project even starts

---

### Automated Intake Form Process:

**How it would work:**

1. **Jason refers client → You send form link**
   - "Hey! Thanks for the referral. Have her fill this out and she'll get an instant estimate: [link]"

2. **Client fills out Pre-Agreement form (10-15 minutes)**
   - Answers all questions at her own pace
   - Gets instant estimate: $6,000 - $9,000
   - Books consultation call directly (Calendly embedded)

3. **You review submission before consultation**
   - All info organized in one place
   - See her budget, timeline, feature needs
   - Review inspiration sites she provided
   - Prepare tailored proposal

4. **Consultation call (30 minutes)**
   - Already know her needs
   - Address any questions
   - Refine estimate if needed
   - Send proposal/contract

5. **Client signs & pays deposit**

6. **Send Post-Agreement form**
   - Client uploads logo, brand materials
   - Provides Calendly account info (or you help set up)
   - Uploads content/images
   - All assets in one organized submission

7. **Kickoff call**
   - Everything ready to go
   - No hunting for files or info
   - Start designing immediately

**Time Investment:**
- Send form link: 1 minute
- Review submission: 10 minutes
- Consultation call: 30 minutes
- Send contract: 5 minutes
- Review asset submission: 10 minutes
- **Total: 56 minutes** (and more organized)

**Time Saved: 20-25 minutes per client**
**Quality Improvement: No missed information, faster project start**

---

## Specific Questions for This Lawyer Client

### Additional Legal Industry Questions to Add:

**For lawyers specifically, we should ask:**

**19b. What type of law do you practice?** (Project-Specific Section)
- Type: Multiple choice
- Options:
  - Personal Injury
  - Family Law
  - Criminal Defense
  - Real Estate
  - Corporate/Business Law
  - Immigration
  - Estate Planning
  - Other: [text input]
- Purpose: Helps us understand tone, compliance needs (bar association rules), and design direction

**19c. Do you need any specific legal features?** (Project-Specific Section)
- Type: Multi-select checkboxes
- Options:
  - Case evaluation form (confidential intake)
  - Attorney profiles (if multi-attorney firm)
  - Practice area pages
  - Client testimonials section
  - Blog for legal articles
  - Secure client portal (for document sharing)
  - Disclaimer/privacy policy pages
- Purpose: Legal sites often need specific compliance features

**19d. Are there bar association website guidelines you need to follow?**
- Type: Multiple choice
- Options:
  - Yes, I have guidelines to share
  - Yes, but need help researching
  - No, not applicable
  - Not sure
- Purpose: Some states have specific rules about lawyer advertising/websites

---

## Updated Lawyer-Specific Estimate

**With lawyer-specific features:**

```
Estimated Investment: $7,000 - $11,000

This includes:
- 5-6 page website
  • Home
  • About / Attorney Profile
  • Practice Areas (Family Law, etc.)
  • Contact / Case Evaluation Form
  • Testimonials (if permitted by bar)

- Features:
  • Confidential contact form (SSL encrypted)
  • Calendly appointment booking integration
  • Mobile-responsive design (80% of clients use mobile)
  • Blog setup for legal articles (helps with SEO)
  • Bar association compliance review

- Platform: WordPress (recommended for lawyers)
  • Easy for you to update practice areas, case results
  • SEO-friendly for local search
  • Secure and reliable

- Add-ons included:
  • Basic SEO (local law firm search optimization)
  • Google Analytics setup
  • 2 weeks post-launch support

Timeline: 5-7 weeks

Next Steps:
[ Schedule Free Consultation ]
[ Email Me the Estimate ]
```

---

## Questions This Example Reveals We Should Add

Based on your conversation, here are questions **missing from our original spec**:

### Pre-Agreement Form Additions:

**Q8b. What's the primary purpose of your website?**
- Type: Multiple choice
- Options:
  - Generate new client leads
  - Provide information to existing clients
  - Establish credibility and professionalism
  - Showcase portfolio/past work
  - E-commerce/sell products
  - All of the above
- Purpose: Helps prioritize features and design direction

**Q11b. Do you have professional photos of yourself/team?**
- Type: Multiple choice (specific to service businesses)
- Options:
  - Yes, professional photos ready
  - Yes, but they're outdated
  - No, just iPhone photos
  - No photos at all
  - Need help with professional photography
- Purpose: Service businesses (lawyers, consultants, coaches) need personal branding

### Post-Agreement Form Additions:

**Q26. What's your preferred method for receiving updates?**
- Type: Multiple choice
- Options:
  - Email updates (every 3-5 days)
  - Text/SMS updates (for urgent items only)
  - Slack channel (real-time communication)
  - Weekly video check-ins
  - Project dashboard (async updates in Notion/Trello)
- Purpose: Set communication expectations early

**Q27. What's your turnaround time for feedback?**
- Type: Multiple choice
- Options:
  - 24 hours (I'm very responsive)
  - 2-3 days (need time to review)
  - 1 week (I'm busy, need time)
  - Flexible (no rush on my end)
- Purpose: Manage timeline expectations

---

## Real Client Journey Map

**This Lawyer Client's Journey:**

```
Day 1: Jason refers client
  ↓
Day 1: You text Jason asking for info (current manual process)
  ↓
Day 2-3: Wait for Jason to relay questions to client
  ↓
Day 3-4: Jason sends partial info via text
  ↓
Day 5: You follow up with more questions
  ↓
Day 6-7: More back and forth
  ↓
Day 8: You create proposal manually
  ↓
Day 9: Client signs and pays deposit
  ↓
Day 10: You ask for logo/assets
  ↓
Day 12: Client sends logo via email
  ↓
Day 14: You ask for inspiration sites
  ↓
Day 16: Client sends some sites
  ↓
Day 18: PROJECT ACTUALLY STARTS
```

**Total time from inquiry to project start: 18 days**

---

**With Automated Intake System:**

```
Day 1: Jason refers client
  ↓
Day 1: You send form link to Jason (or directly to client)
  ↓
Day 1-2: Client fills out Pre-Agreement form (10 mins, on her schedule)
  ↓
Day 2: Instant estimate generated, consultation call booked
  ↓
Day 3: Consultation call (30 mins)
  ↓
Day 3: You send proposal/contract (auto-generated from form data)
  ↓
Day 4: Client signs and pays deposit
  ↓
Day 4: Post-Agreement form sent automatically
  ↓
Day 5: Client uploads logo, assets, inspiration sites (all at once)
  ↓
Day 6: PROJECT STARTS (kickoff call scheduled)
```

**Total time from inquiry to project start: 6 days**

**Time saved: 12 days** ⚡️
**Sales cycle improved by 67%**

---

## Key Takeaways from This Example

### What Works in Your Current Process:
1. ✅ Personal touch (conversational, helpful tone)
2. ✅ Offering to help with setup (Calendly, domain, email)
3. ✅ Asking for inspiration sites (not just client's ideas)
4. ✅ Clear next steps (contract with payment schedule)
5. ✅ Going through a trusted referrer (Jason) builds trust

### What the Form Will Improve:
1. ⚡️ **Speed:** Client provides all info upfront vs. multiple rounds
2. 📋 **Completeness:** Form ensures you ask every important question
3. 🎯 **Qualification:** Budget question filters out tire-kickers early
4. 💰 **Instant estimate:** Client knows ballpark pricing immediately
5. 🗂️ **Organization:** All info in one place, not scattered across texts
6. ⏱️ **Your time:** Spend 30 min on qualified leads vs. 2 hours on everyone

### How to Keep the Personal Touch:
- ✅ **Form intro:** Personal video from you explaining the process
- ✅ **Confirmation email:** Warm, personal tone (not robotic)
- ✅ **Consultation call:** Still have human conversation
- ✅ **Custom recommendations:** Use form data to give personalized advice
- ✅ **Referral note:** Add question "Who referred you?" → thank Jason personally

---

## Recommended Form Flow for This Client

### Pre-Agreement (Public Link)

**Form Title:** "Get Your Website Estimate in 2 Minutes"

**Introduction:**
```
Hi! I'm Gabe Velez, founder of DesignOnCue.

Thanks for your interest in working together! This quick questionnaire
will help me understand your needs and give you an instant estimate.

Most clients finish this in 5-10 minutes.

After you submit, you'll get:
  • Ballpark pricing for your project
  • Estimated timeline
  • Option to book a free 30-min consultation

Let's get started! 👇
```

**Questions:** (Streamlined for speed)
- Name, email, company name, industry: **Legal Services**
- Service type: **Website**
- Number of pages: **4-7 pages**
- Features needed:
  - [✅] Contact form
  - [✅] Appointment booking (Calendly)
  - [✅] Blog section
- Do you have a logo? **Yes** / No
- Do you have content ready? Partially
- Do you have a domain? **No, need help**
- Budget range: **$5,000 - $10,000**
- Timeline: **1-2 months**
- How did you hear about us? **Referral from Jason**

**Estimate Generated:**
$7,000 - $11,000 | 5-7 weeks

**Call to Action:**
[ Book Free Consultation ] ← Calendly embed

---

### Post-Agreement (Private Link via Email)

**Email sent after deposit received:**

```
Subject: Welcome! Let's Get Your Website Started 🎉

Hi [Client Name],

Excited to officially work together!

To kick things off, I need a few assets and details from you.
Please fill out this form (takes about 10-15 minutes):

👉 [Your Project Onboarding Form]

This will ask for:
  • Your logo files
  • Brand colors (if you have them)
  • 3 websites you love (for inspiration)
  • Photos and content for your site
  • Calendly account info (or I'll help you set one up)

Once you submit, I'll review everything and we'll schedule
our kickoff call to start designing!

Questions? Just reply to this email.

Thanks,
Gabe

P.S. Don't worry if you don't have everything perfect.
We'll figure it out together!
```

**Form Questions:**
- All Phase 2 questions from our spec
- Plus lawyer-specific additions

**Next Step:**
After submission → Kickoff call auto-scheduled

---

## Action Items

Based on this real example, update the intake forms:

### Pre-Agreement Form Updates:
- [ ] Add industry-specific templates (legal, healthcare, etc.)
- [ ] Add "How did you hear about us?" with referral tracking
- [ ] Add "Primary website purpose" question
- [ ] Add professional photo availability question
- [ ] Test estimate calculator with lawyer client scenario

### Post-Agreement Form Updates:
- [ ] Add communication preference question
- [ ] Add feedback turnaround expectation question
- [ ] Create lawyer-specific conditional questions
- [ ] Add bar association compliance question for legal clients
- [ ] Add "secure client portal" option for sensitive industries

### Workflow Updates:
- [ ] Create email template for referrals (like Jason)
- [ ] Create confirmation email templates (warm, personal tone)
- [ ] Build Notion/Airtable board to receive form submissions
- [ ] Set up Zapier automation: Form submission → Slack notification → Create Notion project

### Client-Specific Follow-up:
- [ ] Send Jason this form link for his lawyer client
- [ ] After she submits, review and prepare customized proposal
- [ ] Book consultation call
- [ ] Track: Did form save time vs. manual process?

---

**Document Owner:** Gabe Velez
**Last Updated:** October 18, 2025
**Client Reference:** Lawyer website (Jason referral)
