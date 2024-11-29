import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSsoadminManagedPolicyAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsSsoadminManagedPolicyAttachmentArgs {
  instance_arn: string;
  managed_policy_arn: string;
  permission_set_arn: string;
  timeouts: AwsSsoadminManagedPolicyAttachmentArgsTimeouts;
}
export class aws_ssoadmin_managed_policy_attachment extends TerraformResource {
  readonly id?: string;
  readonly managed_policy_name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminManagedPolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_managed_policy_attachment");
  }
}