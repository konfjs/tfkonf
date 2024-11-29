import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsShieldProtectionGroupArgs {
  aggregation: string;
  members?: string[];
  pattern: string;
  protection_group_id: string;
  resource_type?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_shield_protection_group extends TerraformResource {
  readonly id?: string;
  readonly protection_group_arn!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsShieldProtectionGroupArgs) {
    super(config, "resource", args, resourceName, "aws_shield_protection_group");
  }
}