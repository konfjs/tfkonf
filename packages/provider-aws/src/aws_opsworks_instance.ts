import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsOpsworksInstanceArgsEbsBlockDevice {
  delete_on_termination?: boolean;
  device_name: string;
}
export interface AwsOpsworksInstanceArgsEphemeralBlockDevice {
  device_name: string;
  virtual_name: string;
}
export interface AwsOpsworksInstanceArgsRootBlockDevice {
  delete_on_termination?: boolean;
}
export interface AwsOpsworksInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsOpsworksInstanceArgs {
  agent_version?: string;
  architecture?: string;
  auto_scaling_type?: string;
  delete_ebs?: boolean;
  delete_eip?: boolean;
  ebs_optimized?: boolean;
  install_updates_on_boot?: boolean;
  instance_type?: string;
  layer_ids: string[];
  stack_id: string;
  state?: string;
  ebs_block_device: AwsOpsworksInstanceArgsEbsBlockDevice;
  ephemeral_block_device: AwsOpsworksInstanceArgsEphemeralBlockDevice;
  root_block_device: AwsOpsworksInstanceArgsRootBlockDevice;
  timeouts?: AwsOpsworksInstanceArgsTimeouts;
}
export class aws_opsworks_instance extends TerraformResource {
  readonly ami_id?: string;
  readonly availability_zone?: string;
  readonly created_at?: string;
  readonly ec2_instance_id!: string;
  readonly ecs_cluster_arn?: string;
  readonly elastic_ip?: string;
  readonly hostname?: string;
  readonly id?: string;
  readonly infrastructure_class?: string;
  readonly instance_profile_arn?: string;
  readonly last_service_error_id!: string;
  readonly os?: string;
  readonly platform!: string;
  readonly private_dns!: string;
  readonly private_ip!: string;
  readonly public_dns!: string;
  readonly public_ip!: string;
  readonly registered_by!: string;
  readonly reported_agent_version!: string;
  readonly reported_os_family!: string;
  readonly reported_os_name!: string;
  readonly reported_os_version!: string;
  readonly root_device_type?: string;
  readonly root_device_volume_id!: string;
  readonly security_group_ids?: string[];
  readonly ssh_host_dsa_key_fingerprint!: string;
  readonly ssh_host_rsa_key_fingerprint!: string;
  readonly ssh_key_name?: string;
  readonly status?: string;
  readonly subnet_id?: string;
  readonly tenancy?: string;
  readonly virtualization_type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpsworksInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_opsworks_instance");
  }
}