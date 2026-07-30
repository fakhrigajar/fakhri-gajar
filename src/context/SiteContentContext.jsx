import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SiteContentContext, EMPTY_SITE_CONTENT } from "./site-content-context";

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(EMPTY_SITE_CONTENT);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/content")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && !cancelled) setContent(data);
      })
      .catch(() => {
        // API unreachable — content stays empty until it comes back.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SiteContentContext.Provider value={content}>
      {children}
    </SiteContentContext.Provider>
  );
}

SiteContentProvider.propTypes = {
  children: PropTypes.node,
};
