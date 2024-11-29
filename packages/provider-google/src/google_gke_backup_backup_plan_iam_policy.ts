import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleGkeBackupBackupPlanIamPolicyArgs {
  name: string;
  policy_data: string;
}
export class google_gke_backup_backup_plan_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeBackupBackupPlanIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_gke_backup_backup_plan_iam_policy");
  }
}