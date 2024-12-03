import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsServicecatalogProductArgsProvisioningArtifactParameters {
  description?: string;
  disable_template_validation?: boolean;
  name?: string;
  template_physical_id?: string;
  template_url?: string;
  type?: string;
}
export interface AwsServicecatalogProductArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface AwsServicecatalogProductArgs {
  accept_language?: string;
  name: string;
  owner: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  provisioning_artifact_parameters: AwsServicecatalogProductArgsProvisioningArtifactParameters;
  timeouts?: AwsServicecatalogProductArgsTimeouts;
}
export class aws_servicecatalog_product extends TerraformResource {
  readonly arn!: string;
  readonly created_time!: string;
  readonly description?: string;
  readonly distributor?: string;
  readonly has_default_path!: boolean;
  readonly id?: string;
  readonly status!: string;
  readonly support_description?: string;
  readonly support_email?: string;
  readonly support_url?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogProductArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_product");
  }
}