import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAppstreamImageBuilderArgsAccessEndpoint {
  endpoint_type: string;
}
export interface AwsAppstreamImageBuilderArgsDomainJoinInfo {
  directory_name?: string;
  organizational_unit_distinguished_name?: string;
}
export interface AwsAppstreamImageBuilderArgsVpcConfig {}
export interface AwsAppstreamImageBuilderArgs {
  instance_type: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  access_endpoint: AwsAppstreamImageBuilderArgsAccessEndpoint;
  domain_join_info: AwsAppstreamImageBuilderArgsDomainJoinInfo;
  vpc_config: AwsAppstreamImageBuilderArgsVpcConfig;
}
export class aws_appstream_image_builder extends TerraformResource {
  readonly appstream_agent_version?: string;
  readonly arn!: string;
  readonly created_time!: string;
  readonly description?: string;
  readonly display_name?: string;
  readonly enable_default_internet_access?: boolean;
  readonly iam_role_arn?: string;
  readonly id?: string;
  readonly image_arn?: string;
  readonly image_name?: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppstreamImageBuilderArgs) {
    super(config, "resource", args, resourceName, "aws_appstream_image_builder");
  }
}