import { TerraformConfig, TerraformResource } from "tfs";
export interface CustomerManagedPolicyReference {
  name: string;
  path?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsSsoadminCustomerManagedPolicyAttachmentArgs {
  instance_arn: string;
  permission_set_arn: string;
  customer_managed_policy_reference: CustomerManagedPolicyReference;
  timeouts: Timeouts;
}
export class aws_ssoadmin_customer_managed_policy_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminCustomerManagedPolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_customer_managed_policy_attachment");
  }
}