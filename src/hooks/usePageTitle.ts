import { useEffect } from 'react';
import { site } from '../data/site';

type PageMeta = {
  title?: string;
  description?: string;
  exactTitle?: boolean;
};

export function usePageTitle(titleOrMeta?: string | PageMeta) {
  const meta: PageMeta =
    typeof titleOrMeta === 'string' || titleOrMeta === undefined
      ? { title: titleOrMeta }
      : titleOrMeta;

  useEffect(() => {
    document.title = meta.exactTitle && meta.title
      ? meta.title
      : meta.title
        ? `${meta.title} · ${site.name}`
        : site.name;

    if (meta.description) {
      const node = document.querySelector('meta[name="description"]');
      if (node) {
        node.setAttribute('content', meta.description);
      }
    }
  }, [meta.title, meta.description, meta.exactTitle]);
}
