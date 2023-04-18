export type APIListParams = {
  title?: string;
  description?: string;
  auth?: string;
  https?: boolean;
  cors?: 'yes' | 'no' | 'unknown';
  category?: string;
};

export type APIEntry = {
  /** API name */
  API: string;
  /** API Authentication type */
  Auth: string;
  /** the category of the API */
  Category: string;
  /** does the API support CORS */
  Cors: string;
  /** API description */
  Description: string;
  /** does the API support HTTPS */
  HTTPS: boolean;
  /** the API url / link */
  Link: string;
};

export type APIListResponse = {
  count: number;
  entries: Array<APIEntry>;
};
