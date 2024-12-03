import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSesConfigurationSetArgsDeliveryOptions {
  tls_policy?: string;
}
export interface AwsSesConfigurationSetArgsTrackingOptions {
  custom_redirect_domain?: string;
}
export interface AwsSesConfigurationSetArgs {
  name: string;
  reputation_metrics_enabled?: boolean;
  sending_enabled?: boolean;
  delivery_options: AwsSesConfigurationSetArgsDeliveryOptions;
  tracking_options: AwsSesConfigurationSetArgsTrackingOptions;
}
export class aws_ses_configuration_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly last_fresh_start!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesConfigurationSetArgs) {
    super(config, "resource", args, resourceName, "aws_ses_configuration_set");
  }
}