import { generate } from './utils';

generate('pages', '../content/pages', { prefix: '_', suffix: 'Page' });
generate('buttons', '../content/buttons', { prefix: '_' });
generate('products', '../content/products', { prefix: '_' });
generate('reviews', '../content/reviews', { prefix: '_' });
generate('tutorial', '../content/tutorial', { prefix: '_' });
generate('errors', '../content/error messages', { prefix: '_' });
generate('dialogs', '../content/dialog text', { prefix: '_' });

generate('main/header', '../content/main/header', { prefix: '_' });
generate('main/footer', '../content/main/footer', { prefix: '_' });
generate('main/promos', '../content/main/top of page promo banner', {
  prefix: '_',
});
