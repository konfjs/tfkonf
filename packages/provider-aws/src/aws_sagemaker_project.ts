import { TerraformConfig, TerraformResource } from "tfs";
export interface ProvisioningParameter {
  key: string;
  value?: string;
}
export interface ServiceCatalogProvisioningDetails {
  path_id?: string;
  product_id: string;
  provisioning_parameter: ProvisioningParameter;
}
export interface AwsSagemakerProjectArgs {
  project_description?: string;
  project_name: string;
  tags?: {
    [key: string]: string;
  };
  service_catalog_provisioning_details: ServiceCatalogProvisioningDetails;
}
export class aws_sagemaker_project extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly project_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerProjectArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_project");
  }
}