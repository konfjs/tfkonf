import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLocationTrackerAssociationArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsLocationTrackerAssociationArgs {
  consumer_arn: string;
  tracker_name: string;
  timeouts: AwsLocationTrackerAssociationArgstimeouts;
}
export class aws_location_tracker_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLocationTrackerAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_location_tracker_association");
  }
}