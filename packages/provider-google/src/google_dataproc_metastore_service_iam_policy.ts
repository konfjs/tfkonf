import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocMetastoreServiceIamPolicyArgs {
  policy_data: string;
  service_id: string;
}

export class google_dataproc_metastore_service_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocMetastoreServiceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_metastore_service_iam_policy");
  }
}
