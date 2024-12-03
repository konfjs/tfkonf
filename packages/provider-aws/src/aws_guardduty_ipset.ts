import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsGuarddutyIpsetArgs {
  activate: boolean;
  detector_id: string;
  format: string;
  location: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_guardduty_ipset extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyIpsetArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_ipset");
  }
}