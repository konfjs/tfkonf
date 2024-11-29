import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsStoragegatewayGatewayArgsMaintenanceStartTime {
  day_of_month?: string;
  day_of_week?: string;
  hour_of_day: number;
  minute_of_hour?: number;
}
export interface AwsStoragegatewayGatewayArgsSmbActiveDirectorySettings {
  domain_controllers?: string[];
  domain_name: string;
  organizational_unit?: string;
  password: string;
  timeout_in_seconds?: number;
  username: string;
}
export interface AwsStoragegatewayGatewayArgsTimeouts {
  create?: string;
}
export interface AwsStoragegatewayGatewayArgs {
  average_download_rate_limit_in_bits_per_sec?: number;
  average_upload_rate_limit_in_bits_per_sec?: number;
  cloudwatch_log_group_arn?: string;
  gateway_name: string;
  gateway_timezone: string;
  gateway_type?: string;
  gateway_vpc_endpoint?: string;
  medium_changer_type?: string;
  smb_file_share_visibility?: boolean;
  smb_guest_password?: string;
  tags?: {
    [key: string]: string;
  };
  tape_drive_type?: string;
  maintenance_start_time: AwsStoragegatewayGatewayArgsMaintenanceStartTime;
  smb_active_directory_settings: AwsStoragegatewayGatewayArgsSmbActiveDirectorySettings;
  timeouts: AwsStoragegatewayGatewayArgsTimeouts;
}
export class aws_storagegateway_gateway extends TerraformResource {
  readonly activation_key?: string;
  readonly arn!: string;
  readonly ec2_instance_id!: string;
  readonly endpoint_type!: string;
  readonly gateway_id!: string;
  readonly gateway_ip_address?: string;
  readonly gateway_network_interface!: any[];
  readonly host_environment!: string;
  readonly id?: string;
  readonly smb_security_strategy?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsStoragegatewayGatewayArgs) {
    super(config, "resource", args, resourceName, "aws_storagegateway_gateway");
  }
}