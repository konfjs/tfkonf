import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAuditmanagerFrameworkShareArgs {
  comment?: string;
  destination_account: string;
  destination_region: string;
  framework_id: string;
}
export class aws_auditmanager_framework_share extends TerraformResource {
  readonly id!: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAuditmanagerFrameworkShareArgs) {
    super(config, "resource", args, resourceName, "aws_auditmanager_framework_share");
  }
}