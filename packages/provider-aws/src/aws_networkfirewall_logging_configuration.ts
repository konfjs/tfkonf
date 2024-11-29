import { TerraformConfig, TerraformResource } from "tfs";
export interface LogDestinationConfig {
  log_destination: {
    [key: string]: string;
  };
  log_destination_type: string;
  log_type: string;
}
export interface LoggingConfiguration {
  log_destination_config: LogDestinationConfig;
}
export interface AwsNetworkfirewallLoggingConfigurationArgs {
  firewall_arn: string;
  logging_configuration: LoggingConfiguration;
}
export class aws_networkfirewall_logging_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkfirewallLoggingConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_networkfirewall_logging_configuration");
  }
}