import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsQuicksightVpcConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsQuicksightVpcConnectionArgs {
  dns_resolvers?: string[];
  name: string;
  role_arn: string;
  security_group_ids: string[];
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
  vpc_connection_id: string;
  timeouts: AwsQuicksightVpcConnectionArgsTimeouts;
}
export class aws_quicksight_vpc_connection extends TerraformResource {
  readonly arn!: string;
  readonly availability_status!: string;
  readonly aws_account_id?: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightVpcConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_vpc_connection");
  }
}