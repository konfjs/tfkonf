import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLightsailInstanceArgsAddOn {
  snapshot_time: string;
  status: string;
  type: string;
}
export interface AwsLightsailInstanceArgs {
  availability_zone: string;
  blueprint_id: string;
  bundle_id: string;
  ip_address_type?: string;
  key_pair_name?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  user_data?: string;
  add_on: AwsLightsailInstanceArgsAddOn;
}
export class aws_lightsail_instance extends TerraformResource {
  readonly arn!: string;
  readonly cpu_count!: number;
  readonly created_at!: string;
  readonly id?: string;
  readonly ipv6_addresses!: string[];
  readonly is_static_ip!: boolean;
  readonly private_ip_address!: string;
  readonly public_ip_address!: string;
  readonly ram_size!: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly username!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_instance");
  }
}