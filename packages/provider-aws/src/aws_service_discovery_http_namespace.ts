import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsServiceDiscoveryHttpNamespaceArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_service_discovery_http_namespace extends TerraformResource {
  readonly arn!: string;
  readonly http_name!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsServiceDiscoveryHttpNamespaceArgs) {
    super(config, "resource", args, resourceName, "aws_service_discovery_http_namespace");
  }
}