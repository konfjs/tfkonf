import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCodeartifactRepositoryArgsExternalConnections {
  external_connection_name: string;
}
export interface AwsCodeartifactRepositoryArgsUpstream {
  repository_name: string;
}
export interface AwsCodeartifactRepositoryArgs {
  description?: string;
  domain: string;
  repository: string;
  tags?: {
    [key: string]: string;
  };
  external_connections: AwsCodeartifactRepositoryArgsExternalConnections;
  upstream: AwsCodeartifactRepositoryArgsUpstream;
}
export class aws_codeartifact_repository extends TerraformResource {
  readonly administrator_account!: string;
  readonly arn!: string;
  readonly domain_owner?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodeartifactRepositoryArgs) {
    super(config, "resource", args, resourceName, "aws_codeartifact_repository");
  }
}