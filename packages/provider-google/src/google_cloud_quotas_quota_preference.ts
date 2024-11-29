import { TerraformConfig, TerraformResource } from "tfs";
export interface QuotaConfig {
  annotations?: {
    [key: string]: string;
  };
  preferred_value: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudQuotasQuotaPreferenceArgs {
  contact_email?: string;
  ignore_safety_checks?: string;
  justification?: string;
  quota_config: QuotaConfig;
  timeouts: Timeouts;
}
export class google_cloud_quotas_quota_preference extends TerraformResource {
  readonly create_time!: string;
  readonly dimensions?: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly name?: string;
  readonly parent?: string;
  readonly quota_id?: string;
  readonly reconciling!: boolean;
  readonly service?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudQuotasQuotaPreferenceArgs) {
    super(config, "resource", args, resourceName, "google_cloud_quotas_quota_preference");
  }
}