import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsShieldProtectionArgs {
  name: string;
  resource_arn: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_shield_protection extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsShieldProtectionArgs) {
    super(config, "resource", args, resourceName, "aws_shield_protection");
  }
}