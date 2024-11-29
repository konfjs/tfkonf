import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNetworkmanagerCoreNetworkArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNetworkmanagerCoreNetworkArgs {
  base_policy_document?: string;
  base_policy_region?: string;
  base_policy_regions?: string[];
  create_base_policy?: boolean;
  description?: string;
  global_network_id: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsNetworkmanagerCoreNetworkArgstimeouts;
}
export class aws_networkmanager_core_network extends TerraformResource {
  readonly arn!: string;
  readonly created_at!: string;
  readonly edges!: any[];
  readonly id?: string;
  readonly segments!: any[];
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerCoreNetworkArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_core_network");
  }
}