import { TerraformConfig, TerraformResource } from "tfs";
export interface AmazonCodeGuruProfiler {
  status: string;
}
export interface EventSources {
  amazon_code_guru_profiler: AmazonCodeGuruProfiler;
}
export interface AwsDevopsguruEventSourcesConfigArgs {
  event_sources: EventSources;
}
export class aws_devopsguru_event_sources_config extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDevopsguruEventSourcesConfigArgs) {
    super(config, "resource", args, resourceName, "aws_devopsguru_event_sources_config");
  }
}