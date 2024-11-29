import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataprocClusterIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataprocClusterIamBindingArgs {
  cluster: string;
  members: string[];
  role: string;
  condition: GoogleDataprocClusterIamBindingArgscondition;
}
export class google_dataproc_cluster_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocClusterIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_cluster_iam_binding");
  }
}