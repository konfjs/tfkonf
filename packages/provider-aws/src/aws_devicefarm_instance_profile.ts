import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevicefarmInstanceProfileArgs {
  description?: string;
  exclude_app_packages_from_cleanup?: string[];
  name: string;
  package_cleanup?: boolean;
  reboot_after_use?: boolean;
  tags?: { [key: string]: string };
}

export class aws_devicefarm_instance_profile extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsDevicefarmInstanceProfileArgs) {
    super(config, "resource", args, resourceName, "aws_devicefarm_instance_profile");
  }
}
