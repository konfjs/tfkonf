import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataprocMetastoreFederationIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataprocMetastoreFederationIamBindingArgs {
  federation_id: string;
  members: string[];
  role: string;
  condition: GoogleDataprocMetastoreFederationIamBindingArgscondition;
}
export class google_dataproc_metastore_federation_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocMetastoreFederationIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_metastore_federation_iam_binding");
  }
}