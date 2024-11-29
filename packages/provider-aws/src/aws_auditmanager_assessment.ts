import { TerraformConfig, TerraformResource } from "tfs";
export interface AssessmentReportsDestination {
  destination: string;
  destination_type: string;
}
export interface AwsAccounts {
  id: string;
}
export interface AwsServices {
  service_name: string;
}
export interface Scope {
  aws_accounts: AwsAccounts;
  aws_services: AwsServices;
}
export interface AwsAuditmanagerAssessmentArgs {
  description?: string;
  framework_id: string;
  name: string;
  roles: any[];
  tags?: {
    [key: string]: string;
  };
  assessment_reports_destination: AssessmentReportsDestination;
  scope: Scope;
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