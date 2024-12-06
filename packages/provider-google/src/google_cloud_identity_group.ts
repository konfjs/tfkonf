import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudIdentityGroupArgsGroupKey {
  id: string;
  namespace?: string;
}

export interface GoogleCloudIdentityGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudIdentityGroupArgs {
  description?: string;
  display_name?: string;
  initial_group_config?: string;
  labels: { [key: string]: string };
  parent: string;
  group_key: GoogleCloudIdentityGroupArgsGroupKey;
  timeouts?: GoogleCloudIdentityGroupArgsTimeouts;
}

export class google_cloud_identity_group extends TerraformResource {
  readonly additional_group_keys!: any[];
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudIdentityGroupArgs) {
    super(config, "resource", args, resourceName, "google_cloud_identity_group");
  }
}
