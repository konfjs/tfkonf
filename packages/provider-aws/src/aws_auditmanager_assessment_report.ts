import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAuditmanagerAssessmentReportArgs {
  assessment_id: string;
  description?: string;
  name: string;
}
export class aws_auditmanager_assessment_report extends TerraformResource {
  readonly author!: string;
  readonly id!: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAuditmanagerAssessmentReportArgs) {
    super(config, "resource", args, resourceName, "aws_auditmanager_assessment_report");
  }
}