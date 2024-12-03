import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSsmMaintenanceWindowArgs {
  allow_unassociated_targets?: boolean;
  cutoff: number;
  description?: string;
  duration: number;
  enabled?: boolean;
  end_date?: string;
  name: string;
  schedule: string;
  schedule_offset?: number;
  schedule_timezone?: string;
  start_date?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_ssm_maintenance_window extends TerraformResource {
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmMaintenanceWindowArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_maintenance_window");
  }
}