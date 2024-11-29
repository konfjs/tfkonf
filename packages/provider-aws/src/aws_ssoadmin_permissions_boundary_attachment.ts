import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSsoadminPermissionsBoundaryAttachmentArgsPermissionsBoundaryCustomerManagedPolicyReference {
  name: string;
  path?: string;
}
export interface AwsSsoadminPermissionsBoundaryAttachmentArgsPermissionsBoundary {
  managed_policy_arn?: string;
  customer_managed_policy_reference: AwsSsoadminPermissionsBoundaryAttachmentArgsPermissionsBoundaryCustomerManagedPolicyReference;
}
export interface AwsSsoadminPermissionsBoundaryAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsSsoadminPermissionsBoundaryAttachmentArgs {
  instance_arn: string;
  permission_set_arn: string;
  permissions_boundary: AwsSsoadminPermissionsBoundaryAttachmentArgsPermissionsBoundary;
  timeouts: AwsSsoadminPermissionsBoundaryAttachmentArgsTimeouts;
}
export class aws_ssoadmin_permissions_boundary_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminPermissionsBoundaryAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_permissions_boundary_attachment");
  }
}