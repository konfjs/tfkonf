import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminPermissionSetInlinePolicyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsSsoadminPermissionSetInlinePolicyArgs {
  inline_policy: string;
  instance_arn: string;
  permission_set_arn: string;
  timeouts?: AwsSsoadminPermissionSetInlinePolicyArgsTimeouts;
}

export class aws_ssoadmin_permission_set_inline_policy extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminPermissionSetInlinePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_permission_set_inline_policy");
  }
}
