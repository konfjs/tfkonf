import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAuditmanagerAssessmentArgsAssessmentReportsDestination {
  destination: string;
  destination_type: string;
}
export interface AwsAuditmanagerAssessmentArgsScopeAwsAccounts {
  id: string;
}
export interface AwsAuditmanagerAssessmentArgsScopeAwsServices {
  service_name: string;
}
export interface AwsAuditmanagerAssessmentArgsScope {
  aws_accounts: AwsAuditmanagerAssessmentArgsScopeAwsAccounts;
  aws_services: AwsAuditmanagerAssessmentArgsScopeAwsServices;
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
  scope: AwsAuditmanagerAssessmentArgsScope;
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