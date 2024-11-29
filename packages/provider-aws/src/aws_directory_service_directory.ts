import { TerraformConfig, TerraformResource } from "tfs";
export interface ConnectSettings {
  customer_dns_ips: string[];
  customer_username: string;
  subnet_ids: string[];
  vpc_id: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface VpcSettings {
  subnet_ids: string[];
  vpc_id: string;
}
export interface AwsDirectoryServiceDirectoryArgs {
  description?: string;
  enable_sso?: boolean;
  name: string;
  password: string;
  tags?: {
    [key: string]: string;
  };
  type?: string;
  connect_settings: ConnectSettings;
  timeouts: Timeouts;
  vpc_settings: VpcSettings;
}
export class aws_directory_service_directory extends TerraformResource {
  readonly access_url!: string;
  readonly alias?: string;
  readonly desired_number_of_domain_controllers?: number;
  readonly dns_ip_addresses!: string[];
  readonly edition?: string;
  readonly id?: string;
  readonly security_group_id!: string;
  readonly short_name?: string;
  readonly size?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDirectoryServiceDirectoryArgs) {
    super(config, "resource", args, resourceName, "aws_directory_service_directory");
  }
}