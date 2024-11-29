import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataprocMetastoreFederationIamPolicyArgs {
  federation_id: string;
  policy_data: string;
}
export class google_dataproc_metastore_federation_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocMetastoreFederationIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_metastore_federation_iam_policy");
  }
}