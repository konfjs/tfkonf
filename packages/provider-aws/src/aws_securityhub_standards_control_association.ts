import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubStandardsControlAssociationArgs {
  association_status: string;
  security_control_id: string;
  standards_arn: string;
  updated_reason?: string;
}

export class aws_securityhub_standards_control_association extends TerraformResource {
  readonly id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubStandardsControlAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_standards_control_association");
  }
}
