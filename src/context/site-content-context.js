import { createContext, useContext } from "react";

export const EMPTY_SITE_CONTENT = {
  skills: [],
  experiences: [],
  educations: [],
  projects: [],
  certificates: [],
  socials: [],
  about: { name: "", description: "", roles: [], resume: "", image: "" },
};

export const SiteContentContext = createContext(EMPTY_SITE_CONTENT);

export function useSiteContent() {
  return useContext(SiteContentContext);
}
