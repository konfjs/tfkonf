import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsControltowerLandingZoneArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsControltowerLandingZoneArgs {
  manifest_json: string;
  tags?: {
    [key: string]: string;
  };
  version: string;
  timeouts: AwsControltowerLandingZoneArgsTimeouts;
}
export class aws_controltower_landing_zone extends TerraformResource {
  readonly arn!: string;
  readonly drift_status!: any[];
  readonly id?: string;
  readonly latest_available_version!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsControltowerLandingZoneArgs) {
    super(config, "resource", args, resourceName, "aws_controltower_landing_zone");
  }
}