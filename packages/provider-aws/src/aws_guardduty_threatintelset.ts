import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsGuarddutyThreatintelsetArgs {
  activate: boolean;
  detector_id: string;
  format: string;
  location: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_guardduty_threatintelset extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyThreatintelsetArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_threatintelset");
  }
}