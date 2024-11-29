import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsInternetGatewayArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsInternetGatewayArgs {
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsInternetGatewayArgstimeouts;
}
export class aws_internet_gateway extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsInternetGatewayArgs) {
    super(config, "resource", args, resourceName, "aws_internet_gateway");
  }
}