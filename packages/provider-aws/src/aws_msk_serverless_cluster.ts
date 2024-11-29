import { TerraformConfig, TerraformResource } from "tfs";
export interface Iam {
  enabled: boolean;
}
export interface Sasl {
  iam: Iam;
}
export interface ClientAuthentication {
  sasl: Sasl;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface VpcConfig {
  subnet_ids: string[];
}
export interface AwsMskServerlessClusterArgs {
  cluster_name: string;
  tags?: {
    [key: string]: string;
  };
  client_authentication: ClientAuthentication;
  timeouts: Timeouts;
  vpc_config: VpcConfig;
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