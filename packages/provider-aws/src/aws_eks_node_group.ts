import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEksNodeGroupArgsLaunchTemplate {
  version: string;
}

export interface AwsEksNodeGroupArgsRemoteAccess {
  ec2_ssh_key?: string;
  source_security_group_ids?: string[];
}

export interface AwsEksNodeGroupArgsScalingConfig {
  desired_size: number;
  max_size: number;
  min_size: number;
}

export interface AwsEksNodeGroupArgsTaint {
  effect: string;
  key: string;
  value?: string;
}

export interface AwsEksNodeGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEksNodeGroupArgsUpdateConfig {
  max_unavailable?: number;
  max_unavailable_percentage?: number;
}

export interface AwsEksNodeGroupArgs {
  cluster_name: string;
  force_update_version?: boolean;
  labels?: { [key: string]: string };
  node_role_arn: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
  launch_template: AwsEksNodeGroupArgsLaunchTemplate;
  remote_access: AwsEksNodeGroupArgsRemoteAccess;
  scaling_config: AwsEksNodeGroupArgsScalingConfig;
  taint: AwsEksNodeGroupArgsTaint;
  timeouts?: AwsEksNodeGroupArgsTimeouts;
  update_config: AwsEksNodeGroupArgsUpdateConfig;
}

export class aws_eks_node_group extends TerraformResource {
  readonly ami_type?: string;
  readonly arn!: string;
  readonly capacity_type?: string;
  readonly disk_size?: number;
  readonly id?: string;
  readonly instance_types?: string[];
  readonly node_group_name?: string;
  readonly node_group_name_prefix?: string;
  readonly release_version?: string;
  readonly resources!: any[];
  readonly status!: string;
  readonly tags_all?: { [key: string]: string };
  readonly version?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEksNodeGroupArgs) {
    super(config, "resource", args, resourceName, "aws_eks_node_group");
  }
}
