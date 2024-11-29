import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsM2DeploymentArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsM2DeploymentArgs {
  application_id: string;
  application_version: number;
  environment_id: string;
  force_stop?: boolean;
  start: boolean;
  timeouts: AwsM2DeploymentArgstimeouts;
}
export class aws_m2_deployment extends TerraformResource {
  readonly deployment_id!: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsM2DeploymentArgs) {
    super(config, "resource", args, resourceName, "aws_m2_deployment");
  }
}