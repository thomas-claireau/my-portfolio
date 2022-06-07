import Link from 'next/link';

type Icon = {
  url: string,
  title: string,
  logo: string
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
    // eslint-disable-next-line no-param-reassign
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
