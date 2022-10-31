import { Detail } from 'backend/dist/details/entities/detail.entity';

export const getDetail = <T>(details: Detail[], key: string): T | undefined => {
  return details.find(({ key: k }) => k === key)?.value as T | undefined;
};
