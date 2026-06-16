import { generateRoundIcon } from '@/lib/generate-round-icon';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default async function Icon() {
  return generateRoundIcon(64);
}