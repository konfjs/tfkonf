import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamVirtualMfaDeviceArgs {
  path?: string;
  tags?: {
    [key: string]: string;
  };
  virtual_mfa_device_name: string;
}
export class aws_iam_virtual_mfa_device extends TerraformResource {
  readonly arn!: string;
  readonly base_32_string_seed!: string;
  readonly enable_date!: string;
  readonly id?: string;
  readonly qr_code_png!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly user_name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamVirtualMfaDeviceArgs) {
    super(config, "resource", args, resourceName, "aws_iam_virtual_mfa_device");
  }
}