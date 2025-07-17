import { Intent, QuickReply } from './types';

export const predefinedResponses: Record<Intent, string[]> = {
  greeting: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'start', 'begin'],
  services: ['services', 'what do you do', 'offerings', 'capabilities', 'development', 'design', 'solutions'],
  webDevelopment: ['web development', 'website', 'web app', 'react', 'node.js', 'frontend', 'backend'],
  mobileDevelopment: ['mobile', 'app development', 'flutter', 'react native', 'ios', 'android'],
  uiuxDesign: ['ui', 'ux', 'design', 'user interface', 'user experience', 'figma', 'prototype'],
  database: ['database', 'postgresql', 'mysql', 'mongodb', 'data', 'storage'],
  cloud: ['cloud', 'aws', 'devops', 'deployment', 'hosting', 'infrastructure'],
  about: ['about', 'company', 'team', 'who are you', 'experience', 'mission', 'vision'],
  pricing: ['price', 'cost', 'pricing', 'how much', 'rates', 'budget', 'quote'],
  contact: ['contact', 'reach', 'phone', 'email', 'get in touch', 'call', 'schedule'],
  portfolio: ['portfolio', 'projects', 'work', 'examples', 'showcase', 'previous work'],
  process: ['process', 'how do you work', 'methodology', 'approach', 'timeline'],
  technologies: ['technologies', 'tech stack', 'tools', 'frameworks', 'programming'],
  issue: ['problem', 'issue', 'bug', 'error', 'not working', 'broken', 'help', 'trouble'],
  getQuote: ['quote', 'estimate', 'proposal'],
  scheduleCall: ['schedule', 'call', 'meeting', 'appointment'],
  moreInfo: ['more info', 'details', 'tell me more'],
  default: [],
};

export const quickReplies: Record<Intent, QuickReply[]> = {
  greeting: [
    { id: '1', text: '📋 View Services', intent: 'services' },
    { id: '2', text: '💰 Get Pricing', intent: 'pricing' },
    { id: '3', text: '📞 Contact Us', intent: 'contact' },
  ],
  services: [
    { id: '1', text: '🌐 Web Development', intent: 'webDevelopment' },
    { id: '2', text: '📱 Mobile Apps', intent: 'mobileDevelopment' },
    { id: '3', text: '🎨 UI/UX Design', intent: 'uiuxDesign' },
    { id: '4', text: '💰 Get Quote', intent: 'getQuote' },
  ],
  webDevelopment: [
    { id: '1', text: '💰 Web Dev Pricing', intent: 'pricing' },
    { id: '2', text: '🔧 Technologies Used', intent: 'technologies' },
    { id: '3', text: '📞 Schedule Call', intent: 'scheduleCall' },
  ],
  mobileDevelopment: [
    { id: '1', text: '💰 App Dev Pricing', intent: 'pricing' },
    { id: '2', text: '📱 App Examples', intent: 'portfolio' },
    { id: '3', text: '💬 Get Quote', intent: 'getQuote' },
  ],
  uiuxDesign: [
    { id: '1', text: '🎨 Design Portfolio', intent: 'portfolio' },
    { id: '2', text: '⚡ Design Process', intent: 'process' },
    { id: '3', text: '💰 Design Pricing', intent: 'pricing' },
  ],
  pricing: [
    { id: '1', text: '💬 Get Custom Quote', intent: 'getQuote' },
    { id: '2', text: '📞 Schedule Consultation', intent: 'scheduleCall' },
    { id: '3', text: '📋 View All Services', intent: 'services' },
  ],
  contact: [
    { id: '1', text: '📞 Schedule Call', intent: 'scheduleCall' },
    { id: '2', text: '💬 Get Quote', intent: 'getQuote' },
    { id: '3', text: '❓ Report Issue', intent: 'issue' },
  ],
  default: [
    { id: '1', text: '📋 Our Services', intent: 'services' },
    { id: '2', text: '💰 Pricing Info', intent: 'pricing' },
    { id: '3', text: '📞 Contact Us', intent: 'contact' },
  ],
  database: [],
  cloud: [],
  about: [],
  portfolio: [],
  process: [],
  technologies: [],
  issue: [],
  getQuote: [],
  scheduleCall: [],
  moreInfo: [],
};

