import { TerraformConfig, TerraformResource } from "tfs";
export interface ExclusionByResourceTypes {
  resource_types?: string[];
}
export interface RecordingStrategy {
  use_only?: string;
}
export interface RecordingGroup {
  all_supported?: boolean;
  include_global_resource_types?: boolean;
  resource_types?: string[];
  exclusion_by_resource_types: ExclusionByResourceTypes;
  recording_strategy: RecordingStrategy;
}
export interface RecordingModeOverride {
  description?: string;
  recording_frequency: string;
  resource_types: string[];
}
export interface RecordingMode {
  recording_frequency?: string;
  recording_mode_override: RecordingModeOverride;
}
export interface AwsConfigConfigurationRecorderArgs {
  name?: string;
  role_arn: string;
  recording_group: RecordingGroup;
  recording_mode: RecordingMode;
}
export class aws_config_configuration_recorder extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigConfigurationRecorderArgs) {
    super(config, "resource", args, resourceName, "aws_config_configuration_recorder");
  }
}