import { SVG } from 'src/components/shared/atoms/SVG'

import { IIconProps } from 'src/types/icons.types'

export const Projects = ({ className, fill }: IIconProps) => (
  <SVG className={className} viewBox='0 0 24 24'>
    <path
      fill={fill}
      id='projects'
      d='M7.8535 12.0019V10.2561C7.8535 10.0825 7.92247 9.916 8.04524 9.79323C8.16801 9.67046 8.33453 9.60148 8.50815 9.60148C8.68177 9.60148 8.84828 9.67046 8.97105 9.79323C9.09382 9.916 9.1628 10.0825 9.1628 10.2561V12.0019C9.1628 12.1755 9.09382 12.342 8.97105 12.4648C8.84828 12.5875 8.68177 12.6565 8.50815 12.6565C8.33453 12.6565 8.16801 12.5875 8.04524 12.4648C7.92247 12.342 7.8535 12.1755 7.8535 12.0019ZM11.9996 12.6565C12.1732 12.6565 12.3397 12.5875 12.4625 12.4648C12.5853 12.342 12.6542 12.1755 12.6542 12.0019V9.38327C12.6542 9.20965 12.5853 9.04313 12.4625 8.92036C12.3397 8.79759 12.1732 8.72862 11.9996 8.72862C11.826 8.72862 11.6595 8.79759 11.5367 8.92036C11.4139 9.04313 11.345 9.20965 11.345 9.38327V12.0019C11.345 12.1755 11.4139 12.342 11.5367 12.4648C11.6595 12.5875 11.826 12.6565 11.9996 12.6565ZM15.491 12.6565C15.6647 12.6565 15.8312 12.5875 15.954 12.4648C16.0767 12.342 16.1457 12.1755 16.1457 12.0019V8.51041C16.1457 8.33678 16.0767 8.17027 15.954 8.0475C15.8312 7.92473 15.6647 7.85576 15.491 7.85576C15.3174 7.85576 15.1509 7.92473 15.0281 8.0475C14.9054 8.17027 14.8364 8.33678 14.8364 8.51041V12.0019C14.8364 12.1755 14.9054 12.342 15.0281 12.4648C15.1509 12.5875 15.3174 12.6565 15.491 12.6565ZM21.3829 4.80074V15.7115H22.4739C22.6476 15.7115 22.8141 15.7805 22.9368 15.9033C23.0596 16.026 23.1286 16.1925 23.1286 16.3662C23.1286 16.5398 23.0596 16.7063 22.9368 16.8291C22.8141 16.9518 22.6476 17.0208 22.4739 17.0208H12.6542V19.2903C13.2116 19.4483 13.6931 19.8025 14.0097 20.2877C14.3264 20.7729 14.4569 21.3562 14.3771 21.9301C14.2973 22.504 14.0127 23.0296 13.5758 23.41C13.1388 23.7905 12.579 24 11.9996 24C11.4202 24 10.8604 23.7905 10.4234 23.41C9.98647 23.0296 9.70185 22.504 9.62208 21.9301C9.54232 21.3562 9.6728 20.7729 9.98945 20.2877C10.3061 19.8025 10.7875 19.4483 11.345 19.2903V17.0208H1.52525C1.35163 17.0208 1.18512 16.9518 1.06235 16.8291C0.939577 16.7063 0.870605 16.5398 0.870605 16.3662C0.870605 16.1925 0.939577 16.026 1.06235 15.9033C1.18512 15.7805 1.35163 15.7115 1.52525 15.7115H2.61633V4.80074H2.39811C1.99299 4.80074 1.60447 4.63981 1.318 4.35335C1.03154 4.06688 0.870605 3.67835 0.870605 3.27323V1.52751C0.870605 1.12239 1.03154 0.73386 1.318 0.447397C1.60447 0.160934 1.99299 0 2.39811 0H21.6011C22.0062 0 22.3947 0.160934 22.6812 0.447397C22.9677 0.73386 23.1286 1.12239 23.1286 1.52751V3.27323C23.1286 3.67835 22.9677 4.06688 22.6812 4.35335C22.3947 4.63981 22.0062 4.80074 21.6011 4.80074H21.3829ZM11.9996 20.5123C11.7838 20.5123 11.5729 20.5763 11.3934 20.6961C11.214 20.816 11.0742 20.9864 10.9916 21.1858C10.909 21.3852 10.8874 21.6045 10.9295 21.8162C10.9716 22.0278 11.0755 22.2223 11.2281 22.3748C11.3807 22.5274 11.5751 22.6314 11.7867 22.6735C11.9984 22.7155 12.2178 22.6939 12.4171 22.6114C12.6165 22.5288 12.7869 22.3889 12.9068 22.2095C13.0267 22.0301 13.0907 21.8191 13.0907 21.6033C13.0907 21.314 12.9757 21.0364 12.7711 20.8318C12.5665 20.6272 12.289 20.5123 11.9996 20.5123ZM2.39811 3.49145H21.6011C21.659 3.49145 21.7145 3.46846 21.7554 3.42754C21.7963 3.38661 21.8193 3.33111 21.8193 3.27323V1.52751C21.8193 1.46963 21.7963 1.41413 21.7554 1.37321C21.7145 1.33228 21.659 1.30929 21.6011 1.30929H2.39811C2.34024 1.30929 2.28474 1.33228 2.24381 1.37321C2.20289 1.41413 2.1799 1.46963 2.1799 1.52751V3.27323C2.1799 3.33111 2.20289 3.38661 2.24381 3.42754C2.28474 3.46846 2.34024 3.49145 2.39811 3.49145ZM20.0736 4.80074H3.92562V15.7115H20.0736V4.80074Z'
    />
  </SVG>
)
