import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsLocationTrackerArgs {
  description?: string;
  kms_key_id?: string;
  position_filtering?: string;
  tags?: {
    [key: string]: string;
  };
  tracker_name: string;
}
export class aws_location_tracker extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly tracker_arn!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLocationTrackerArgs) {
    super(config, "resource", args, resourceName, "aws_location_tracker");
  }
}