export const responses: Record<Intent, string> = {
  greeting: 'Hello! 👋 Welcome to Gensys Digital Solutions. I\'m here to help you transform your ideas into powerful digital experiences.\n\nI can assist you with:\n• Web & Mobile Development\n• UI/UX Design Services\n• Custom Software Solutions\n• Pricing & Consultations\n\nWhat would you like to explore today?',
  
  services: 'We offer comprehensive digital solutions to help your business thrive:\n\n🌐 **Web Development**\n• Custom websites & web applications\n• React, Node.js, TypeScript\n• E-commerce & CMS solutions\n\n📱 **Mobile Development**\n• iOS & Android apps\n• Cross-platform solutions (Flutter, React Native)\n• App Store deployment\n\n🎨 **UI/UX Design**\n• User research & wireframing\n• Interactive prototypes\n• Brand-consistent interfaces\n\n☁️ **Cloud & DevOps**\n• AWS infrastructure\n• CI/CD pipelines\n• Performance optimization\n\nWhich service interests you most?',
  
  webDevelopment: '🌐 **Web Development Excellence**\n\nWe create modern, scalable web solutions:\n\n**Frontend Technologies:**\n• React, TypeScript, Tailwind CSS\n• Responsive design for all devices\n• Progressive Web Apps (PWA)\n\n**Backend Solutions:**\n• Node.js, Python APIs\n• Database design & optimization\n• Cloud deployment (AWS)\n\n**Specializations:**\n• E-commerce platforms\n• Business dashboards\n• SaaS applications\n• CMS integration\n\n**Timeline:** 4-12 weeks depending on complexity\n**Starting from:** $3,000 for basic websites\n\nReady to discuss your project?',
  
  mobileDevelopment: '📱 **Mobile App Development**\n\nWe build apps that users love:\n\n**Cross-Platform Development:**\n• Flutter & React Native\n• Single codebase, dual platform\n• 40% faster development\n\n**Native Development:**\n• iOS (Swift) & Android (Kotlin)\n• Platform-specific optimization\n• Maximum performance\n\n**Our Process:**\n• User research & wireframing\n• MVP development\n• App Store submission\n• Post-launch support\n\n**Recent Success:** 95% app store approval rate\n**Timeline:** 6-16 weeks\n**Starting from:** $8,000 for cross-platform apps\n\nLet\'s discuss your app idea!',
  
  uiuxDesign: '🎨 **UI/UX Design Services**\n\nWe create designs that convert:\n\n**Our Design Process:**\n1. **Research** - User personas & competitor analysis\n2. **Wireframing** - Information architecture\n3. **Prototyping** - Interactive Figma mockups\n4. **Testing** - User feedback & iterations\n5. **Handoff** - Developer-ready assets\n\n**Design Specialties:**\n• Web & mobile interfaces\n• E-commerce optimization\n• SaaS dashboards\n• Brand identity design\n\n**Recent Achievement:** 65% average conversion rate improvement\n**Timeline:** 2-8 weeks\n**Starting from:** $2,500 for complete redesigns\n\nWant to see our design portfolio?',
  
  database: '🗄️ **Database Solutions**\n\nWe design robust data architectures:\n\n**Database Technologies:**\n• PostgreSQL - Relational data excellence\n• MongoDB - Flexible document storage\n• Redis - High-performance caching\n• Supabase - Real-time applications\n\n**Our Services:**\n• Database design & optimization\n• Data migration & integration\n• Performance tuning\n• Backup & recovery strategies\n\n**Performance Focus:**\n• Query optimization\n• Indexing strategies\n• Scalability planning\n\nNeed help with your data architecture?',
  
  cloud: '☁️ **Cloud & DevOps Services**\n\nWe build scalable, reliable infrastructure:\n\n**Cloud Platforms:**\n• AWS - Complete ecosystem\n• Docker & Kubernetes\n• Serverless architectures\n\n**DevOps Services:**\n• CI/CD pipeline setup\n• Automated testing & deployment\n• Monitoring & logging\n• Security best practices\n\n**Benefits:**\n• 99.9% uptime guarantee\n• Auto-scaling capabilities\n• Cost optimization\n• 24/7 monitoring\n\nReady to modernize your infrastructure?',
  
  about: '🏢 **About Gensys Digital Solutions**\n\nWe\'re a passionate team of digital innovators with 5+ years of experience transforming businesses through technology.\n\n**Our Mission:** Empower businesses with cutting-edge digital solutions\n\n**Our Track Record:**\n• 50+ successful projects delivered\n• 100% client satisfaction rate\n• $2M+ in client revenue generated\n• 95% project on-time delivery\n\n**Our Team:**\n• Full-stack developers\n• UI/UX designers\n• Cloud architects\n• Project managers\n\n**Our Values:**\n• Quality first approach\n• Transparent communication\n• Innovation-driven solutions\n• Long-term partnerships\n\nWant to become our next success story?',
  
  pricing: '💰 **Transparent Pricing Structure**\n\nWe believe in honest, value-based pricing:\n\n**Web Development:**\n• Basic Website: $3,000 - $8,000\n• Custom Web App: $8,000 - $25,000\n• E-commerce Platform: $10,000 - $30,000\n\n**Mobile Development:**\n• Cross-platform App: $8,000 - $20,000\n• Native iOS/Android: $12,000 - $35,000\n\n**UI/UX Design:**\n• Website Redesign: $2,500 - $8,000\n• App Design: $3,000 - $10,000\n\n**What\'s Included:**\n✅ Free consultation & project planning\n✅ Regular progress updates\n✅ 3 months post-launch support\n✅ Source code ownership\n\n**Payment Options:** 50% upfront, 50% on completion\n\nReady for a custom quote?',
  
  contact: '📞 **Let\'s Connect!**\n\nReady to start your digital transformation?\n\n**Contact Information:**\n📧 **Email:** 121kirtan2122@sjcem.edu.in\n📱 **Phone:** +91 7208837152\n🕒 **Hours:** Monday-Friday, 9 AM - 6 PM IST\n\n**Next Steps:**\n1. **Free Consultation** (30 minutes)\n2. **Project Proposal** within 48 hours\n3. **Development Kickoff** within 1 week\n\n**Response Time:** We respond within 4 hours during business hours\n\n**Preferred Contact Method:**\n• Email for detailed discussions\n• Phone for quick questions\n• WhatsApp for instant updates\n\nHow would you prefer to connect?',
  
  portfolio: '🚀 **Our Portfolio Highlights**\n\nWe\'ve delivered exceptional results across industries:\n\n**Recent Projects:**\n\n🛒 **E-commerce Platform**\n• 200% increase in online sales\n• Mobile-first design\n• Advanced analytics dashboard\n\n📱 **Healthcare App**\n• 50K+ active users\n• HIPAA compliant\n• Real-time patient monitoring\n\n🏢 **SaaS Dashboard**\n• 10x improvement in user efficiency\n• Custom analytics & reporting\n• Multi-tenant architecture\n\n🎨 **Brand Redesign**\n• 180% increase in website traffic\n• 65% better conversion rates\n• Complete visual identity overhaul\n\n**Industries We Serve:**\n• Healthcare & Medical\n• E-commerce & Retail\n• Finance & FinTech\n• Education & EdTech\n• Real Estate & Property\n\nWant to see detailed case studies?',
  
  process: '⚡ **Our Proven Development Process**\n\nWe follow an agile, transparent approach:\n\n**Phase 1: Discovery (Week 1)**\n• Requirements gathering\n• Technical feasibility analysis\n• Project timeline & budget\n• Technology stack selection\n\n**Phase 2: Design (Weeks 2-3)**\n• Wireframing & user flows\n• UI/UX design mockups\n• Client feedback & iterations\n• Final design approval\n\n**Phase 3: Development (Weeks 4-12)**\n• Sprint-based development\n• Weekly progress demos\n• Continuous client feedback\n• Quality assurance testing\n\n**Phase 4: Launch (Week 13)**\n• Final testing & bug fixes\n• Production deployment\n• Performance optimization\n• Go-live support\n\n**Phase 5: Support (Ongoing)**\n• 3 months free support\n• Performance monitoring\n• Feature updates\n• Maintenance & security\n\n**Communication:** Daily Slack updates, weekly video calls\n\nReady to start this journey?',
  
  technologies: '🛠️ **Our Technology Stack**\n\nWe use cutting-edge, proven technologies:\n\n**Frontend Development:**\n• React, Next.js, TypeScript\n• Tailwind CSS, Material-UI\n• Redux, Zustand (State Management)\n• Progressive Web Apps (PWA)\n\n**Backend Development:**\n• Node.js, Express, NestJS\n• Python, Django, FastAPI\n• RESTful APIs, GraphQL\n• Microservices architecture\n\n**Mobile Development:**\n• React Native, Flutter\n• Native iOS (Swift), Android (Kotlin)\n• Cross-platform optimization\n\n**Databases:**\n• PostgreSQL, MongoDB\n• Redis, Elasticsearch\n• Supabase, Firebase\n\n**Cloud & DevOps:**\n• AWS, Google Cloud, Azure\n• Docker, Kubernetes\n• CI/CD pipelines, GitHub Actions\n\n**Why These Technologies?**\n• Industry-standard solutions\n• Long-term maintainability\n• Scalability & performance\n• Strong community support\n\nCurious about our tech choices for your project?',
  
  issue: '🚨 **Technical Support Available**\n\nI\'m here to help resolve any issues you\'re experiencing:\n\n**Common Issues We Handle:**\n• Website not loading properly\n• Mobile app crashes or bugs\n• Performance or speed problems\n• Email or contact form issues\n• Payment or checkout problems\n• Design or layout concerns\n\n**To Help You Better, Please Share:**\n• What specific problem are you facing?\n• When did this issue start?\n• What device/browser are you using?\n• Any error messages you\'ve seen?\n\n**Our Response Time:**\n• Critical issues: Within 2 hours\n• Standard issues: Within 24 hours\n• Non-urgent issues: Within 48 hours\n\n**Support Channels:**\n• This chat (immediate)\n• Email support (detailed issues)\n• Phone support (urgent matters)\n\nI\'ll also notify our technical team about your issue for additional assistance if needed.',
  
  getQuote: '💬 **Get Your Custom Quote**\n\nGreat! Let\'s discuss your project requirements:\n\n**To provide an accurate quote, I\'d like to know:**\n\n1. **Project Type:**\n   • Website/Web Application\n   • Mobile App (iOS/Android)\n   • UI/UX Design\n   • Other custom solution\n\n2. **Key Features Needed:**\n   • User authentication\n   • Payment processing\n   • Database integration\n   • Third-party integrations\n   • Admin dashboard\n\n3. **Timeline & Budget:**\n   • Desired launch date\n   • Approximate budget range\n   • Priority features vs. nice-to-haves\n\n**Next Steps:**\n• Share your project details\n• Receive detailed proposal within 48 hours\n• Schedule free consultation call\n• Begin development within 1 week\n\nWould you like to share these details now, or schedule a call to discuss?',
  
  scheduleCall: '📞 **Schedule Your Free Consultation**\n\nPerfect! Let\'s set up a personalized consultation:\n\n**What We\'ll Discuss:**\n• Your project goals & requirements\n• Technical approach & recommendations\n• Timeline & budget planning\n• Team introduction & next steps\n\n**Call Options:**\n🕒 **Quick Chat (15 mins):** Basic project overview\n🕓 **Standard Call (30 mins):** Detailed discussion\n🕘 **Deep Dive (60 mins):** Comprehensive planning\n\n**Available Times:**\n• Monday - Friday: 9 AM - 6 PM IST\n• Weekends: By special arrangement\n\n**Booking Methods:**\n1. **WhatsApp:** +91 7208837152 (instant booking)\n2. **Email:** 121kirtan2122@sjcem.edu.in\n3. **Direct Call:** +91 7208837152\n\n**Before Our Call:**\n• Prepare any reference materials\n• List your key requirements\n• Think about your ideal timeline\n\nReady to book? Click the WhatsApp button below or let me know your preferred time!',
  
  moreInfo: '📚 **Additional Information**\n\nI\'d be happy to provide more details! Here\'s what I can elaborate on:\n\n**Technical Details:**\n• Specific technology recommendations\n• Architecture & scalability planning\n• Security & compliance measures\n• Integration possibilities\n\n**Business Information:**\n• ROI & performance metrics\n• Maintenance & support options\n• Upgrade & expansion paths\n• Industry best practices\n\n**Process Details:**\n• Detailed project timelines\n• Team structure & roles\n• Communication protocols\n• Quality assurance procedures\n\n**Pricing Breakdown:**\n• Detailed cost estimates\n• Payment schedule options\n• Value proposition analysis\n• Cost-benefit comparisons\n\nWhat specific aspect would you like me to dive deeper into?',
  
  default: 'Thank you for your question! 🤔\n\nI want to make sure I provide you with the most helpful information. I can assist you with:\n\n**Our Services:**\n• Web Development & Design\n• Mobile App Development\n• UI/UX Design Services\n• Cloud & DevOps Solutions\n\n**Business Information:**\n• Pricing & Packages\n• Project Process & Timeline\n• Portfolio & Case Studies\n• Contact & Scheduling\n\n**Support:**\n• Technical Issues\n• General Questions\n• Project Consultations\n\nCould you please be more specific about what you\'d like to know? Or feel free to choose from the quick options below!\n\n*Tip: Try asking about our services, pricing, or schedule a consultation.*',
};
