import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApprunnerObservabilityConfigurationArgsTraceConfiguration {
  vendor?: string;
}

export interface AwsApprunnerObservabilityConfigurationArgs {
  observability_configuration_name: string;
  tags?: { [key: string]: string };
  trace_configuration: AwsApprunnerObservabilityConfigurationArgsTraceConfiguration;
}

export class aws_apprunner_observability_configuration extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly latest!: boolean;
  readonly observability_configuration_revision!: number;
  readonly status!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsApprunnerObservabilityConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_apprunner_observability_configuration");
  }
}
