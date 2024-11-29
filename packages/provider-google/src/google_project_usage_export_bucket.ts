import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleProjectUsageExportBucketArgs {
  bucket_name: string;
  prefix?: string;
  timeouts: Timeouts;
}
export class google_project_usage_export_bucket extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectUsageExportBucketArgs) {
    super(config, "resource", args, resourceName, "google_project_usage_export_bucket");
  }
}