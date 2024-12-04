import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkfirewallLoggingConfigurationArgsLoggingConfigurationLogDestinationConfig {
  log_destination: { [key: string]: string };
  log_destination_type: string;
  log_type: string;
}

export interface AwsNetworkfirewallLoggingConfigurationArgsLoggingConfiguration {
  log_destination_config: AwsNetworkfirewallLoggingConfigurationArgsLoggingConfigurationLogDestinationConfig;
}

export interface AwsNetworkfirewallLoggingConfigurationArgs {
  firewall_arn: string;
  logging_configuration: AwsNetworkfirewallLoggingConfigurationArgsLoggingConfiguration;
}

export class aws_networkfirewall_logging_configuration extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkfirewallLoggingConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_networkfirewall_logging_configuration");
  }
}
