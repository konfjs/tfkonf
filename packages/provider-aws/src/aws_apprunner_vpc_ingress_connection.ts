import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsApprunnerVpcIngressConnectionArgsIngressVpcConfiguration {
  vpc_endpoint_id?: string;
  vpc_id?: string;
}
export interface AwsApprunnerVpcIngressConnectionArgs {
  name: string;
  service_arn: string;
  tags?: {
    [key: string]: string;
  };
  ingress_vpc_configuration: AwsApprunnerVpcIngressConnectionArgsIngressVpcConfiguration;
}
export class aws_apprunner_vpc_ingress_connection extends TerraformResource {
  readonly arn!: string;
  readonly domain_name!: string;
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsApprunnerVpcIngressConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_apprunner_vpc_ingress_connection");
  }
}