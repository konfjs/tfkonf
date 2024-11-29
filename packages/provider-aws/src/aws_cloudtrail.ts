import { TerraformConfig, TerraformResource } from "tfs";
export interface FieldSelector {
  ends_with?: string[];
  equals?: string[];
  field: string;
  not_ends_with?: string[];
  not_equals?: string[];
  not_starts_with?: string[];
  starts_with?: string[];
}
export interface AdvancedEventSelector {
  name?: string;
  field_selector: FieldSelector;
}
export interface DataResource {
  type: string;
  values: string[];
}
export interface EventSelector {
  exclude_management_event_sources?: string[];
  include_management_events?: boolean;
  read_write_type?: string;
  data_resource: DataResource;
}
export interface InsightSelector {
  insight_type: string;
}
export interface AwsCloudtrailArgs {
  cloud_watch_logs_group_arn?: string;
  cloud_watch_logs_role_arn?: string;
  enable_log_file_validation?: boolean;
  enable_logging?: boolean;
  include_global_service_events?: boolean;
  is_multi_region_trail?: boolean;
  is_organization_trail?: boolean;
  kms_key_id?: string;
  name: string;
  s3_bucket_name: string;
  s3_key_prefix?: string;
  sns_topic_name?: string;
  tags?: {
    [key: string]: string;
  };
  advanced_event_selector: AdvancedEventSelector;
  event_selector: EventSelector;
  insight_selector: InsightSelector;
}
export class aws_cloudtrail extends TerraformResource {
  readonly arn!: string;
  readonly home_region!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudtrailArgs) {
    super(config, "resource", args, resourceName, "aws_cloudtrail");
  }
}