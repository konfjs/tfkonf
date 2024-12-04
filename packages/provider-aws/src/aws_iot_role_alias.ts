import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotRoleAliasArgs {
  alias: string;
  credential_duration?: number;
  role_arn: string;
  tags?: { [key: string]: string };
}

export class aws_iot_role_alias extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsIotRoleAliasArgs) {
    super(config, "resource", args, resourceName, "aws_iot_role_alias");
  }
}
