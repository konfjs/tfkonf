import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataprocMetastoreFederationIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataprocMetastoreFederationIamBindingArgs {
  federation_id: string;
  members: string[];
  role: string;
  condition: GoogleDataprocMetastoreFederationIamBindingArgsCondition;
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