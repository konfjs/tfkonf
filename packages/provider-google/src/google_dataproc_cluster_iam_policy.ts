import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataprocClusterIamPolicyArgs {
  cluster: string;
  policy_data: string;
}
export class google_dataproc_cluster_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocClusterIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_cluster_iam_policy");
  }
}