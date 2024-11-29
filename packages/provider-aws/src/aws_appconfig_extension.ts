import { TerraformConfig, TerraformResource } from "tfs";
export interface Action {
  description?: string;
  name: string;
  role_arn?: string;
  uri: string;
}
export interface ActionPoint {
  point: string;
  action: Action;
}
export interface Parameter {
  description?: string;
  name: string;
  required?: boolean;
}
export interface AwsAppconfigExtensionArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  action_point: ActionPoint;
  parameter: Parameter;
}
export class aws_appconfig_extension extends TerraformResource {
  readonly arn!: string;
  readonly description?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppconfigExtensionArgs) {
    super(config, "resource", args, resourceName, "aws_appconfig_extension");
  }
}