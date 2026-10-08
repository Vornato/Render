'use strict';
(() => {
  const ge = {
    "Website design":"ვებსაიტების დიზაინი",
    "Websites, branding, video, and marketing that work together. We turn your ideas into a clear identity, compelling content, and a stronger online presence.":"ვებსაიტები, ბრენდინგი, ვიდეო და მარკეტინგი - ერთიანი ხედვით. ვქმნით შენი ბრენდის ვიზუალურ სახეს, საინტერესო კონტენტს და ვაძლიერებთ მის ციფრულ კომუნიკაციას.",
    "From your visual identity and website to the content and campaigns that bring them to life. We connect design, development, and marketing around one clear direction.":"ბრენდის ვიზუალური იდენტობიდან და ვებსაიტიდან კონტენტამდე და კამპანიებამდე. დიზაინს, ვებდეველოპმენტსა და მარკეტინგს ერთი მკაფიო მიმართულებით ვაერთიანებთ.",
    "Render Studio is a creative and marketing partner for brands ready to build a stronger presence. We connect brand identity, websites, video, social content, and campaigns in one creative process.":"Render Studio კრეატიული და მარკეტინგული პარტნიორია ბრენდებისთვის, რომლებსაც უფრო ძლიერი პოზიციის შექმნა სურთ. ბრენდის იდენტობას, ვებსაიტებს, ვიდეოს, სოციალურ კონტენტსა და კამპანიებს ერთ შემოქმედებით პროცესში ვაერთიანებთ.",
    "Render Studio creates websites, brand identities, videos, and campaigns. Explore our design, development, and marketing services and start your project on WhatsApp.":"Render Studio ქმნის ვებსაიტებს, ბრენდის ვიზუალურ იდენტობას, ვიდეოებსა და კამპანიებს. გაეცანი დიზაინის, ვებდეველოპმენტისა და მარკეტინგის სერვისებს და დაგვიკავშირდი WhatsApp-ზე.",
    "Website design & development":"ვებსაიტების შექმნა",
    "Websites":"ვებსაიტები",
    "A website that feels like your brand and makes the next step clear. From a focused landing page to a complete business website.":"ვებსაიტი, რომელიც შენი ბრენდის ხასიათს ასახავს და მომხმარებელს გზას უმარტივებს - ერთი გვერდიდან ბიზნესის სრულ ვებსაიტამდე.",
    "Custom website and landing-page design":"ვებსაიტებისა და ლენდინგების ინდივიდუალური დიზაინი",
    "Responsive development for mobile and desktop":"მობილურსა და კომპიუტერზე მორგებული ვებსაიტები",
    "Contact forms and clear calls to action":"საკონტაქტო ფორმები და მარტივი ნავიგაცია",
    "Website launch and handover":"ვებსაიტის გაშვება და გადაბარება",
    "Brand identity & design":"ბრენდის ვიზუალური იდენტობა",
    "Brand identity":"ვიზუალური იდენტობა",
    "Give your brand a distinctive, consistent look. We connect your logo, colors, typography, and everyday visuals into one recognizable identity.":"შექმენი შენი ბრენდის გამორჩეული და თანმიმდევრული ვიზუალური სახე. ლოგოს, ფერებს, ტიპოგრაფიასა და ყოველდღიურ მასალებს ერთიან იდენტობად ვაქცევთ.",
    "Logo design and brand refreshes":"ლოგოს დიზაინი და ბრენდის განახლება",
    "Color palettes and typography":"ფერების პალიტრა და ტიპოგრაფია",
    "Social templates and branded materials":"სოციალური მედიის შაბლონები და ბრენდირებული მასალები",
    "Brand guidelines for a consistent look":"ბრენდის ვიზუალური სტილის სახელმძღვანელო",
    'Play background':'ფონის ჩართვა', 'Pause background':'ფონის შეჩერება', 'Play background animation':'ფონის ვიდეოს ჩართვა', 'Pause background animation':'ფონის ვიდეოს შეჩერება',
    'Skip to content':'შინაარსზე გადასვლა', 'Menu':'მენიუ', 'Services':'სერვისები', 'Work':'ნამუშევრები', 'Studio':'სტუდიო', 'Contact':'კონტაქტი', 'Start a project':'დავიწყოთ პროექტი',
    'SCROLL TO EXPLORE':'გადაახვიე და აღმოაჩინე', 'CREATIVE STUDIO / MARKETING PARTNER':'კრეატიული სტუდიო / მარკეტინგული პარტნიორი', 'Make your':'შენი ბრენდი', 'brand':'', 'move.':'აამოძრავე.',
    'Video, motion, and marketing that work together. We turn your ideas into a clear identity, compelling content, and your next campaign.':'ვიდეო, ანიმაცია და მარკეტინგი - ერთიანი ხედვით. შენს იდეებს ვაქცევთ მკაფიო იდენტობად, საინტერესო კონტენტად და ახალ კამპანიად.',
    'Explore our services':'ნახე ჩვენი სერვისები', 'View selected work':'ნახე ნამუშევრები', 'THE BIG PICTURE':'ერთიანი ხედვა', 'ONE STUDIO. EVERY PIECE CONNECTED.':'ერთი სტუდიო. ყველა დეტალი დაკავშირებულია.',
    'STRATEGY · CONTENT · GROWTH':'სტრატეგია · კონტენტი · ზრდა', 'Discover the studio':'გაიცანი სტუდიო', 'Video production':'ვიდეოპროდუქცია', 'Motion design':'მოუშენ დიზაინი', 'Social media':'სოციალური მედია', 'Campaign strategy':'კამპანიის სტრატეგია', 'Analytics':'ანალიტიკა',
    '01 / WHAT WE OFFER':'01 / რას გთავაზობთ', 'Every piece.':'ყოველი დეტალი.', 'One clear direction.':'ერთი მიმართულება.',
    'Great content needs a plan. A great plan needs great content. We bring both together, from your first campaign to your ongoing social presence.':'კარგ კონტენტს გეგმა სჭირდება, კარგ გეგმას კი - ძლიერი კონტენტი. ორივეს ვაერთიანებთ: პირველი კამპანიიდან სოციალური მედიის ყოველდღიურ მართვამდე.',
    'Video creation':'ვიდეოს შექმნა', 'Give your brand a story people want to watch. From short social edits to a complete brand film.':'შექმენი ბრენდის ისტორია, რომლის ყურებაც ადამიანებს მოუნდებათ - მოკლე სოციალური ვიდეოდან სრულფასოვან ბრენდულ ფილმამდე.',
    'What’s included':'რას მოიცავს', 'Creative concepts and scripts':'კრეატიული კონცეფციები და სცენარები', 'Filming and video editing':'გადაღება და ვიდეომონტაჟი', 'Reels, shorts and ad cutdowns':'რილსები, მოკლე ვიდეოები და სარეკლამო ვერსიები', 'Color grading and sound design':'ფერის კორექცია და ხმის დიზაინი',
    'Make your identity move. Animation that explains an idea, launches a product or stops the scroll.':'აამოძრავე შენი ბრენდის იდენტობა. ანიმაცია, რომელიც ხსნის იდეას, წარადგენს პროდუქტს და ყურადღებას იპყრობს.',
    'Logo and brand animation':'ლოგოსა და ბრენდის ანიმაცია', '2D motion graphics':'2D მოუშენ გრაფიკა', 'Product explainers':'პროდუქტის ახსნითი ვიდეოები', 'Animated social and ad assets':'ანიმაციური მასალები სოციალური მედიისა და რეკლამისთვის',
    'Social media & posting':'სოციალური მედიის მართვა', 'A consistent presence without the daily scramble. Thoughtful content, planned and published.':'თანმიმდევრული კომუნიკაცია ყოველდღიური ქაოსის გარეშე. გააზრებული კონტენტი - დაგეგმილი, შექმნილი და გამოქვეყნებული.',
    'Content calendars and planning':'კონტენტკალენდარი და დაგეგმვა', 'Captions and post design':'ტექსტები და პოსტების დიზაინი', 'Scheduling and publishing':'გამოქვეყნების დაგეგმვა და პოსტინგი', 'Community management':'აუდიტორიასთან კომუნიკაცია',
    'Brand & creative strategy':'ბრენდის სტრატეგია', 'Know what to say, who to reach and how to stand out. A direction that keeps every channel connected.':'იცოდე, რა თქვა, ვის მიმართო და როგორ გამოირჩეოდე. ერთიანი მიმართულება, რომელიც ყველა საკომუნიკაციო არხს აკავშირებს.',
    'Audience and competitor research':'აუდიტორიისა და კონკურენტების კვლევა', 'Brand positioning and messaging':'ბრენდის პოზიციონირება და საკვანძო გზავნილები', 'Visual direction and campaign concepts':'ვიზუალური მიმართულება და კამპანიის კონცეფციები', 'Channel and launch planning':'არხებისა და გაშვების დაგეგმვა',
    'Paid campaigns':'ფასიანი კამპანიები', 'Put the right creative in front of the right people. Campaigns built around a clear business goal.':'აჩვენე შესაბამისი კრეატიული მასალა შესაბამის აუდიტორიას. კამპანიები, რომლებიც კონკრეტულ ბიზნესმიზანს ემსახურება.',
    'Meta and Google campaign planning':'Meta-სა და Google-ის კამპანიების დაგეგმვა', 'Audience and creative testing':'აუდიტორიისა და კრეატიული მასალების ტესტირება', 'Ad asset creation':'სარეკლამო მასალების შექმნა', 'Ongoing campaign optimization':'კამპანიის მუდმივი ოპტიმიზაცია',
    'Analytics & reporting':'ანალიტიკა და ანგარიშგება', 'Understand what’s working and what comes next. Clear reporting that helps you make decisions.':'გაიგე, რა მუშაობს და რა უნდა გააკეთო შემდეგ. გასაგები ანგარიშები, რომლებიც გადაწყვეტილებების მიღებაში გეხმარება.',
    'Performance measurement plans':'შედეგების გაზომვის გეგმა', 'Social and campaign reporting':'სოციალური მედიისა და კამპანიების ანგარიშები', 'Content and channel analysis':'კონტენტისა და არხების ანალიზი', 'Practical next-step recommendations':'პრაქტიკული რეკომენდაციები შემდეგი ნაბიჯებისთვის',
    'A single project or an ongoing creative partnership.':'ერთი პროექტი ან გრძელვადიანი კრეატიული პარტნიორობა.', 'Let’s find your starting point':'ერთად ვიპოვოთ საწყისი ნაბიჯი',
    '02 / SELECTED WORK':'02 / ნამუშევრები', 'A feel for':'ნახე, რას', 'what we create.':'ვქმნით.',
    'A look inside our creative world. These studio concepts explore how a simple idea can become a moving identity, a piece of content or a campaign direction.':'შეხედე ჩვენს კრეატიულ სამყაროს. სტუდიის ეს კონცეფციები გვაჩვენებს, როგორ იქცევა მარტივი იდეა მოძრავ იდენტობად, კონტენტად ან კამპანიის მიმართულებად.',
    'All concepts':'ყველა კონცეფცია', 'Video & motion':'ვიდეო და ანიმაცია', 'Brand & strategy':'ბრენდი და სტრატეგია', 'STUDIO CONCEPT':'სტუდიის კონცეფცია', 'Play motion study':'ანიმაციის ნახვა', 'Pause motion study':'ანიმაციის შეჩერება', 'Video unavailable':'ვიდეო მიუწვდომელია',
    'IDENTITY / MOTION DESIGN':'იდენტობა / მოუშენ დიზაინი', 'Identity in motion.':'იდენტობა მოძრაობაში.', 'Explore concept':'ნახე კონცეფცია', 'CONTENT / CREATIVE DIRECTION':'კონტენტი / კრეატიული მიმართულება', 'Content, built to connect.':'კონტენტი, რომელიც გვაკავშირებს.', 'STRATEGY / CAMPAIGN DIRECTION':'სტრატეგია / კამპანიის მიმართულება', 'A strategy with direction.':'სტრატეგია მკაფიო მიმართულებით.',
    'THE STUDIO, PIECE BY PIECE.':'სტუდიო - დეტალებში.', '03 / ABOUT RENDER':'03 / RENDER-ის შესახებ', 'Small details.':'პატარა დეტალები.', 'Big picture.':'ერთიანი ხედვა.',
    'We connect creative thinking with practical marketing.':'კრეატიულ აზროვნებას პრაქტიკულ მარკეტინგთან ვაკავშირებთ.',
    'Render Studio is a creative and marketing partner for brands ready to build a stronger presence. We bring video, design, social content and performance thinking into one connected process.':'Render Studio კრეატიული და მარკეტინგული პარტნიორია ბრენდებისთვის, რომლებსაც უფრო ძლიერი პოზიციის შექმნა სურთ. ვიდეოს, დიზაინს, სოციალურ კონტენტსა და შედეგებზე ორიენტირებულ მიდგომას ერთ პროცესში ვაერთიანებთ.',
    'Whether you need a launch film, a month of content or a complete campaign, we start by understanding your business. Then we build the pieces around a clear direction.':'გჭირდება ახალი პროდუქტის ვიდეო, თვის კონტენტი თუ სრული კამპანია - ჯერ შენს ბიზნესს ვეცნობით. შემდეგ კი ყველა ნაწილს მკაფიო მიმართულების გარშემო ვაწყობთ.',
    'Clarity first':'ჯერ სიცხადე', 'A clear goal, a clear scope and a shared direction.':'მკაფიო მიზანი, შეთანხმებული მოცულობა და საერთო მიმართულება.', 'Built together':'ერთად ვქმნით', 'Your knowledge of your business. Our creative perspective.':'შენი ბიზნესის ცოდნა და ჩვენი კრეატიული ხედვა.', 'Always learning':'ყოველთვის ვსწავლობთ', 'Every project gives us a better starting point for the next.':'ყოველი პროექტი მომდევნო ნაბიჯისთვის უკეთეს საფუძველს გვაძლევს.',
    '04 / HOW WE WORK':'04 / როგორ ვმუშაობთ', 'From “what if”':'იდეიდან', 'to what’s next.':'შემდეგ ნაბიჯამდე.',
    'You always know where the project stands. We agree on the direction, create the work, refine it together and learn from the response.':'ყოველთვის იცი, რა ეტაპზეა პროექტი. ვთანხმდებით მიმართულებაზე, ვქმნით, ერთად ვხვეწთ და მიღებული შედეგებით ვსწავლობთ.',
    'Understand':'გავიგოთ საჭიროება', 'We talk through your brand, audience, goals and what you need.':'ვიცნობთ შენს ბრენდს, აუდიტორიას, მიზნებსა და საჭიროებებს.', 'Build the direction':'შევქმნათ მიმართულება', 'You get a creative plan, deliverables and a timeline before production starts.':'წარმოების დაწყებამდე გაწვდით კრეატიულ გეგმას, მასალების ჩამონათვალსა და ვადებს.', 'Create & refine':'შევქმნათ და დავხვეწოთ', 'We make the work, share it with you and bring your feedback into the final version.':'ვქმნით მასალებს, გიზიარებთ და შენს უკუკავშირს საბოლოო ვერსიაში ვითვალისწინებთ.', 'Launch & learn':'გავუშვათ და ვისწავლოთ', 'We deliver or publish, review the response and plan the next move.':'გაბარებთ ან ვაქვეყნებთ მასალებს, ვაანალიზებთ შედეგს და ვგეგმავთ შემდეგ ნაბიჯს.',
    'A few things':'რამდენიმე კითხვა,', 'you might be wondering.':'რომელიც შეიძლება გაგიჩნდეს.',
    'Can we start with just one video?':'შეგვიძლია მხოლოდ ერთი ვიდეოთი დავიწყოთ?', 'Yes. We can start with one defined project or build an ongoing partnership around your content and marketing needs.':'დიახ. შეგვიძლია დავიწყოთ ერთი კონკრეტული პროექტით ან შენი კონტენტისა და მარკეტინგის საჭიროებებზე გრძელვადიანი პარტნიორობა ავაწყოთ.',
    'Can you manage our social media too?':'სოციალური მედიის მართვაც შეგიძლიათ?', 'Yes. We can plan content, create the assets, write captions, schedule posts and review performance. We agree on the channels and responsibilities before starting.':'დიახ. ვგეგმავთ კონტენტს, ვქმნით მასალებსა და ტექსტებს, ვაქვეყნებთ პოსტებს და ვაანალიზებთ შედეგებს. დაწყებამდე ვთანხმდებით არხებსა და პასუხისმგებლობებზე.',
    'How do you price a project?':'როგორ განისაზღვრება პროექტის ფასი?', 'Pricing depends on the scope, production requirements and timeline. Send us a short brief and we’ll discuss the deliverables and prepare a tailored proposal.':'ფასი დამოკიდებულია სამუშაოს მოცულობაზე, წარმოების საჭიროებებსა და ვადებზე. გამოგვიგზავნე მოკლე აღწერა და მასალების შეთანხმების შემდეგ ინდივიდუალურ შეთავაზებას მოვამზადებთ.',
    'What do you need from us to get started?':'რა გჭირდებათ ჩვენგან დასაწყებად?', 'Your brand name, a little context about your business, the goal of the project and any timing requirements. If you have brand assets or references, we’d love to see those too.':'ბრენდის სახელი, მოკლე ინფორმაცია ბიზნესზე, პროექტის მიზანი და სასურველი ვადები. თუ გაქვს ბრენდის მასალები ან ვიზუალური მაგალითები, სიამოვნებით გავეცნობით მათაც.',
    '05 / LET’S TALK':'05 / დაგვიკავშირდი', 'Your next move':'შენი შემდეგი ნაბიჯი', 'starts':'იწყება', 'here.':'აქ.', 'Tell us what you’re working on.':'მოგვიყევი, რაზე მუშაობ.', 'We’ll help you find a clear way forward.':'ერთად ვიპოვოთ სწორი მიმართულება.',
    'Prefer email?':'გირჩევნია ელფოსტა?', 'Chat on WhatsApp':'მოგვწერე WhatsApp-ზე', 'A quick question or a complete brief.':'მოკლე კითხვა ან პროექტის სრული აღწერა.', 'We’re happy to start with either.':'საუბარი ნებისმიერი მათგანით შეგვიძლია დავიწყოთ.',
    'A little about your project.':'ცოტა რამ შენი პროექტის შესახებ.', 'Build your brief below and send it to us on WhatsApp.':'შეავსე პროექტის აღწერა და WhatsApp-ზე გამოგვიგზავნე.', 'Your name':'შენი სახელი', 'Brand / company':'ბრენდი / კომპანია', 'What can we help with?':'რაში შეგვიძლია დაგეხმაროთ?', 'Select any that fit.':'აირჩიე სასურველი სერვისები.', 'Brand strategy':'ბრენდის სტრატეგია', 'Tell us about the idea':'მოგვიყევი იდეის შესახებ', 'Continue to WhatsApp':'WhatsApp-ზე გადასვლა', 'Opens WhatsApp with your brief. You review it and tap Send.':'WhatsApp გაიხსნება შენი აღწერით. გადახედე ტექსტს და დააჭირე გაგზავნას.',
    'Creative thinking.':'კრეატიული აზროვნება.', 'A clear direction.':'მკაფიო მიმართულება.', 'Back to top':'დასაწყისში დაბრუნება', 'Pause site motion':'ანიმაციის შეჩერება', 'Resume site motion':'ანიმაციის ჩართვა', 'Reduced motion enabled':'მინიმალური ანიმაცია ჩართულია', 'Close':'დახურვა', 'RENDER STUDIO / CONCEPT EXPLORATION':'RENDER STUDIO / კონცეფციის კვლევა', 'Create something like this':'შევქმნათ მსგავსი პროექტი',
    'What’s your name?':'როგორ მოგმართოთ?', 'Studio capabilities':'სტუდიის სერვისები', 'Website language':'საიტის ენა', 'Who are we creating for?':'ვისთვის ვქმნით?', 'Your goal, the deliverables you have in mind, and any timing requirements…':'პროექტის მიზანი, სასურველი მასალები და ვადები…',
    'Render Studio home':'Render Studio - მთავარი', 'Main navigation':'მთავარი ნავიგაცია', 'Page scroll control':'გვერდის გადახვევის მართვა', 'Page scroll progress':'გვერდის გადახვევის პროგრესი', 'Filter portfolio':'ნამუშევრების გაფილტვრა', 'Explore the Content, built to connect studio concept':'იხილე სტუდიის კონცეფცია: კონტენტი, რომელიც გვაკავშირებს', 'Explore the A strategy with direction studio concept':'იხილე სტუდიის კონცეფცია: სტრატეგია მკაფიო მიმართულებით', 'Contact Render Studio on WhatsApp':'დაუკავშირდი Render Studio-ს WhatsApp-ზე', 'Close concept details':'კონცეფციის დეტალების დახურვა',
    'Charcoal and gray pixel architecture with a red cube, the visual identity of Render Studio':'მუქი და ნაცრისფერი პიქსელური არქიტექტურა წითელი კუბით - Render Studio-ს ვიზუალური იდენტობა', 'A pixel-built studio camera and framed images in gray with a floating red block':'ნაცრისფერი პიქსელური კამერა და ჩარჩოები წითელი ბლოკით', 'A staircase of gray pixel blocks with one red cube at the top':'ნაცრისფერი პიქსელური საფეხურები წითელი კუბით მწვერვალზე', 'A modular creative workspace with a strategic planning board in the studio’s pixel style':'მოდულური კრეატიული სივრცე და სტრატეგიული დაფა სტუდიის პიქსელურ სტილში',
    'A geometric pixel camera and framed artwork with a muted red accent':'გეომეტრიული პიქსელური კამერა და ჩარჩოები წითელი აქცენტით', 'Ascending gray block steps with a muted red block at the top':'აღმავალი ნაცრისფერი საფეხურები წითელი ბლოკით',
    'A studio exploration of a content-production world built from our square-grid identity. The camera, framed images and red focal point bring a shared visual language to a collection of social assets. A real project could carry this direction through videos, post design and a planned content calendar.':'სტუდიის კონცეფცია, რომელიც კონტენტის შექმნის სამყაროს ჩვენი კვადრატული იდენტობით წარმოგვიდგენს. კამერა, ჩარჩოები და წითელი აქცენტი სოციალურ მასალებს ერთიან ვიზუალურ ენას აძლევს. რეალურ პროექტში ეს მიმართულება შეიძლება გაგრძელდეს ვიდეოებით, პოსტების დიზაინითა და კონტენტკალენდრით.',
    'A studio exploration of how a brand can visualize progress without overcomplicating the message. A simple staircase and one red focal point form a clear campaign idea. A real project would begin with an audience, a measurable goal and a creative testing plan.':'სტუდიის კონცეფცია იმის შესახებ, თუ როგორ აჩვენოს ბრენდმა პროგრესი მარტივი გზავნილით. საფეხურები და ერთი წითელი აქცენტი კამპანიის მკაფიო იდეას ქმნის. რეალურ პროექტს დავიწყებდით აუდიტორიის განსაზღვრით, გაზომვადი მიზნითა და კრეატიული ტესტირების გეგმით.',
    'Creative direction':'კრეატიული მიმართულება', 'Social content':'სოციალური კონტენტი', 'Campaign concept':'კამპანიის კონცეფცია', 'Performance thinking':'შედეგებზე ორიენტირებული მიდგომა',
    'Please add your name and a little more detail about your project.':'მიუთითე სახელი და პროექტი ცოტა უფრო დეტალურად აღწერე.', 'Open your brief in WhatsApp':'გახსენი პროექტის აღწერა WhatsApp-ში', 'Your brief is ready to review and send.':'პროექტის აღწერა მზადაა გადასახედად და გასაგზავნად.',
    "Hi Render Studio! I'd like to discuss a project.":'გამარჯობა, Render Studio! მსურს პროექტის განხილვა.',
    'Render Studio - Creative that moves your brand':'Render Studio - კრეატივი, რომელიც შენს ბრენდს აამოძრავებს',
    'Render Studio brings together video production, motion design, social media management, campaign strategy and analytics. Start your next project on WhatsApp.':'Render Studio აერთიანებს ვიდეოპროდუქციას, მოუშენ დიზაინს, სოციალური მედიის მართვას, კამპანიის სტრატეგიასა და ანალიტიკას. დაგვიკავშირდი WhatsApp-ზე.'
  };
  let language='en';
  try {const query=new URLSearchParams(location.search).get('lang');language=query==='ka'||query==='en'?query:localStorage.getItem('render-language')||'en';} catch {}
  if(language!=='ka')language='en';
  const t=(text)=>language==='ka'&&Object.prototype.hasOwnProperty.call(ge,text)?ge[text]:text;
  const nodes=[];const attributes=[];
  const dynamic='#motion-toggle,.video-label,#filter-status,#form-status,#project-dialog';
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){
    const node=walker.currentNode;const parent=node.parentElement;
    if(!parent||parent.closest('script,style,svg,noscript,.language-switch,'+dynamic))continue;
    const original=node.nodeValue;const key=original.trim();
    if(Object.prototype.hasOwnProperty.call(ge,key))nodes.push({node,original,key});
  }
  document.querySelectorAll('[placeholder],[aria-label],[alt]').forEach(element=>{
    if(element.closest('.language-switch,#project-dialog'))return;
    ['placeholder','aria-label','alt'].forEach(name=>{const original=element.getAttribute(name);if(original&&ge[original])attributes.push({element,name,original});});
  });
  const title=document.title;const description=document.querySelector('meta[name="description"]');const descriptionText=description.content;
  function applyLanguage(next){
    language=next==='ka'?'ka':'en';document.documentElement.lang=language;const url=new URL(location.href);url.searchParams.set('lang',language);try{history.replaceState(null,'',url);}catch{}
    nodes.forEach(({node,original,key})=>{node.nodeValue=language==='ka'?original.replace(key,()=>ge[key]):original;});
    attributes.forEach(({element,name,original})=>element.setAttribute(name,t(original)));
    document.title=t(title);description.content=t(descriptionText);
    document.querySelectorAll('[data-language]').forEach(button=>{const active=button.dataset.language===language;button.setAttribute('aria-pressed',String(active));button.classList.toggle('is-active',active);});
    try{localStorage.setItem('render-language',language);}catch{}
    document.querySelectorAll('input,textarea').forEach(input=>input.setCustomValidity(''));
    window.dispatchEvent(new CustomEvent('render-language-change',{detail:{language}}));
  }
  window.RenderI18n={t,get language(){return language;},setLanguage:applyLanguage};
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>applyLanguage(button.dataset.language)));
  applyLanguage(language);
})();
