import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSesv2ConfigurationSetArgsDeliveryOptions {
  sending_pool_name?: string;
  tls_policy?: string;
}
export interface AwsSesv2ConfigurationSetArgsReputationOptions {}
export interface AwsSesv2ConfigurationSetArgsSendingOptions {}
export interface AwsSesv2ConfigurationSetArgsSuppressionOptions {
  suppressed_reasons?: string[];
}
export interface AwsSesv2ConfigurationSetArgsTrackingOptions {
  custom_redirect_domain: string;
}
export interface AwsSesv2ConfigurationSetArgsVdmOptionsDashboardOptions {
  engagement_metrics?: string;
}
export interface AwsSesv2ConfigurationSetArgsVdmOptionsGuardianOptions {
  optimized_shared_delivery?: string;
}
export interface AwsSesv2ConfigurationSetArgsVdmOptions {
  dashboard_options: AwsSesv2ConfigurationSetArgsVdmOptionsDashboardOptions;
  guardian_options: AwsSesv2ConfigurationSetArgsVdmOptionsGuardianOptions;
}
export interface AwsSesv2ConfigurationSetArgs {
  configuration_set_name: string;
  tags?: {
    [key: string]: string;
  };
  delivery_options: AwsSesv2ConfigurationSetArgsDeliveryOptions;
  reputation_options: AwsSesv2ConfigurationSetArgsReputationOptions;
  sending_options: AwsSesv2ConfigurationSetArgsSendingOptions;
  suppression_options: AwsSesv2ConfigurationSetArgsSuppressionOptions;
  tracking_options: AwsSesv2ConfigurationSetArgsTrackingOptions;
  vdm_options: AwsSesv2ConfigurationSetArgsVdmOptions;
}
export class aws_sesv2_configuration_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2ConfigurationSetArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_configuration_set");
  }
}