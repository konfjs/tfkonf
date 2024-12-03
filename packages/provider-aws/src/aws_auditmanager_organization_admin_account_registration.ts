import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAuditmanagerOrganizationAdminAccountRegistrationArgs {
  admin_account_id: string;
}
export class aws_auditmanager_organization_admin_account_registration extends TerraformResource {
  readonly id!: string;
  readonly organization_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAuditmanagerOrganizationAdminAccountRegistrationArgs) {
    super(config, "resource", args, resourceName, "aws_auditmanager_organization_admin_account_registration");
  }
}