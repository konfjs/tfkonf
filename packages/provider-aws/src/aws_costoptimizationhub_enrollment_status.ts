import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCostoptimizationhubEnrollmentStatusArgs {}
export class aws_costoptimizationhub_enrollment_status extends TerraformResource {
  readonly id!: string;
  readonly include_member_accounts?: boolean;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCostoptimizationhubEnrollmentStatusArgs) {
    super(config, "resource", args, resourceName, "aws_costoptimizationhub_enrollment_status");
  }
}