import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMedialiveMultiplexProgramArgsMultiplexProgramSettingsServiceDescriptor {
  provider_name: string;
  service_name: string;
}
export interface AwsMedialiveMultiplexProgramArgsMultiplexProgramSettingsVideoSettingsStatmuxSettings {}
export interface AwsMedialiveMultiplexProgramArgsMultiplexProgramSettingsVideoSettings {
  statmux_settings: AwsMedialiveMultiplexProgramArgsMultiplexProgramSettingsVideoSettingsStatmuxSettings;
}
export interface AwsMedialiveMultiplexProgramArgsMultiplexProgramSettings {
  preferred_channel_pipeline: string;
  program_number: number;
  service_descriptor: AwsMedialiveMultiplexProgramArgsMultiplexProgramSettingsServiceDescriptor;
  video_settings: AwsMedialiveMultiplexProgramArgsMultiplexProgramSettingsVideoSettings;
}
export interface AwsMedialiveMultiplexProgramArgs {
  multiplex_id: string;
  program_name: string;
  multiplex_program_settings: AwsMedialiveMultiplexProgramArgsMultiplexProgramSettings;
}
export class aws_medialive_multiplex_program extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMedialiveMultiplexProgramArgs) {
    super(config, "resource", args, resourceName, "aws_medialive_multiplex_program");
  }
}