import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigOrganizationConformancePackArgsInputParameter {
  parameter_name: string;
  parameter_value: string;
}

export interface AwsConfigOrganizationConformancePackArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsConfigOrganizationConformancePackArgs {
  delivery_s3_bucket?: string;
  delivery_s3_key_prefix?: string;
  excluded_accounts?: string[];
  name: string;
  template_body?: string;
  template_s3_uri?: string;
  input_parameter: AwsConfigOrganizationConformancePackArgsInputParameter;
  timeouts?: AwsConfigOrganizationConformancePackArgsTimeouts;
}

export class aws_config_organization_conformance_pack extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigOrganizationConformancePackArgs) {
    super(config, "resource", args, resourceName, "aws_config_organization_conformance_pack");
  }
}
