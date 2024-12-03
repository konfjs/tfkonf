import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSecurityhubStandardsControlArgs {
  control_status: string;
  standards_control_arn: string;
}
export class aws_securityhub_standards_control extends TerraformResource {
  readonly control_id!: string;
  readonly control_status_updated_at!: string;
  readonly description!: string;
  readonly disabled_reason?: string;
  readonly id?: string;
  readonly related_requirements!: string[];
  readonly remediation_url!: string;
  readonly severity_rating!: string;
  readonly title!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubStandardsControlArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_standards_control");
  }
}