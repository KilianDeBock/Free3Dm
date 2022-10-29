import { generate } from './utils';

generate('pages', '../content/pages', { prefix: '_', suffix: 'Page' });
generate('main/header', '../content/main/header', { prefix: '_' });
generate('main/footer', '../content/main/footer', { prefix: '_' });
generate('buttons', '../content/buttons', { prefix: '_' });
generate('products', '../content/products', { prefix: '_' });
generate('reviews', '../content/reviews', { prefix: '_' });
