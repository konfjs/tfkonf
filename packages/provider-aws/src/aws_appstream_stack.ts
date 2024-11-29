import { TerraformConfig, TerraformResource } from "tfs";
export interface AccessEndpoints {
  endpoint_type: string;
}
export interface ApplicationSettings {
  enabled: boolean;
  settings_group?: string;
}
export interface StorageConnectors {
  connector_type: string;
}
export interface StreamingExperienceSettings {
  preferred_protocol?: string;
}
export interface UserSettings {
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
  access_endpoints: AccessEndpoints;
  application_settings: ApplicationSettings;
  storage_connectors: StorageConnectors;
  streaming_experience_settings: StreamingExperienceSettings;
  user_settings: UserSettings;
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