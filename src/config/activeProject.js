import { casaOliva2 } from "./projects/casa-oliva-2";
import { zenith } from "./projects/zenith";
import { solea } from "./projects/solea";

const projects = {
  casaOliva2,
  zenith,
  solea,
};

const activeProjectKey =
  import.meta.env.VITE_ACTIVE_PROJECT || "casaOliva2";

export const activeProject = projects[activeProjectKey];
