import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNetworkmanagerDeviceArgsAwsLocation {
  subnet_arn?: string;
  zone?: string;
}
export interface AwsNetworkmanagerDeviceArgsLocation {
  address?: string;
  latitude?: string;
  longitude?: string;
}
export interface AwsNetworkmanagerDeviceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNetworkmanagerDeviceArgs {
  description?: string;
  global_network_id: string;
  model?: string;
  serial_number?: string;
  site_id?: string;
  tags?: {
    [key: string]: string;
  };
  type?: string;
  vendor?: string;
  aws_location: AwsNetworkmanagerDeviceArgsAwsLocation;
  location: AwsNetworkmanagerDeviceArgsLocation;
  timeouts: AwsNetworkmanagerDeviceArgsTimeouts;
}
export class aws_networkmanager_device extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerDeviceArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_device");
  }
}