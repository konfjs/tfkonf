import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsServiceDiscoveryPublicDnsNamespaceArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_service_discovery_public_dns_namespace extends TerraformResource {
  readonly arn!: string;
  readonly hosted_zone!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsServiceDiscoveryPublicDnsNamespaceArgs) {
    super(config, "resource", args, resourceName, "aws_service_discovery_public_dns_namespace");
  }
}