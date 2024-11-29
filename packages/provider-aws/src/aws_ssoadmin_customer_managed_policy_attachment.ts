import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsoadminCustomerManagedPolicyAttachmentArgsCustomerManagedPolicyReference {
  name: string;
  path?: string;
}
export interface AwsSsoadminCustomerManagedPolicyAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsSsoadminCustomerManagedPolicyAttachmentArgs {
  instance_arn: string;
  permission_set_arn: string;
  customer_managed_policy_reference: AwsSsoadminCustomerManagedPolicyAttachmentArgsCustomerManagedPolicyReference;
  timeouts: AwsSsoadminCustomerManagedPolicyAttachmentArgsTimeouts;
}
export class aws_ssoadmin_customer_managed_policy_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminCustomerManagedPolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_customer_managed_policy_attachment");
  }
}