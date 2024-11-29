import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsEfsMountTargetArgs {
  file_system_id: string;
  subnet_id: string;
  timeouts: Timeouts;
}
export class aws_efs_mount_target extends TerraformResource {
  readonly availability_zone_id!: string;
  readonly availability_zone_name!: string;
  readonly dns_name!: string;
  readonly file_system_arn!: string;
  readonly id?: string;
  readonly ip_address?: string;
  readonly mount_target_dns_name!: string;
  readonly network_interface_id!: string;
  readonly owner_id!: string;
  readonly security_groups?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsEfsMountTargetArgs) {
    super(config, "resource", args, resourceName, "aws_efs_mount_target");
  }
}