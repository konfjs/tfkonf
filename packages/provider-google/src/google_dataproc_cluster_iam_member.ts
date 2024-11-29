import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataprocClusterIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataprocClusterIamMemberArgs {
  cluster: string;
  member: string;
  role: string;
  condition: GoogleDataprocClusterIamMemberArgsCondition;
}
export class google_dataproc_cluster_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocClusterIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_cluster_iam_member");
  }
}