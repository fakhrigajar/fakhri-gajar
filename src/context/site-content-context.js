import { createContext, useContext } from "react";
import seed from "../../shared/site-content.seed.json";

export const SiteContentContext = createContext(seed);

export function useSiteContent() {
  return useContext(SiteContentContext);
}
