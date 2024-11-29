import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataprocMetastoreServiceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataprocMetastoreServiceIamMemberArgs {
  member: string;
  role: string;
  service_id: string;
  condition: GoogleDataprocMetastoreServiceIamMemberArgsCondition;
}
export class google_dataproc_metastore_service_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocMetastoreServiceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_metastore_service_iam_member");
  }
}