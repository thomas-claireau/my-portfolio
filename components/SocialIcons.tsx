import { useDynamicSVGImport } from 'hooks/useDynamicSVGImport';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import IconSvg from './IconSvg';

type Icon = {
  url: String,
  title: String,
  logo: String
}

type Props = {
  icons: Array<Icon>
}

const getSvgName = (svg) => svg
  .replace('img/', '')
  .replace('.svg', '');

export default function SocialIcons({ icons }: Props) {
  const reqSvgs = require.context('!@svgr/webpack!public/img', true, /\.svg$/);

  const flagMap = reqSvgs.keys().reduce((images, path) => {
    const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
    images[key] = reqSvgs(path).default;
    return images;
  }, {});

  return (
    <ul className="flex items-center gap-2">
      {icons?.map(({ url, title, logo }, index) => {
        const SocialIcon = flagMap[getSvgName(logo)];

        return (
          <li key={index} title={title}>
            <Link href={url}>
              <a target="_blank">
                <SocialIcon className="social-icon" />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
