import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsLocationTrackerAssociationArgs {
  consumer_arn: string;
  tracker_name: string;
  timeouts: Timeouts;
}
export class aws_location_tracker_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLocationTrackerAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_location_tracker_association");
  }
}