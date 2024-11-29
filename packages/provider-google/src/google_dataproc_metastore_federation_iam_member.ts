import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataprocMetastoreFederationIamMemberArgs {
  federation_id: string;
  member: string;
  role: string;
  condition: Condition;
}
export class google_dataproc_metastore_federation_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocMetastoreFederationIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_metastore_federation_iam_member");
  }
}