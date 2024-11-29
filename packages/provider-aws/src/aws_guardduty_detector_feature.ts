import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGuarddutyDetectorFeatureArgsAdditionalConfiguration {
  name: string;
  status: string;
}
export interface AwsGuarddutyDetectorFeatureArgs {
  detector_id: string;
  name: string;
  status: string;
  additional_configuration: AwsGuarddutyDetectorFeatureArgsAdditionalConfiguration;
}
export class aws_guardduty_detector_feature extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyDetectorFeatureArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_detector_feature");
  }
}