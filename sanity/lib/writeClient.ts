import { createClient } from "@sanity/client";
import { projectId,apiVersion } from "../env";

export const writeClient = createClient({
  projectId: 'gvez7okh',
  dataset: 'production',
  apiVersion: '2026-02-28',
  token: 'sk5EclYEe6q0ddqOuRAy5JXgukhZB40hMMWhXb4bsfhH86BPyS2xlWdl7ECM33AayIz2vbt0JJz1ek9IXRg4eghPxpH17pADOUViW3AFCdjE5DW6zih1cB8N2lf9eknNEjcKQAOCQHeXMZ7OJYrqSIHlJodGjFnQ8wNumRxOXWl33G4nHIF1', 
  useCdn: false,
});