import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApprunnerVpcConnectorArgs {
  security_groups: string[];
  subnets: string[];
  tags?: {
    [key: string]: string;
  };
  vpc_connector_name: string;
}
export class aws_apprunner_vpc_connector extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_connector_revision!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApprunnerVpcConnectorArgs) {
    super(config, "resource", args, resourceName, "aws_apprunner_vpc_connector");
  }
}