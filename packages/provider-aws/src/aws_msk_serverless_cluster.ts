import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMskServerlessClusterArgsClientAuthenticationsasliam {
  enabled: boolean;
}
export interface AwsMskServerlessClusterArgsClientAuthenticationsasl {
  iam: AwsMskServerlessClusterArgsClientAuthenticationsasliam;
}
export interface AwsMskServerlessClusterArgsClientAuthentication {
  sasl: AwsMskServerlessClusterArgsClientAuthenticationsasl;
}
export interface AwsMskServerlessClusterArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsMskServerlessClusterArgsVpcConfig {
  subnet_ids: string[];
}
export interface AwsMskServerlessClusterArgs {
  cluster_name: string;
  tags?: {
    [key: string]: string;
  };
  client_authentication: AwsMskServerlessClusterArgsClientAuthentication;
  timeouts: AwsMskServerlessClusterArgstimeouts;
  vpc_config: AwsMskServerlessClusterArgsVpcConfig;
}
export class aws_msk_serverless_cluster extends TerraformResource {
  readonly arn!: string;
  readonly cluster_uuid!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMskServerlessClusterArgs) {
    super(config, "resource", args, resourceName, "aws_msk_serverless_cluster");
  }
}