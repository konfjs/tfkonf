import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailDatabaseArgs {
  backup_retention_enabled?: boolean;
  blueprint_id: string;
  bundle_id: string;
  final_snapshot_name?: string;
  master_database_name: string;
  master_password: string;
  master_username: string;
  publicly_accessible?: boolean;
  relational_database_name: string;
  skip_final_snapshot?: boolean;
  tags?: { [key: string]: string };
}

export class aws_lightsail_database extends TerraformResource {
  readonly apply_immediately?: boolean;
  readonly arn!: string;
  readonly availability_zone?: string;
  readonly ca_certificate_identifier!: string;
  readonly cpu_count!: number;
  readonly created_at!: string;
  readonly disk_size!: number;
  readonly engine!: string;
  readonly engine_version!: string;
  readonly id?: string;
  readonly master_endpoint_address!: string;
  readonly master_endpoint_port!: number;
  readonly preferred_backup_window?: string;
  readonly preferred_maintenance_window?: string;
  readonly ram_size!: number;
  readonly secondary_availability_zone!: string;
  readonly support_code!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailDatabaseArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_database");
  }
}
