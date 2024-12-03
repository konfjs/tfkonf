import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEbsEncryptionByDefaultArgs {
  enabled?: boolean;
}
export class aws_ebs_encryption_by_default extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEbsEncryptionByDefaultArgs) {
    super(config, "resource", args, resourceName, "aws_ebs_encryption_by_default");
  }
}