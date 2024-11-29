import { TerraformConfig, TerraformResource } from "tfs";
export interface Targets {
  key: string;
  values: string[];
}
export interface AwsSsmMaintenanceWindowTargetArgs {
  description?: string;
  name?: string;
  owner_information?: string;
  resource_type: string;
  window_id: string;
  targets: Targets;
}
export class aws_ssm_maintenance_window_target extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmMaintenanceWindowTargetArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_maintenance_window_target");
  }
}