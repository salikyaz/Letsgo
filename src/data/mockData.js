// Mock data for Hims clone

export const services = [
  'Lets Go Lean',
  'Lets Go Sexual Health',
  'Lets Go Peptide',
  'Lets Go Revive',
  'Lets Go Energize',
  'Lets Go Hair',
  'Lets Go Alpha'
];



export const productCategories = [
  {
    id: 'weight-loss',
    title: 'Lose weight',
    defaultImage: '/Images/weightLoss-1.jpeg',
    hoverImage: '/Images/weightloss-2.jpeg',
    link: '/weight-loss'
  },
  {
    id: 'better-sex',
    title: 'Have better sex',
    defaultImage: '/Images/betterSex-1.jpeg',
    hoverImage: '/Images/betterSex-2.jpeg',
    link: '/sexual-health'
  },
  {
    id: 'lab-testing',
    title: 'Test for what matters',
    defaultImage: 'https://images.unsplash.com/photo-1715442405524-f668a3cb6cb4?w=600&h=600&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1715442405505-e53ddb9f7d26?w=600&h=600&fit=crop',
    link: '/labs'
  },
  {
    id: 'hair-regrowth',
    title: 'Regrow hair',
    defaultImage: '/Images/RegrowHair-1.jpeg',
    hoverImage: '/Images/RegrowHair-2.jpeg',
    link: '/hair-loss'
  },
  {
    id: 'testosterone',
    title: 'Boost testosterone',
    defaultImage: 'https://images.unsplash.com/photo-1631390179406-0bfe17e9f89d?w=600&h=600&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1631390179406-0bfe17e9f89d?w=600&h=600&fit=crop',
    link: '/testosterone'
  },
  {
    id: 'mental-health',
    title: 'Tackle anxiety',
    defaultImage: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=600&h=600&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=600&h=600&fit=crop',
    link: '/mental-health'
  },
  {
    id: 'skin-care',
    title: 'Get smooth skin',
    defaultImage: 'https://images.unsplash.com/photo-1613803745799-ba6c10aace85?w=600&h=600&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1613803745799-ba6c10aace85?w=600&h=600&fit=crop',
    link: '/skin-care'
  }
];

export const trustPoints = [
  {
    id: 1,
    title: 'Care that fits your schedule',
    description: 'No in-person visits needed. Manage treatment and get ongoing support in the app.',
    image: 'https://images.unsplash.com/photo-1467453678174-768ec283a940?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Prescribed by licensed providers',
    description: 'Free consultations and ongoing support from licensed providers in all 50 states and DC.',
    image: 'https://images.unsplash.com/photo-1712599982295-1ecff6059a57?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Doctor-trusted ingredients',
    description: 'Personalized treatments formulated just for you.',
    image: 'https://images.unsplash.com/photo-1622147459102-8a0f3727e4c4?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'FDA-regulated pharmacies',
    description: 'Medication filled by U.S.-based pharmacies, with free shipping to your door.',
    image: 'https://images.unsplash.com/photo-1631390179406-0bfe17e9f89d?w=800&h=600&fit=crop'
  }
];

export const biomarkers = [
  { category: 'Heart', markers: ['Non-HDL Cholesterol', 'LDL Cholesterol', 'HDL Cholesterol', 'Apolipoprotein B'] },
  { category: 'Glucose Metabolism', markers: ['Hemoglobin A1c', 'Fasting Insulin', 'Uric Acid'] },
  { category: 'Hormones', markers: ['Estradiol', 'Luteinizing Hormone', 'Follicle Stimulating Hormone', 'SHBG'] },
  { category: 'Inflammation & Stress', markers: ['DHEA-Sulfate', 'Cortisol'] },
  { category: 'Thyroid', markers: ['Thyroid-Stimulating Hormone', 'Thyroxine (T4)', 'Free Triiodothyronine (T3)'] },
  { category: 'Kidney', markers: ['Blood Urea Nitrogen', 'BUN/Creatinine Ratio', 'Creatinine'] },
  { category: 'Liver', markers: ['Alanine Transaminase', 'Albumin', 'Alkaline Phosphatase', 'Total Protein'] },
  { category: 'Immune Defense', markers: ['Basophils', 'Lymphocytes', 'White Blood Cell Count', 'Eosinophils'] },
  { category: 'Nutrients', markers: ['Vitamin D', 'Potassium', 'Homocysteine', 'Iron', 'Sodium', 'Magnesium'] },
  { category: 'Blood', markers: ['Platelet Count', 'Hematocrit', 'Hemoglobin', 'Red Blood Cell Count'] }
];

export const weightLossFeatures = [
  {
    title: 'Moving in the right direction',
    description: 'Get a personalized weight loss plan designed with one goal in mind: helping you feel happy in your body.',
    cta: 'Get results'
  },
  {
    title: 'Eat healthy, get strong',
    description: 'Find nutritional, protein-packed recipes in the LetsGoMedicine  app, to help you maintain muscle mass.',
    cta: 'Get started',
    image: 'https://images.unsplash.com/photo-1467453678174-768ec283a940?w=800&h=600&fit=crop'
  },
  {
    title: "It's more than a plan, it's personal",
    description: "A provider licensed in your state will review your information, so that they can combine guidance on nutrition, activity, sleep, and more into a plan designed around your body's needs.",
    cta: 'Get started'
  }
];

export const hairLossInfo = {
  hero: {
    title: 'How Let’s Go Hair Transforms You',
    subtitle: 'Clinically proven solutions to fight hair loss',
    description: 'Say goodbye to thinning hair and hello to a fuller, healthier hair with Let’s Go Hair! Our cutting-edge hair restoration program combines proven treatments like Finasteride and Minoxidil to address hair loss at its root cause. Under the guidance of licensed professionals, you’ll experience personalized care designed to rejuvenate your hair and revitalize your confidence. With Let’s Go Hair, it’s more than treatment—it’s transformation.',
    cta: 'Get started'
  },
  treatments: [
    {
      name: 'Finasteride',
      description: 'FDA-approved oral medication that blocks DHT, the hormone responsible for hair loss.',
      effectiveness: '90% of men maintain or improve hair growth'
    },
    {
      name: 'Minoxidil',
      description: 'Topical solution that stimulates hair follicles and increases blood flow to the scalp.',
      effectiveness: 'Visible results in 4-6 months'
    },
    {
      name: 'Custom formulations',
      description: 'Personalized combinations designed specifically for your hair loss needs.',
      effectiveness: 'Tailored to your specific condition'
    }
  ],
  howItWorks: [
    { step: 1, title: 'Initial Consultation', description: 'To get started, complete the online form with your personal and medical details, and then pay the initial consultation fee of $159' },
    { step: 2, title: 'Customized Plan', description: 'Based on your needs, we develop a personalized treatment plan tailored to your objectives.' },
    { step: 3, title: 'Advanced Treatment', description: 'Receive your treatment using the latest medical techniques for effective results.' },
    { step: 4, title: 'Follow-Up and Support', description: 'Benefit from ongoing support and follow-up to ensure continued success and optimal health.' }
  ]
};