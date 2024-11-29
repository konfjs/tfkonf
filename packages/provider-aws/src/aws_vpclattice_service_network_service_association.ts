import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpclatticeServiceNetworkServiceAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpclatticeServiceNetworkServiceAssociationArgs {
  service_identifier: string;
  service_network_identifier: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsVpclatticeServiceNetworkServiceAssociationArgsTimeouts;
}
export class aws_vpclattice_service_network_service_association extends TerraformResource {
  readonly arn!: string;
  readonly created_by!: string;
  readonly custom_domain_name!: string;
  readonly dns_entry!: any[];
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeServiceNetworkServiceAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_service_network_service_association");
  }
}