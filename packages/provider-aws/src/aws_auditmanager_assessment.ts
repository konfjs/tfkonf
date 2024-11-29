import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAuditmanagerAssessmentArgsAssessmentReportsDestination {
  destination: string;
  destination_type: string;
}
export interface AwsAuditmanagerAssessmentArgsscopeAwsAccounts {
  id: string;
}
export interface AwsAuditmanagerAssessmentArgsscopeAwsServices {
  service_name: string;
}
export interface AwsAuditmanagerAssessmentArgsscope {
  aws_accounts: AwsAuditmanagerAssessmentArgsscopeAwsAccounts;
  aws_services: AwsAuditmanagerAssessmentArgsscopeAwsServices;
}
export interface AwsAuditmanagerAssessmentArgs {
  description?: string;
  framework_id: string;
  name: string;
  roles: any[];
  tags?: {
    [key: string]: string;
  };
  assessment_reports_destination: AwsAuditmanagerAssessmentArgsAssessmentReportsDestination;
  scope: AwsAuditmanagerAssessmentArgsscope;
}
export class aws_auditmanager_assessment extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly roles_all!: any[];
  readonly status!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAuditmanagerAssessmentArgs) {
    super(config, "resource", args, resourceName, "aws_auditmanager_assessment");
  }
}