import { TerraformConfig, TerraformResource } from "tfs";
export interface DeliveryOptions {
  sending_pool_name?: string;
  tls_policy?: string;
}
export interface ReputationOptions {}
export interface SendingOptions {}
export interface SuppressionOptions {
  suppressed_reasons?: string[];
}
export interface TrackingOptions {
  custom_redirect_domain: string;
}
export interface DashboardOptions {
  engagement_metrics?: string;
}
export interface GuardianOptions {
  optimized_shared_delivery?: string;
}
export interface VdmOptions {
  dashboard_options: DashboardOptions;
  guardian_options: GuardianOptions;
}
export interface AwsSesv2ConfigurationSetArgs {
  configuration_set_name: string;
  tags?: {
    [key: string]: string;
  };
  delivery_options: DeliveryOptions;
  reputation_options: ReputationOptions;
  sending_options: SendingOptions;
  suppression_options: SuppressionOptions;
  tracking_options: TrackingOptions;
  vdm_options: VdmOptions;
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