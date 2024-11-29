import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDirectoryServiceRegionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDirectoryServiceRegionArgsVpcSettings {
  subnet_ids: string[];
  vpc_id: string;
}
export interface AwsDirectoryServiceRegionArgs {
  directory_id: string;
  region_name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsDirectoryServiceRegionArgsTimeouts;
  vpc_settings: AwsDirectoryServiceRegionArgsVpcSettings;
}
export class aws_directory_service_region extends TerraformResource {
  readonly desired_number_of_domain_controllers?: number;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDirectoryServiceRegionArgs) {
    super(config, "resource", args, resourceName, "aws_directory_service_region");
  }
}