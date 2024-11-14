export interface Avatar {
  url: string;
  path: string;
  mime_type: string;
}
export interface UserData {
  username: string;
  email: string;
  avatar: Avatar;
  id: number;
  [key: string]: unknown;
}