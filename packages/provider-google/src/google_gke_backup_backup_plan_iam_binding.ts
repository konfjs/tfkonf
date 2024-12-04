import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeBackupBackupPlanIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleGkeBackupBackupPlanIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleGkeBackupBackupPlanIamBindingArgsCondition;
}

export class google_gke_backup_backup_plan_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeBackupBackupPlanIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_gke_backup_backup_plan_iam_binding");
  }
}
