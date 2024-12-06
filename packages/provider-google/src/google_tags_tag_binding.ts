import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTagsTagBindingArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleTagsTagBindingArgs {
  parent: string;
  tag_value: string;
  timeouts?: GoogleTagsTagBindingArgsTimeouts;
}

export class google_tags_tag_binding extends TerraformResource {
  readonly id?: string;
  readonly name!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleTagsTagBindingArgs) {
    super(config, "resource", args, resourceName, "google_tags_tag_binding");
  }
}
