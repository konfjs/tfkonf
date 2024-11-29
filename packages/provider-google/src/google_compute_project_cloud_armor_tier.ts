import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeProjectCloudArmorTierArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeProjectCloudArmorTierArgs {
  cloud_armor_tier: string;
  timeouts: GoogleComputeProjectCloudArmorTierArgstimeouts;
}
export class google_compute_project_cloud_armor_tier extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeProjectCloudArmorTierArgs) {
    super(config, "resource", args, resourceName, "google_compute_project_cloud_armor_tier");
  }
}