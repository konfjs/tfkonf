import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSecurityhubAccountArgs {
  auto_enable_controls?: boolean;
  enable_default_standards?: boolean;
}
export class aws_securityhub_account extends TerraformResource {
  readonly arn!: string;
  readonly control_finding_generator?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubAccountArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_account");
  }
}