import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsGuarddutyPublishingDestinationArgs {
  destination_arn: string;
  destination_type?: string;
  detector_id: string;
  kms_key_arn: string;
}
export class aws_guardduty_publishing_destination extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyPublishingDestinationArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_publishing_destination");
  }
}