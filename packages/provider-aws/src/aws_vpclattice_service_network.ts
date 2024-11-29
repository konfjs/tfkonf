import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpclatticeServiceNetworkArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_vpclattice_service_network extends TerraformResource {
  readonly arn!: string;
  readonly auth_type?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeServiceNetworkArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_service_network");
  }
}