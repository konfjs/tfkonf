import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsServicecatalogProvisioningArtifactArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface AwsServicecatalogProvisioningArtifactArgs {
  accept_language?: string;
  active?: boolean;
  disable_template_validation?: boolean;
  guidance?: string;
  product_id: string;
  template_physical_id?: string;
  template_url?: string;
  type?: string;
  timeouts?: AwsServicecatalogProvisioningArtifactArgsTimeouts;
}
export class aws_servicecatalog_provisioning_artifact extends TerraformResource {
  readonly created_time!: string;
  readonly description?: string;
  readonly id?: string;
  readonly name?: string;
  readonly provisioning_artifact_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogProvisioningArtifactArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_provisioning_artifact");
  }
}