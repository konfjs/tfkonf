import { TerraformConfig, TerraformResource } from "tfs";
export interface DeliveryOptions {
  tls_policy?: string;
}
export interface TrackingOptions {
  custom_redirect_domain?: string;
}
export interface AwsSesConfigurationSetArgs {
  name: string;
  reputation_metrics_enabled?: boolean;
  sending_enabled?: boolean;
  delivery_options: DeliveryOptions;
  tracking_options: TrackingOptions;
}
export class aws_ses_configuration_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly last_fresh_start!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesConfigurationSetArgs) {
    super(config, "resource", args, resourceName, "aws_ses_configuration_set");
  }
}