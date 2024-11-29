import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsConfigConfigurationRecorderArgsRecordingGroupExclusionByResourceTypes {
  resource_types?: string[];
}
export interface AwsConfigConfigurationRecorderArgsRecordingGroupRecordingStrategy {
  use_only?: string;
}
export interface AwsConfigConfigurationRecorderArgsRecordingGroup {
  all_supported?: boolean;
  include_global_resource_types?: boolean;
  resource_types?: string[];
  exclusion_by_resource_types: AwsConfigConfigurationRecorderArgsRecordingGroupExclusionByResourceTypes;
  recording_strategy: AwsConfigConfigurationRecorderArgsRecordingGroupRecordingStrategy;
}
export interface AwsConfigConfigurationRecorderArgsRecordingModeRecordingModeOverride {
  description?: string;
  recording_frequency: string;
  resource_types: string[];
}
export interface AwsConfigConfigurationRecorderArgsRecordingMode {
  recording_frequency?: string;
  recording_mode_override: AwsConfigConfigurationRecorderArgsRecordingModeRecordingModeOverride;
}
export interface AwsConfigConfigurationRecorderArgs {
  name?: string;
  role_arn: string;
  recording_group: AwsConfigConfigurationRecorderArgsRecordingGroup;
  recording_mode: AwsConfigConfigurationRecorderArgsRecordingMode;
}
export class aws_config_configuration_recorder extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigConfigurationRecorderArgs) {
    super(config, "resource", args, resourceName, "aws_config_configuration_recorder");
  }
}