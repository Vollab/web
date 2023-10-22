import { SVG } from 'src/components/shared/atoms/SVG'

import { IIconProps } from 'src/types/icons.types'

export const Person = ({ fill, className }: IIconProps) => (
  <SVG viewBox='0 0 33 32' className={className}>
    <path
      d='M32.2853 29.9998C30.0174 25.8983 26.3873 22.8199 22.0909 21.3548C24.1503 20.0692 25.7506 18.1093 26.6461 15.7762C27.5416 13.4431 27.6826 10.8659 27.0476 8.44042C26.4126 6.01499 25.0367 3.87552 23.1311 2.35069C21.2256 0.825853 18.8959 0 16.5 0C14.1041 0 11.7744 0.825853 9.86886 2.35069C7.96334 3.87552 6.58739 6.01499 5.95238 8.44042C5.31737 10.8659 5.45844 13.4431 6.35391 15.7762C7.24937 18.1093 8.84971 20.0692 10.9091 21.3548C6.61269 22.8199 2.98258 25.8983 0.714705 29.9998C0.619583 30.1447 0.55403 30.3087 0.522166 30.4814C0.490302 30.6542 0.492816 30.832 0.52955 31.0036C0.566284 31.1753 0.636444 31.3372 0.73562 31.479C0.834797 31.6209 0.960848 31.7397 1.10585 31.8279C1.25085 31.9162 1.41168 31.972 1.57821 31.9918C1.74475 32.0117 1.9134 31.9952 2.07356 31.9433C2.23373 31.8915 2.38195 31.8054 2.50891 31.6906C2.63587 31.5757 2.73882 31.4345 2.81131 31.2758C4.20051 28.7557 6.19654 26.6633 8.59916 25.2088C11.0018 23.7542 13.7265 22.9885 16.5 22.9885C19.2735 22.9885 21.9982 23.7542 24.4008 25.2088C26.8035 26.6633 28.7995 28.7557 30.1887 31.2758C30.2612 31.4345 30.3641 31.5757 30.4911 31.6906C30.618 31.8054 30.7663 31.8915 30.9264 31.9433C31.0866 31.9952 31.2553 32.0117 31.4218 31.9918C31.5883 31.972 31.7491 31.9162 31.8941 31.8279C32.0392 31.7397 32.1652 31.6209 32.2644 31.479C32.3636 31.3372 32.4337 31.1753 32.4704 31.0036C32.5072 30.832 32.5097 30.6542 32.4778 30.4814C32.446 30.3087 32.3804 30.1447 32.2853 29.9998V29.9998ZM7.99204 11.4977C7.99204 9.73106 8.49103 8.00414 9.42589 6.53527C10.3608 5.06639 11.6895 3.92155 13.2441 3.2455C14.7988 2.56945 16.5094 2.39257 18.1598 2.73721C19.8102 3.08186 21.3262 3.93256 22.516 5.18173C23.7059 6.4309 24.5162 8.02245 24.8445 9.7551C25.1728 11.4878 25.0043 13.2837 24.3603 14.9158C23.7164 16.5479 22.6259 17.9429 21.2268 18.9244C19.8276 19.9059 18.1827 20.4297 16.5 20.4297C14.2435 20.4297 12.0795 19.4887 10.484 17.8136C8.88842 16.1385 7.99204 13.8666 7.99204 11.4977Z'
      fill={fill}
    />
  </SVG>
)