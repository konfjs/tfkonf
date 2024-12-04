import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDmsReplicationInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDmsReplicationInstanceArgs {
  allow_major_version_upgrade?: boolean;
  apply_immediately?: boolean;
  replication_instance_class: string;
  replication_instance_id: string;
  tags?: { [key: string]: string };
  timeouts?: AwsDmsReplicationInstanceArgsTimeouts;
}

export class aws_dms_replication_instance extends TerraformResource {
  readonly allocated_storage?: number;
  readonly auto_minor_version_upgrade?: boolean;
  readonly availability_zone?: string;
  readonly engine_version?: string;
  readonly id?: string;
  readonly kms_key_arn?: string;
  readonly multi_az?: boolean;
  readonly network_type?: string;
  readonly preferred_maintenance_window?: string;
  readonly publicly_accessible?: boolean;
  readonly replication_instance_arn!: string;
  readonly replication_instance_private_ips!: string[];
  readonly replication_instance_public_ips!: string[];
  readonly replication_subnet_group_id?: string;
  readonly tags_all?: { [key: string]: string };
  readonly vpc_security_group_ids?: string[];

  constructor(config: TerraformConfig, resourceName: string, args: AwsDmsReplicationInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_dms_replication_instance");
  }
}
