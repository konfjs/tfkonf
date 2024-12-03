import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAccessanalyzerAnalyzerArgsConfigurationUnusedAccess {
  unused_access_age?: number;
}
export interface AwsAccessanalyzerAnalyzerArgsConfiguration {
  unused_access: AwsAccessanalyzerAnalyzerArgsConfigurationUnusedAccess;
}
export interface AwsAccessanalyzerAnalyzerArgs {
  analyzer_name: string;
  tags?: {
    [key: string]: string;
  };
  type?: string;
  configuration: AwsAccessanalyzerAnalyzerArgsConfiguration;
}
export class aws_accessanalyzer_analyzer extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAccessanalyzerAnalyzerArgs) {
    super(config, "resource", args, resourceName, "aws_accessanalyzer_analyzer");
  }
}