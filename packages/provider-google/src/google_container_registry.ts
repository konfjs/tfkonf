import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerRegistryArgs {
  location?: string;
}

export class google_container_registry extends TerraformResource {
  readonly bucket_self_link!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerRegistryArgs) {
    super(config, "resource", args, resourceName, "google_container_registry");
  }
}
