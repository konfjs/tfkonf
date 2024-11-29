import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppstreamStackArgsAccessEndpoints {
  endpoint_type: string;
}
export interface AwsAppstreamStackArgsApplicationSettings {
  enabled: boolean;
  settings_group?: string;
}
export interface AwsAppstreamStackArgsStorageConnectors {
  connector_type: string;
}
export interface AwsAppstreamStackArgsStreamingExperienceSettings {
  preferred_protocol?: string;
}
export interface AwsAppstreamStackArgsUserSettings {
  action: string;
  permission: string;
}
export interface AwsAppstreamStackArgs {
  description?: string;
  display_name?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  access_endpoints: AwsAppstreamStackArgsAccessEndpoints;
  application_settings: AwsAppstreamStackArgsApplicationSettings;
  storage_connectors: AwsAppstreamStackArgsStorageConnectors;
  streaming_experience_settings: AwsAppstreamStackArgsStreamingExperienceSettings;
  user_settings: AwsAppstreamStackArgsUserSettings;
}
export class aws_appstream_stack extends TerraformResource {
  readonly arn!: string;
  readonly created_time!: string;
  readonly embed_host_domains?: string[];
  readonly feedback_url?: string;
  readonly id?: string;
  readonly redirect_url?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppstreamStackArgs) {
    super(config, "resource", args, resourceName, "aws_appstream_stack");
  }
}