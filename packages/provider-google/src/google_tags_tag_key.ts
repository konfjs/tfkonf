import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleTagsTagKeyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleTagsTagKeyArgs {
  description?: string;
  parent: string;
  purpose?: string;
  purpose_data?: {
    [key: string]: string;
  };
  short_name: string;
  timeouts?: GoogleTagsTagKeyArgsTimeouts;
}
export class google_tags_tag_key extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly namespaced_name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleTagsTagKeyArgs) {
    super(config, "resource", args, resourceName, "google_tags_tag_key");
  }
}