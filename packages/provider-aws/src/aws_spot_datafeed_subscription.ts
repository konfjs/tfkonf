import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSpotDatafeedSubscriptionArgs {
  bucket: string;
  prefix?: string;
}
export class aws_spot_datafeed_subscription extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSpotDatafeedSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_spot_datafeed_subscription");
  }
}