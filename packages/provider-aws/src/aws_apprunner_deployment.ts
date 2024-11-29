import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
}
export interface AwsApprunnerDeploymentArgs {
  service_arn: string;
  timeouts: Timeouts;
}
export class aws_apprunner_deployment extends TerraformResource {
  readonly id!: string;
  readonly operation_id!: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApprunnerDeploymentArgs) {
    super(config, "resource", args, resourceName, "aws_apprunner_deployment");
  }
}