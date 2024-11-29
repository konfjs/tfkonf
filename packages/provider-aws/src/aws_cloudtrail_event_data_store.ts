import { TerraformConfig, TerraformResource } from "tfs";
export interface FieldSelector {}
export interface AdvancedEventSelector {
  field_selector: FieldSelector;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCloudtrailEventDataStoreArgs {
  billing_mode?: string;
  kms_key_id?: string;
  multi_region_enabled?: boolean;
  name: string;
  organization_enabled?: boolean;
  retention_period?: number;
  tags?: {
    [key: string]: string;
  };
  termination_protection_enabled?: boolean;
  advanced_event_selector: AdvancedEventSelector;
  timeouts: Timeouts;
}
export class aws_cloudtrail_event_data_store extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudtrailEventDataStoreArgs) {
    super(config, "resource", args, resourceName, "aws_cloudtrail_event_data_store");
  }
}