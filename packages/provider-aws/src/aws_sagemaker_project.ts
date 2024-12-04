import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerProjectArgsServiceCatalogProvisioningDetailsProvisioningParameter {
  key: string;
  value?: string;
}

export interface AwsSagemakerProjectArgsServiceCatalogProvisioningDetails {
  path_id?: string;
  product_id: string;
  provisioning_parameter: AwsSagemakerProjectArgsServiceCatalogProvisioningDetailsProvisioningParameter;
}

export interface AwsSagemakerProjectArgs {
  project_description?: string;
  project_name: string;
  tags?: { [key: string]: string };
  service_catalog_provisioning_details: AwsSagemakerProjectArgsServiceCatalogProvisioningDetails;
}

export class aws_sagemaker_project extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly project_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerProjectArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_project");
  }
}
