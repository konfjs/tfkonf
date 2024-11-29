import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAuditmanagerAssessmentDelegationArgs {
  assessment_id: string;
  comment?: string;
  control_set_id: string;
  role_arn: string;
  role_type: string;
}
export class aws_auditmanager_assessment_delegation extends TerraformResource {
  readonly delegation_id!: string;
  readonly id!: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAuditmanagerAssessmentDelegationArgs) {
    super(config, "resource", args, resourceName, "aws_auditmanager_assessment_delegation");
  }
}