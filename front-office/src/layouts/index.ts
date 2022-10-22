import { BaseLayout } from './Base/Base.layout';

export type Layouts = 'base';

export type LayoutsInterface = {
  [key in Layouts]: () => JSX.Element;
};

export const LAYOUTS: LayoutsInterface = {
  base: BaseLayout,
};

export { BaseLayout };
