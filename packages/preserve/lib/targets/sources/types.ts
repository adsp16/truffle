import { Content } from "./contents/types";
import * as Contents from "./contents/types";
export { Content, Contents };

export interface Entry {
  path: string;
  source: Source;
}

export interface Container {
  entries: Iterable<Entry> | AsyncIterable<Entry>;
}

export type Source = Content | Container;

export const isContainer = (source: Source): source is Container =>
  source && typeof source === "object" && "entries" in source;

export const isContent = (source: Source): source is Content =>
  !isContainer(source);