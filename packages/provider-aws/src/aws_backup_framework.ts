import { TerraformConfig, TerraformResource } from "tfs";
export interface InputParameter {
  name?: string;
  value?: string;
}
export interface Scope {
  tags?: {
    [key: string]: string;
  };
}
export interface Control {
  name: string;
  input_parameter: InputParameter;
  scope: Scope;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsBackupFrameworkArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  control: Control;
  timeouts: Timeouts;
}
export class aws_backup_framework extends TerraformResource {
  readonly arn!: string;
  readonly creation_time!: string;
  readonly deployment_status!: string;
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupFrameworkArgs) {
    super(config, "resource", args, resourceName, "aws_backup_framework");
  }
}