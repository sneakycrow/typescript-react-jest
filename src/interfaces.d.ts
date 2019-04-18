export default interface Post {
  create: string;
  title: string;
  link: string;
  pubDate: string;
  "content:encoded": string;
  "dc:createor": string;
  guid: string;
  categories: string[];
  isoDate: string;
}
