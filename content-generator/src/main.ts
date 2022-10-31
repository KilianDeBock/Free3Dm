import { generate } from './utils';

generate(
  // Generate pages
  'pages',
  '../content/pages',
  { prefix: '_', suffix: 'Page' },
);

generate(
  // Generate buttons
  'buttons',
  '../content/buttons',
  { prefix: '_', suffix: 'Button' },
);

generate(
  // Generate Products
  'products',
  '../content/products',
  { prefix: '_' },
);

generate(
  // Generate reviews
  'reviews',
  '../content/reviews',
  { prefix: '_' },
);

generate(
  // Generate tutorial
  'tutorial',
  '../content/tutorial',
  { prefix: '_' },
);

generate(
  // Generate errors
  'errors',
  '../content/error messages',
  { prefix: '_' },
);

generate(
  // Generate dialogs
  'dialogs',
  '../content/dialog text',
  { prefix: '_' },
);

generate(
  // Generate header
  'main/header',
  '../content/main/header',
  { prefix: '_' },
);

generate(
  // Generate footer
  'main/footer',
  '../content/main/footer',
  { prefix: '_' },
);

generate(
  // Generate promos
  'main/promos',
  '../content/main/top of page promo banner',
  { prefix: '_' },
);
