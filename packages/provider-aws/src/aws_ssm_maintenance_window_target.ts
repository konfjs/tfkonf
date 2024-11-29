import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmMaintenanceWindowTargetArgsTargets {
  key: string;
  values: string[];
}
export interface AwsSsmMaintenanceWindowTargetArgs {
  description?: string;
  name?: string;
  owner_information?: string;
  resource_type: string;
  window_id: string;
  targets: AwsSsmMaintenanceWindowTargetArgsTargets;
}
export class aws_ssm_maintenance_window_target extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmMaintenanceWindowTargetArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_maintenance_window_target");
  }
}