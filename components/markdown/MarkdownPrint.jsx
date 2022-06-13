import { unified } from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import { createElement, useEffect, useState } from 'react';
import MarkdownLink from './MarkdownLink';

export default function MarkdownPrint({ markdown }) {
  const [content, setContent] = useState('');
  useEffect(() => {
    setContent(unified()
      .use(parse)
      .use(remark2react, {
        createElement,
        remarkReactComponents: {
          a: MarkdownLink,
        },
      })
      .processSync(markdown).result);
  }, [markdown]);

  return <div className="prose md:prose-lg lg:prose-lg dark:prose-invert m-auto prose-h3:pl-4 prose-h3:relative prose-h3:before:w-1 prose-h3:before:h-5/6 prose-h3:before:absolute prose-h3:before:top-1/2 prose-h3:before:left-0 prose-h3:before:-translate-y-1/2 prose-h3:before:bg-blue">{content}</div>;
}
