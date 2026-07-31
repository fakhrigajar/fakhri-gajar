import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SiteContentContext, EMPTY_SITE_CONTENT } from "./site-content-context";
import Loader from "../components/Loader/Loader";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(EMPTY_SITE_CONTENT);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    fetch("/api/content")
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error("Request failed")),
      )
      .then((data) => {
        if (cancelled) return;
        setContent(data);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") return <Loader />;
  if (status === "error") return <ErrorPage />;

  return (
    <SiteContentContext.Provider value={content}>
      {children}
    </SiteContentContext.Provider>
  );
}

SiteContentProvider.propTypes = {
  children: PropTypes.node,
};
