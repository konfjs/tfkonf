import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsPrometheusWorkspaceArgsLoggingConfiguration {
  log_group_arn: string;
}
export interface AwsPrometheusWorkspaceArgs {
  alias?: string;
  kms_key_arn?: string;
  tags?: {
    [key: string]: string;
  };
  logging_configuration: AwsPrometheusWorkspaceArgsLoggingConfiguration;
}
export class aws_prometheus_workspace extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly prometheus_endpoint!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsPrometheusWorkspaceArgs) {
    super(config, "resource", args, resourceName, "aws_prometheus_workspace");
  }
}