import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsServicecatalogProvisionedProductArgsProvisioningParameters {
  key: string;
  use_previous_value?: boolean;
  value?: string;
}
export interface AwsServicecatalogProvisionedProductArgsStackSetProvisioningPreferences {
  accounts?: string[];
  failure_tolerance_count?: number;
  failure_tolerance_percentage?: number;
  max_concurrency_count?: number;
  max_concurrency_percentage?: number;
  regions?: string[];
}
export interface AwsServicecatalogProvisionedProductArgstimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface AwsServicecatalogProvisionedProductArgs {
  accept_language?: string;
  ignore_errors?: boolean;
  name: string;
  notification_arns?: string[];
  path_name?: string;
  product_name?: string;
  provisioning_artifact_name?: string;
  retain_physical_resources?: boolean;
  tags?: {
    [key: string]: string;
  };
  provisioning_parameters: AwsServicecatalogProvisionedProductArgsProvisioningParameters;
  stack_set_provisioning_preferences: AwsServicecatalogProvisionedProductArgsStackSetProvisioningPreferences;
  timeouts: AwsServicecatalogProvisionedProductArgstimeouts;
}
export class aws_servicecatalog_provisioned_product extends TerraformResource {
  readonly arn!: string;
  readonly cloudwatch_dashboard_names!: string[];
  readonly created_time!: string;
  readonly id?: string;
  readonly last_provisioning_record_id!: string;
  readonly last_record_id!: string;
  readonly last_successful_provisioning_record_id!: string;
  readonly launch_role_arn!: string;
  readonly outputs!: any[];
  readonly path_id?: string;
  readonly product_id?: string;
  readonly provisioning_artifact_id?: string;
  readonly status!: string;
  readonly status_message!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogProvisionedProductArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_provisioned_product");
  }
}