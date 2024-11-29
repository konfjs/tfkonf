import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDaxClusterArgsServerSideEncryption {
  enabled?: boolean;
}
export interface AwsDaxClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDaxClusterArgs {
  availability_zones?: string[];
  cluster_endpoint_encryption_type?: string;
  cluster_name: string;
  description?: string;
  iam_role_arn: string;
  node_type: string;
  notification_topic_arn?: string;
  replication_factor: number;
  tags?: {
    [key: string]: string;
  };
  server_side_encryption: AwsDaxClusterArgsServerSideEncryption;
  timeouts: AwsDaxClusterArgsTimeouts;
}
export class aws_dax_cluster extends TerraformResource {
  readonly arn!: string;
  readonly cluster_address!: string;
  readonly configuration_endpoint!: string;
  readonly id?: string;
  readonly maintenance_window?: string;
  readonly nodes!: any[];
  readonly parameter_group_name?: string;
  readonly port!: number;
  readonly security_group_ids?: string[];
  readonly subnet_group_name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDaxClusterArgs) {
    super(config, "resource", args, resourceName, "aws_dax_cluster");
  }
}