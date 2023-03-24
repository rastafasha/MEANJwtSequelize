import { Tutorial_tag } from "./tutorial_tag.model";

export class Tutorial {
  id?: any;
  title?: string;
  description?: string;
  published?: boolean;
  tag_id?: Tutorial_tag;
}
