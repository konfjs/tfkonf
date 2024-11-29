import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleTagsLocationTagBindingArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleTagsLocationTagBindingArgs {
  location?: string;
  parent: string;
  tag_value: string;
  timeouts: GoogleTagsLocationTagBindingArgsTimeouts;
}
export class google_tags_location_tag_binding extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleTagsLocationTagBindingArgs) {
    super(config, "resource", args, resourceName, "google_tags_location_tag_binding");
  }
}