import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleGkeBackupBackupPlanIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: Condition;
}
export class google_gke_backup_backup_plan_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeBackupBackupPlanIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_gke_backup_backup_plan_iam_member");
  }
}