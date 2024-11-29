import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsShieldProtectionHealthCheckAssociationArgs {
  health_check_arn: string;
  shield_protection_id: string;
}
export class aws_shield_protection_health_check_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsShieldProtectionHealthCheckAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_shield_protection_health_check_association");
  }
}