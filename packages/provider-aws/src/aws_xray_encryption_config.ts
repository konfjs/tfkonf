import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsXrayEncryptionConfigArgs {
  key_id?: string;
  type: string;
}
export class aws_xray_encryption_config extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsXrayEncryptionConfigArgs) {
    super(config, "resource", args, resourceName, "aws_xray_encryption_config");
  }
}