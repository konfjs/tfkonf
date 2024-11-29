import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRoute53recoveryreadinessRecoveryGroupArgsTimeouts {
  delete?: string;
}
export interface AwsRoute53recoveryreadinessRecoveryGroupArgs {
  cells?: string[];
  recovery_group_name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsRoute53recoveryreadinessRecoveryGroupArgsTimeouts;
}
export class aws_route53recoveryreadiness_recovery_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53recoveryreadinessRecoveryGroupArgs) {
    super(config, "resource", args, resourceName, "aws_route53recoveryreadiness_recovery_group");
  }
}