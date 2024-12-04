import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerGlobalNetworkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNetworkmanagerGlobalNetworkArgs {
  description?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsNetworkmanagerGlobalNetworkArgsTimeouts;
}

export class aws_networkmanager_global_network extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerGlobalNetworkArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_global_network");
  }
}
