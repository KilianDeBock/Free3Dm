import { Detail } from 'backend/dist/details/entities/detail.entity';

export const getDetail = <T>(
  details: Detail[] | undefined,
  key: string
): T | undefined => {
  if (!details) return undefined;
  return details.find(({ key: k }) => k === key)?.value as T | undefined;
};
