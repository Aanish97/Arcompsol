export const SMTP_EMAIL = process.env.SMTP_EMAIL;
export const SMTP_TOKEN = process.env.SMTP_TOKEN;


export const ROUTES = {
  HOME: "/",
  SERVICES: "#services",
  CAREERS: "/careers",
  ABOUT: "/about",
  LETS_TALK: "#contact-form",
};

export const FOOTER_SECTIONS = [
  {
    heading: "Our Services",
    tabs: [
      {
        label: "App Development",
        route: null,
        clickable: false,
      },
      {
        label: "Cloud Solutions",
        route: null,
        clickable: false,
      },
    ],
  },
  {
    heading: "Company",
    tabs: [
      {
        label: "Home",
        route: "/",
        clickable: true,
      },
      {
        label: "Careers",
        route: "/careers",
        clickable: true,
      },
      {
        label: "About Us",
        route: "/about",
        clickable: true,
      },
    ],
  },
];

export const COMPANY_SERVICES = []


export const FOOTER_LOCATIONS = [
  {
    location: "UNITED STATES",
    address: "Comming Soon!",
    email: "arcompsol@gmail.com",
  },
  {
    location: "PAKISTAN",
    address: "305 GT road, Near Shalimar Garden, Cantt, Lahore",
    phone: "+92 300 9442848",
    phone2: "+92 320 4487749",
    email: "arcompsol@gmail.com",
  },
];

export const QUALITIES = [
  {
    heading: "Do you have a Passion to learn",
    description:
      "If you have passion to learn new things, we want to hear from you. We look forward for people who has passion for everything they do.",
  },
  {
    heading: "Do you have Confidence to take responsibilities",
    description:
      "We are surrounded with people with full of confidence. So we need it in ton. Or else you will be an odd man out. Take responsibilities to grow.",
  },
  {
    heading: "Do you Empathy towards others",
    description:
      "Empathy is flowing in us. We onboard people who takes care of fellow human, it could be your colleague or your customer.",
  },
];

export const VALUES = [
  {
    heading: "High Integrity",
    description:
      "We do the right thing even when it's the harder option, and especially when no one's looking.",
  },
  {
    heading: "Low Ego",
    description:
      "Improving global outcomes is our top priority at work, and it is also the foundation for individual success.",
  },
  {
    heading: "Candor with Empathy",
    description:
      "We say what we mean, directly, candidly, and sincerely, but always with empathy and respect.",
  },
  {
    heading: "Ownership",
    description:
      "We do the right thing even when it's the harder option, and especially when no one's looking.",
  },
  {
    heading: "Commitment",
    description:
      "Improving global outcomes is our top priority at work, and it is also the foundation for individual success.",
  },
];

export const BENEFITS = [
  {
    benefit: "Bi-Annual Dinner", 
    description: "Working day after day on projects In a remote environment can make you feel left out, but we at Arcompsol do plan bi-annual dinners for a refreshing eve with our colleagues.",
  },
  {
    benefit: "Remote Work", 
    description: "Work from the ease of your home, enjoy time with family, and avoid the hectic traffic.",
  },
  {
    benefit: "Market Competitive Salaries", 
    description: "With inflation sky-high these days, Arcompsol believes in keeping care of its employees by having market-competitive salaries.",
  },
  {
    benefit: "Flexible Working hours", 
    description: "Arcompsol understands the importance of family and the pleasure of working on your own time, and that it gives you the flexibility to enjoy with family more and more.",
  },
  {
    benefit: "Location",
    description:
      "We have a distributed team, with Cleta working across the country. Those located in the Bay Area love our sunny, beautiful SoMa office. In addition to catered lunches, our kitchen is perennially stocked with snacks and drinks. Special requests welcome!",
  },
  {
    benefit: " Health & Wellness",
    description:
      "* 100% employer-paid medical coverage and 99% employer-paid dental and vision coverage for you and all your dependents.FSAs available too.\n* $60 per month for however you prefer to stay in shape.",
  },
  
];


export const getEmailContent = (name: string, mobile: string, body: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f6f6f6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #333333;
        }
        p {
            margin-bottom: 10px;
            line-height: 1.5;
        }
        strong {
            font-weight: bold;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h3><strong>Name:</strong> ${name}</h3>
        <h3><strong>Mobile:</strong> ${mobile}</h3>
        
        <h3>Message:</h3>
        <p>${body}</p>
        
        <p>Thank you for your interest!</p>
    </div>
    </body>
    </html>
    `
}