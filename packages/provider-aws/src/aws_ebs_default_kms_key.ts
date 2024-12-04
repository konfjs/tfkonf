import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEbsDefaultKmsKeyArgs {
  key_arn: string;
}

export class aws_ebs_default_kms_key extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEbsDefaultKmsKeyArgs) {
    super(config, "resource", args, resourceName, "aws_ebs_default_kms_key");
  }
}
