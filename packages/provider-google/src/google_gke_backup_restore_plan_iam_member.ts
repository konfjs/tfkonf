import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeBackupRestorePlanIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleGkeBackupRestorePlanIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleGkeBackupRestorePlanIamMemberArgscondition;
}
export class google_gke_backup_restore_plan_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeBackupRestorePlanIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_gke_backup_restore_plan_iam_member");
  }
}