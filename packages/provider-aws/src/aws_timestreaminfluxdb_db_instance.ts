import { TerraformConfig, TerraformResource } from "tfs";
export interface S3Configuration {
  bucket_name: string;
  enabled: boolean;
}
export interface LogDeliveryConfiguration {
  s3_configuration: S3Configuration;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsTimestreaminfluxdbDbInstanceArgs {
  allocated_storage: number;
  bucket: string;
  db_instance_type: string;
  db_parameter_group_identifier?: string;
  name: string;
  organization: string;
  password: string;
  tags?: {
    [key: string]: string;
  };
  username: string;
  vpc_security_group_ids: string[];
  vpc_subnet_ids: string[];
  log_delivery_configuration: LogDeliveryConfiguration;
  timeouts: Timeouts;
}
export class aws_timestreaminfluxdb_db_instance extends TerraformResource {
  readonly arn!: string;
  readonly availability_zone!: string;
  readonly db_storage_type?: string;
  readonly deployment_type?: string;
  readonly endpoint!: string;
  readonly id!: string;
  readonly influx_auth_parameters_secret_arn!: string;
  readonly publicly_accessible?: boolean;
  readonly secondary_availability_zone!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsTimestreaminfluxdbDbInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_timestreaminfluxdb_db_instance");
  }
}