import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRamSharingWithOrganizationArgs {}
export class aws_ram_sharing_with_organization extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRamSharingWithOrganizationArgs) {
    super(config, "resource", args, resourceName, "aws_ram_sharing_with_organization");
  }
}