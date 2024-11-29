import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBackupFrameworkArgsControlInputParameter {
  name?: string;
  value?: string;
}
export interface AwsBackupFrameworkArgsControlScope {
  tags?: {
    [key: string]: string;
  };
}
export interface AwsBackupFrameworkArgsControl {
  name: string;
  input_parameter: AwsBackupFrameworkArgsControlInputParameter;
  scope: AwsBackupFrameworkArgsControlScope;
}
export interface AwsBackupFrameworkArgsTimeouts {
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
  control: AwsBackupFrameworkArgsControl;
  timeouts: AwsBackupFrameworkArgsTimeouts;
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