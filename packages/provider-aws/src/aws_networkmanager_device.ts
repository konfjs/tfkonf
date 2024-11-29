import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNetworkmanagerDeviceArgsAwsLocation {
  subnet_arn?: string;
  zone?: string;
}
export interface AwsNetworkmanagerDeviceArgslocation {
  address?: string;
  latitude?: string;
  longitude?: string;
}
export interface AwsNetworkmanagerDeviceArgstimeouts {
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
  location: AwsNetworkmanagerDeviceArgslocation;
  timeouts: AwsNetworkmanagerDeviceArgstimeouts;
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