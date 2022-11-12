import { AppContextType } from '../../contexts';
import {
  _FilamentsBottomBanner,
  _PrintersBottomBanner,
  _ResinBottomBanner,
  _ToysBottomBanner,
} from '@content/main/footer';

export const setFooterInfoFromCategory = (
  app: AppContextType,
  category: string
): void => {
  switch (category) {
    case 'Filaments':
      return app?.setFooterInfoText(_FilamentsBottomBanner);
    case '3D Printers':
      return app?.setFooterInfoText(_PrintersBottomBanner);
    case 'Resin':
      return app?.setFooterInfoText(_ResinBottomBanner);
    case 'Toys':
      return app?.setFooterInfoText(_ToysBottomBanner);
    default:
      break;
  }
};
