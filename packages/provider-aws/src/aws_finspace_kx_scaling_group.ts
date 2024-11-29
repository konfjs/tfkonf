import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsFinspaceKxScalingGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFinspaceKxScalingGroupArgs {
  availability_zone_id: string;
  environment_id: string;
  host_type: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsFinspaceKxScalingGroupArgsTimeouts;
}
export class aws_finspace_kx_scaling_group extends TerraformResource {
  readonly arn!: string;
  readonly clusters!: string[];
  readonly created_timestamp!: string;
  readonly id?: string;
  readonly last_modified_timestamp!: string;
  readonly status!: string;
  readonly status_reason!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFinspaceKxScalingGroupArgs) {
    super(config, "resource", args, resourceName, "aws_finspace_kx_scaling_group");
  }
}