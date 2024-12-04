import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogTagOptionArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsServicecatalogTagOptionArgs {
  active?: boolean;
  key: string;
  value: string;
  timeouts?: AwsServicecatalogTagOptionArgsTimeouts;
}

export class aws_servicecatalog_tag_option extends TerraformResource {
  readonly id?: string;
  readonly owner!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogTagOptionArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_tag_option");
  }
}
