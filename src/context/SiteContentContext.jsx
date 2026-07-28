import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import seed from "../../shared/site-content.seed.json";
import { SiteContentContext } from "./site-content-context";

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(seed);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/content")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && !cancelled) setContent(data);
      })
      .catch(() => {
        // No backend available (e.g. plain `vite` dev, or offline) —
        // keep the bundled seed data as a fallback.
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
