import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEfsFileSystemArgsLifecyclePolicy {
  transition_to_archive?: string;
  transition_to_ia?: string;
  transition_to_primary_storage_class?: string;
}
export interface AwsEfsFileSystemArgsProtection {}
export interface AwsEfsFileSystemArgs {
  provisioned_throughput_in_mibps?: number;
  tags?: {
    [key: string]: string;
  };
  throughput_mode?: string;
  lifecycle_policy: AwsEfsFileSystemArgsLifecyclePolicy;
  protection: AwsEfsFileSystemArgsProtection;
}
export class aws_efs_file_system extends TerraformResource {
  readonly arn!: string;
  readonly availability_zone_id!: string;
  readonly availability_zone_name?: string;
  readonly creation_token?: string;
  readonly dns_name!: string;
  readonly encrypted?: boolean;
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly name!: string;
  readonly number_of_mount_targets!: number;
  readonly owner_id!: string;
  readonly performance_mode?: string;
  readonly size_in_bytes!: any[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEfsFileSystemArgs) {
    super(config, "resource", args, resourceName, "aws_efs_file_system");
  }
}