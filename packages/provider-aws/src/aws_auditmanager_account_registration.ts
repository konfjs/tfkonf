import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAuditmanagerAccountRegistrationArgs {
  delegated_admin_account?: string;
  deregister_on_destroy?: boolean;
  kms_key?: string;
}
export class aws_auditmanager_account_registration extends TerraformResource {
  readonly id!: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAuditmanagerAccountRegistrationArgs) {
    super(config, "resource", args, resourceName, "aws_auditmanager_account_registration");
  }
}