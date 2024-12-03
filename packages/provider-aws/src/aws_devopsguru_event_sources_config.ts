import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDevopsguruEventSourcesConfigArgsEventSourcesAmazonCodeGuruProfiler {
  status: string;
}
export interface AwsDevopsguruEventSourcesConfigArgsEventSources {
  amazon_code_guru_profiler: AwsDevopsguruEventSourcesConfigArgsEventSourcesAmazonCodeGuruProfiler;
}
export interface AwsDevopsguruEventSourcesConfigArgs {
  event_sources: AwsDevopsguruEventSourcesConfigArgsEventSources;
}
export class aws_devopsguru_event_sources_config extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDevopsguruEventSourcesConfigArgs) {
    super(config, "resource", args, resourceName, "aws_devopsguru_event_sources_config");
  }
}