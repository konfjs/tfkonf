import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppconfigApplicationArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_appconfig_application extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppconfigApplicationArgs) {
    super(config, "resource", args, resourceName, "aws_appconfig_application");
  }
}