// Direct Vite bundler image imports
// Guarantees all images are processed, fingerprinted, and bundled into dist/assets/ on build,
// working seamlessly in both local development and deployed production environments (Vercel, Netlify, Cloud Run).
import heroLalibelaImg from '../assets/images/hero_ethiopia_lalibela_1791564320721.jpg';
import simienMountainsImg from '../assets/images/tour_simien_mountains_1791564332514.jpg';
import danakilDepressionImg from '../assets/images/tour_danakil_depression_1791564342740.jpg';
import omoValleyImg from '../assets/images/tour_omo_valley_1791564353175.jpg';
import hararJugolImg from '../assets/images/destination_harar_jugol_1791564363559.jpg';
import lakeTanaImg from '../assets/images/destination_lake_tana_1791564373066.jpg';
import nationalPalaceImg from '../assets/images/destination_addis_national_palace_1791567534648.jpg';
import localLogoImg from '../assets/images/logo.jpg';

export const IMAGES = {
  lalibela: heroLalibelaImg,
  simien: simienMountainsImg,
  danakil: danakilDepressionImg,
  omo: omoValleyImg,
  harar: hararJugolImg,
  lakeTana: lakeTanaImg,
  nationalPalace: nationalPalaceImg,
  logoUrl: 'https://cdn.corenexis.com/f/EoGd50KcGEa.jpg',
  logoLocal: localLogoImg,
} as const;

/**
 * Resolves any image path or key to a guaranteed bundled asset URL.
 * Supports legacy /images/ or /src/assets/images/ paths, filenames, or direct keys.
 */
export function resolveImage(pathOrKey?: string): string {
  if (!pathOrKey) return IMAGES.lalibela;
  
  const lower = pathOrKey.toLowerCase();
  if (lower.includes('national_palace') || lower.includes('palace') || lower.includes('addis')) {
    return IMAGES.nationalPalace;
  }
  if (lower.includes('lalibela') || lower.includes('saint_george') || lower.includes('giyorgis')) {
    return IMAGES.lalibela;
  }
  if (lower.includes('simien')) {
    return IMAGES.simien;
  }
  if (lower.includes('danakil') || lower.includes('dallol') || lower.includes('erta')) {
    return IMAGES.danakil;
  }
  if (lower.includes('omo')) {
    return IMAGES.omo;
  }
  if (lower.includes('harar')) {
    return IMAGES.harar;
  }
  if (lower.includes('lake_tana') || lower.includes('tana') || lower.includes('bahir')) {
    return IMAGES.lakeTana;
  }
  if (lower.includes('logo')) {
    return IMAGES.logoLocal;
  }

  // Return the original path if already resolved or an external URL
  return pathOrKey;
}
