import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsConfigConformancePackArgsInputParameter {
  parameter_name: string;
  parameter_value: string;
}
export interface AwsConfigConformancePackArgs {
  delivery_s3_bucket?: string;
  delivery_s3_key_prefix?: string;
  name: string;
  template_body?: string;
  template_s3_uri?: string;
  input_parameter: AwsConfigConformancePackArgsInputParameter;
}
export class aws_config_conformance_pack extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigConformancePackArgs) {
    super(config, "resource", args, resourceName, "aws_config_conformance_pack");
  }
}