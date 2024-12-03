import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCodestarconnectionsHostArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCodestarconnectionsHostArgsVpcConfiguration {
  security_group_ids: string[];
  subnet_ids: string[];
  tls_certificate?: string;
  vpc_id: string;
}
export interface AwsCodestarconnectionsHostArgs {
  name: string;
  provider_endpoint: string;
  provider_type: string;
  timeouts?: AwsCodestarconnectionsHostArgsTimeouts;
  vpc_configuration: AwsCodestarconnectionsHostArgsVpcConfiguration;
}
export class aws_codestarconnections_host extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodestarconnectionsHostArgs) {
    super(config, "resource", args, resourceName, "aws_codestarconnections_host");
  }
}