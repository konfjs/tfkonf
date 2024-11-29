import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetappBackupPolicyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetappBackupPolicyArgs {
  daily_backup_limit: number;
  description?: string;
  enabled?: boolean;
  labels?: {
    [key: string]: string;
  };
  location: string;
  monthly_backup_limit: number;
  name: string;
  weekly_backup_limit: number;
  timeouts: GoogleNetappBackupPolicyArgstimeouts;
}
export class google_netapp_backup_policy extends TerraformResource {
  readonly assigned_volume_count!: number;
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetappBackupPolicyArgs) {
    super(config, "resource", args, resourceName, "google_netapp_backup_policy");
  }
}