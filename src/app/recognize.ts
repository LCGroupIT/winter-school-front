import { Passport } from "./passport";

export interface Recognize {
  recognize(blob: Blob): Promise<Passport>;
}
