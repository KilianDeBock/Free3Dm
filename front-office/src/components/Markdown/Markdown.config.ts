import { ListComponent } from './components/List/List.component';
import remarkGfm from 'remark-gfm';
import { LinkComponent } from '../Link/Link.component';

// Plugins used in markdown conversion
export const remarkPlugins = [remarkGfm];

// Components used in markdown conversion (html tag to react component)
export const components = {
  ol: ListComponent,
  ul: ListComponent,
  a: ({ ...props }) =>
    LinkComponent({
      href: true,
      text: true,
      link: props.href,
      children: props.children,
    }),
};
