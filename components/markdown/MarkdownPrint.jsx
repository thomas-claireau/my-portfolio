import { unified } from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import { createElement, useEffect, useState } from 'react';
import markdownStyles from './style.module.scss';
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

  return <div className="prose md:prose-lg lg:prose-lg dark:prose-invert m-auto">{content}</div>;
}
