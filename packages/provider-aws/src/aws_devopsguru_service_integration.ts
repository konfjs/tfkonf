import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDevopsguruServiceIntegrationArgsKmsServerSideEncryption {}
export interface AwsDevopsguruServiceIntegrationArgsLogsAnomalyDetection {}
export interface AwsDevopsguruServiceIntegrationArgsOpsCenter {}
export interface AwsDevopsguruServiceIntegrationArgs {
  kms_server_side_encryption: AwsDevopsguruServiceIntegrationArgsKmsServerSideEncryption;
  logs_anomaly_detection: AwsDevopsguruServiceIntegrationArgsLogsAnomalyDetection;
  ops_center: AwsDevopsguruServiceIntegrationArgsOpsCenter;
}
export class aws_devopsguru_service_integration extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDevopsguruServiceIntegrationArgs) {
    super(config, "resource", args, resourceName, "aws_devopsguru_service_integration");
  }
}