import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppconfigExtensionAssociationArgs {
  extension_arn: string;
  parameters?: {
    [key: string]: string;
  };
  resource_arn: string;
}
export class aws_appconfig_extension_association extends TerraformResource {
  readonly arn!: string;
  readonly extension_version!: number;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppconfigExtensionAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_appconfig_extension_association");
  }
}