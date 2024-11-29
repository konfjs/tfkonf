import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleTagsTagValueArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleTagsTagValueArgs {
  description?: string;
  parent: string;
  short_name: string;
  timeouts: GoogleTagsTagValueArgsTimeouts;
}
export class google_tags_tag_value extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly namespaced_name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleTagsTagValueArgs) {
    super(config, "resource", args, resourceName, "google_tags_tag_value");
  }
}