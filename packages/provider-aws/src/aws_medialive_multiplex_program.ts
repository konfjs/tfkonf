import { TerraformConfig, TerraformResource } from "tfs";
export interface ServiceDescriptor {
  provider_name: string;
  service_name: string;
}
export interface StatmuxSettings {}
export interface VideoSettings {
  statmux_settings: StatmuxSettings;
}
export interface MultiplexProgramSettings {
  preferred_channel_pipeline: string;
  program_number: number;
  service_descriptor: ServiceDescriptor;
  video_settings: VideoSettings;
}
export interface AwsMedialiveMultiplexProgramArgs {
  multiplex_id: string;
  program_name: string;
  multiplex_program_settings: MultiplexProgramSettings;
}
export class aws_medialive_multiplex_program extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMedialiveMultiplexProgramArgs) {
    super(config, "resource", args, resourceName, "aws_medialive_multiplex_program");
  }
}