import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeBackupRestorePlanIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleGkeBackupRestorePlanIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleGkeBackupRestorePlanIamBindingArgscondition;
}
export class google_gke_backup_restore_plan_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeBackupRestorePlanIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_gke_backup_restore_plan_iam_binding");
  }
}