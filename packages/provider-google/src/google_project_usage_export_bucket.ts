import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleProjectUsageExportBucketArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleProjectUsageExportBucketArgs {
  bucket_name: string;
  prefix?: string;
  timeouts: GoogleProjectUsageExportBucketArgstimeouts;
}
export class google_project_usage_export_bucket extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectUsageExportBucketArgs) {
    super(config, "resource", args, resourceName, "google_project_usage_export_bucket");
  }
}