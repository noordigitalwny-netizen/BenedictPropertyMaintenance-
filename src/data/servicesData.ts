export interface ServiceItem {
  name: string;
  price?: number;
  priceFormatted: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  badge: string;
  startingPrice: string;
  description: string;
  items: ServiceItem[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'drywall-services',
    title: 'Drywall Services',
    badge: 'Interior Restoration',
    startingPrice: 'Contact for pricing',
    description: 'Expert interior drywall repairs, hole patching, seam taping, textured finishing, and new panel installation.',
    items: [
      { name: 'Drywall Repair', priceFormatted: 'Contact for pricing' },
      { name: 'Drywall Patching', priceFormatted: 'Contact for pricing' },
      { name: 'Drywall Installation', priceFormatted: 'Contact for pricing' },
    ],
  },
  {
    id: 'painting-services',
    title: 'Painting & Staining Services',
    badge: 'Interior & Exterior',
    startingPrice: 'Starting at $75',
    description: 'Professional interior room painting, ceiling refinishing, trim work, doors, and complete exterior home painting.',
    items: [
      { name: 'Door Painting', price: 75, priceFormatted: 'Starting at $75' },
      { name: 'Trim and Baseboards', price: 100, priceFormatted: 'Starting at $100' },
      { name: 'Ceiling Painting', price: 150, priceFormatted: 'Starting at $150' },
      { name: 'Interior Painting', price: 400, priceFormatted: 'Starting at $400' },
      { name: 'Room Painting', price: 400, priceFormatted: 'Starting at $400' },
      { name: 'Exterior Painting', price: 1000, priceFormatted: 'Starting at $1000' },
    ],
  },
  {
    id: 'snow-plowing',
    title: 'Snow Plowing & De-Icing',
    badge: 'Winter Care',
    startingPrice: 'Starting at $30',
    description: 'Reliable winter clearing for driveways, sidewalks, and commercial properties in Western New York.',
    items: [
      { name: 'Residential Plowing', price: 30, priceFormatted: 'Starting at $30' },
      { name: 'Sidewalk Clearing', price: 50, priceFormatted: 'Starting at $50' },
      { name: 'Salting / De-Icing', price: 50, priceFormatted: 'Starting at $50' },
      { name: 'Snow Removal', price: 200, priceFormatted: 'Starting at $200' },
      { name: 'Seasonal Snow Contracts', price: 700, priceFormatted: 'Starting at $700' },
    ],
  },
  {
    id: 'property-maintenance',
    title: 'Property Maintenance & Repairs',
    badge: 'Year-Round Maintenance',
    startingPrice: 'Starting at $150',
    description: 'Comprehensive interior and exterior property upkeep, home repairs, shutter installs, and storm recovery.',
    items: [
      { name: 'Property Maintenance Audit', price: 150, priceFormatted: 'Starting at $150' },
      { name: 'Minor Home Repairs', price: 150, priceFormatted: 'Starting at $150' },
      { name: 'Exterior Repairs', price: 250, priceFormatted: 'Starting at $250' },
      { name: 'Shutter Installation', price: 150, priceFormatted: 'Starting at $150' },
      { name: 'Storm Cleanup', price: 200, priceFormatted: 'Starting at $200' },
    ],
  },
  {
    id: 'pressure-washing',
    title: 'Pressure Washing & Soft Washing',
    badge: 'Exterior Restore',
    startingPrice: 'Starting at $100',
    description: 'Safe, high-pressure and soft washing for siding, driveways, decks, fences, and roofs.',
    items: [
      { name: 'Sidewalk / Walkway Cleaning', price: 100, priceFormatted: 'Starting at $100' },
      { name: 'Driveway Cleaning', price: 150, priceFormatted: 'Starting at $150' },
      { name: 'Fence Cleaning', price: 150, priceFormatted: 'Starting at $150' },
      { name: 'Concrete Cleaning', price: 150, priceFormatted: 'Starting at $150' },
      { name: 'Deck Cleaning', price: 200, priceFormatted: 'Starting at $200' },
      { name: 'House Washing', price: 250, priceFormatted: 'Starting at $250' },
      { name: 'Soft Washing', price: 250, priceFormatted: 'Starting at $250' },
      { name: 'Roof Washing', price: 350, priceFormatted: 'Starting at $350' },
    ],
  },
  {
    id: 'gutter-services',
    title: 'Gutter Services & Repairs',
    badge: 'Water Management',
    startingPrice: 'Starting at $100',
    description: 'Protect your roof and foundation with expert cleaning, seamless repairs, and new installations.',
    items: [
      { name: 'Gutter Cleaning', price: 100, priceFormatted: 'Starting at $100' },
      { name: 'Gutter Repair', price: 250, priceFormatted: 'Starting at $250' },
      { name: 'Gutter Installation / Replacement', price: 750, priceFormatted: 'Starting at $750' },
    ],
  },
  {
    id: 'lawn-landscaping',
    title: 'Lawn & Landscaping Services',
    badge: 'Groundskeeping',
    startingPrice: 'Starting at $50',
    description: 'Manicured lawns, seasonal cleanups, sod installation, mulching, and custom landscaping.',
    items: [
      { name: 'Lawn Mowing', price: 50, priceFormatted: 'Starting at $50' },
      { name: 'Shrub & Hedge Trimming', price: 150, priceFormatted: 'Starting at $150' },
      { name: 'Spring / Fall Cleanup', price: 200, priceFormatted: 'Starting at $200' },
      { name: 'Yard Cleanup', price: 200, priceFormatted: 'Starting at $200' },
      { name: 'Mulching', price: 250, priceFormatted: 'Starting at $250' },
      { name: 'Lawn Seeding', price: 300, priceFormatted: 'Starting at $300' },
      { name: 'Yard Leveling / Topsoil', price: 500, priceFormatted: 'Starting at $500' },
      { name: 'Landscaping Design', price: 500, priceFormatted: 'Starting at $500' },
      { name: 'Sod Installation', price: 1000, priceFormatted: 'Starting at $1000' },
    ],
  },
  {
    id: 'other-services',
    title: 'Specialized & Other Services',
    badge: 'Custom Care',
    startingPrice: 'Starting at $100',
    description: 'Dryer vent cleaning, junk removal, holiday light setup, hauling, and heavy concrete work.',
    items: [
      { name: 'Delivery / Hauling', price: 100, priceFormatted: 'Starting at $100' },
      { name: 'Dryer Vent Cleaning', price: 125, priceFormatted: 'Starting at $125' },
      { name: 'Junk Removal', price: 150, priceFormatted: 'Starting at $150' },
      { name: 'Holiday Light Installation', price: 300, priceFormatted: 'Starting at $300' },
      { name: 'Concrete Work', price: 1000, priceFormatted: 'Starting at $1000' },
    ],
  },
];
