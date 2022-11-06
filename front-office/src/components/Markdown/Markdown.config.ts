import { ListComponent } from './components/List/List.component';
import remarkGfm from 'remark-gfm';

// Plugins used in markdown conversion
export const remarkPlugins = [remarkGfm];

// Components used in markdown conversion (html tag to react component)
export const components = {
  ol: ListComponent,
  ul: ListComponent,
};
