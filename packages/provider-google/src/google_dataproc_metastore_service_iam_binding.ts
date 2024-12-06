import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocMetastoreServiceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocMetastoreServiceIamBindingArgs {
  members: string[];
  role: string;
  service_id: string;
  condition: GoogleDataprocMetastoreServiceIamBindingArgsCondition;
}

export class google_dataproc_metastore_service_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocMetastoreServiceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_metastore_service_iam_binding");
  }
}
