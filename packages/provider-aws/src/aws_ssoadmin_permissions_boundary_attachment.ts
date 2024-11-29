import { TerraformConfig, TerraformResource } from "tfs";
export interface CustomerManagedPolicyReference {
  name: string;
  path?: string;
}
export interface PermissionsBoundary {
  managed_policy_arn?: string;
  customer_managed_policy_reference: CustomerManagedPolicyReference;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsSsoadminPermissionsBoundaryAttachmentArgs {
  instance_arn: string;
  permission_set_arn: string;
  permissions_boundary: PermissionsBoundary;
  timeouts: Timeouts;
}
export class aws_ssoadmin_permissions_boundary_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminPermissionsBoundaryAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_permissions_boundary_attachment");
  }
}