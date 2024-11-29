import { TerraformConfig, TerraformResource } from "tfs";
export interface Nas1Configuration {
  size: number;
  type: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFinspaceKxVolumeArgs {
  availability_zones: string[];
  az_mode: string;
  description?: string;
  environment_id: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  nas1_configuration: Nas1Configuration;
  timeouts: Timeouts;
}
export class aws_finspace_kx_volume extends TerraformResource {
  readonly arn!: string;
  readonly attached_clusters!: any[];
  readonly created_timestamp!: string;
  readonly id?: string;
  readonly last_modified_timestamp!: string;
  readonly status!: string;
  readonly status_reason!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFinspaceKxVolumeArgs) {
    super(config, "resource", args, resourceName, "aws_finspace_kx_volume");
  }
}