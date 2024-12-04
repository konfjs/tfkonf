import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsShieldDrtAccessRoleArnAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsShieldDrtAccessRoleArnAssociationArgs {
  role_arn: string;
  timeouts?: AwsShieldDrtAccessRoleArnAssociationArgsTimeouts;
}

export class aws_shield_drt_access_role_arn_association extends TerraformResource {
  readonly id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsShieldDrtAccessRoleArnAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_shield_drt_access_role_arn_association");
  }
}
