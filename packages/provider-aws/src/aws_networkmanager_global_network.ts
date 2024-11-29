import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNetworkmanagerGlobalNetworkArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNetworkmanagerGlobalNetworkArgs {
  description?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsNetworkmanagerGlobalNetworkArgstimeouts;
}
export class aws_networkmanager_global_network extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerGlobalNetworkArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_global_network");
  }
}