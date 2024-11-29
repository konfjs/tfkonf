import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsServicecatalogTagOptionResourceAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}
export interface AwsServicecatalogTagOptionResourceAssociationArgs {
  resource_id: string;
  tag_option_id: string;
  timeouts: AwsServicecatalogTagOptionResourceAssociationArgsTimeouts;
}
export class aws_servicecatalog_tag_option_resource_association extends TerraformResource {
  readonly id?: string;
  readonly resource_arn!: string;
  readonly resource_created_time!: string;
  readonly resource_description!: string;
  readonly resource_name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogTagOptionResourceAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_tag_option_resource_association");
  }
}