import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudtrailEventDataStoreArgsAdvancedEventSelectorFieldSelector {
}

export interface AwsCloudtrailEventDataStoreArgsAdvancedEventSelector {
  field_selector: AwsCloudtrailEventDataStoreArgsAdvancedEventSelectorFieldSelector;
}

export interface AwsCloudtrailEventDataStoreArgsTimeouts {
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
  tags?: { [key: string]: string };
  termination_protection_enabled?: boolean;
  advanced_event_selector: AwsCloudtrailEventDataStoreArgsAdvancedEventSelector;
  timeouts?: AwsCloudtrailEventDataStoreArgsTimeouts;
}

export class aws_cloudtrail_event_data_store extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudtrailEventDataStoreArgs) {
    super(config, "resource", args, resourceName, "aws_cloudtrail_event_data_store");
  }
}
