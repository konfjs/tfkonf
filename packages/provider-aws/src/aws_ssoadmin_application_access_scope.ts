import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminApplicationAccessScopeArgs {
  application_arn: string;
  authorized_targets?: string[];
  scope: string;
}

export class aws_ssoadmin_application_access_scope extends TerraformResource {
  readonly id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminApplicationAccessScopeArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_application_access_scope");
  }
}
