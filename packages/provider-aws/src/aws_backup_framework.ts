import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBackupFrameworkArgscontrolInputParameter {
  name?: string;
  value?: string;
}
export interface AwsBackupFrameworkArgscontrolscope {
  tags?: {
    [key: string]: string;
  };
}
export interface AwsBackupFrameworkArgscontrol {
  name: string;
  input_parameter: AwsBackupFrameworkArgscontrolInputParameter;
  scope: AwsBackupFrameworkArgscontrolscope;
}
export interface AwsBackupFrameworkArgstimeouts {
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
  control: AwsBackupFrameworkArgscontrol;
  timeouts: AwsBackupFrameworkArgstimeouts;
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